import fs from "fs";
import { ipfsFetch, isIpfsUrl, type IpfsGatewayTemplate } from "@crossbell/ipfs-fetch";
import {
    createIndexer,
    type NoteEntity,
} from "crossbell";
import yaml from "yaml";
import path from "path";

const indexer = createIndexer();
const notesFolder = path.join(process.cwd() + "/src/content/post")
let notes: NoteEntity[] = []

if (!fs.existsSync(notesFolder)) {
    fs.mkdirSync(notesFolder, { recursive: true });
}

export default async function exportDataOfCharacter(
    handle: string,
) {
    const character = await indexer.character.getByHandle(handle);
    if (!character) {
        throw new Error("Character not found");
    }

    while (true) {
        const notesCurPage = await indexer.note.getMany({
            characterId: character.characterId,
            limit: 1000,
        });
        notes = notes.concat(notesCurPage.list);
        if (!notesCurPage.cursor) {
            break;
        }
    }

    for (let i = 0; i < notes.length; i++) {
        const note = notes[i];
        await saveNoteInMarkdown(note);
    }
}

async function saveNoteInMarkdown(note: NoteEntity) {
    let md = note.metadata?.content?.content ?? "";
    if (note.metadata?.content?.title) {
        md = `# ${note.metadata.content.title}

${md}`;
    }

    // append attachments
    if (note.metadata?.content?.attachments) {
        note.metadata.content.attachments.forEach((attachment) => {
            if (attachment.mime_type?.startsWith("image/")) {
                md += `\n\n![${attachment.alt ?? ""}](${attachment.address ?? attachment.content
                    })`;
            } else if (attachment.mime_type?.startsWith("video/")) {
                md += `\n\n<video src="${attachment.address ?? attachment.content
                    }" controls></video>`;
            } else if (attachment.mime_type?.startsWith("audio/")) {
                md += `\n\n<audio src="${attachment.address ?? attachment.content
                    }" controls></audio>`;
            } else {
                md += `\n\n[${attachment.alt ?? ""}](${attachment.address ?? attachment.content
                    })`;
            }
        });
    }

    const slug = (
        note.metadata?.content?.attributes?.filter((value) => {
            return value.trait_type === "xlog_slug"
        })[0].value?.toString() ||
        note.metadata?.content?.title ||
        md.trim().split("\n")[0].replace("#", "")?.trim().slice(0, 50) ||
        "note"
    ).replace(/\/|\\|\?|%|\*|:|\||"|<|>/g, "-").toLowerCase();

    // convert all links to relative links
    const { content: newContent, mediaList } = convertMediaLinks(md, slug);

    md = newContent;

    // prepend metadata to frontmatter
    const frontmatter = {
        ...note.metadata?.content,
        content: undefined,
        attachments: undefined,
    };
    md =
        `---
${yaml.stringify(frontmatter)}
---\n\n` + md;

    // save attachments
    if (mediaList.length > 0) {
        const attachmentsFolder = path.join(notesFolder, slug);
        if (!fs.existsSync(attachmentsFolder)) {
            fs.mkdirSync(attachmentsFolder);
        }

        await Promise.all(
            mediaList.map(async (mediaItem) => {
                const fileName = mediaItem.fileName;
                if (!fileName) return;
                try {
                    const gateways: IpfsGatewayTemplate[] = [
                        'https://ipfs.xlog.app/ipfs/{cid}{pathToResource}',
                    ]
                    const res = isIpfsUrl(mediaItem.mediaLink)
                        ? await ipfsFetch(mediaItem.mediaLink, { gateways })
                        : await fetch(mediaItem.mediaLink);
                    const data = await res.blob();
                    const fileType = res.headers.get('content-type')?.split('/').pop() ?? 'png';
                    Bun.write(path.join(attachmentsFolder, `${fileName}.${fileType}`), data);
                    md = md.replaceAll(
                        `./${slug}/${fileName}`,
                        `./${slug}/${fileName}.${fileType}`
                    ); // add file extension to links
                } catch (e) {
                    console.error(`Failed to fetch attachment ${mediaItem}`, e);
                }
            })
        );
    }
    // save note
    Bun.write(path.join(notesFolder, `${slug}.md`), md);
}

function convertMediaLinks(content: string, slug: string) {
    // example: ![alt](https://example.com/image.png "title")
    // the alt and title are optional
    // $1 = alt, $2 = url, $3 = title without quotes
    const imageRegex = /!\[(.*?)\]\((\S*?)\s*("(.*?)")?\)/g;
    const imageHtmlRegex = /<img .*?src="(.*?)"(.*?)>/g;
    const videoRegex = /<video .*?src="(.*?)"(.*?)><\/video>/g;
    const audioRegex = /<audio .*?src="(.*?)"(.*?)><\/audio>/g;

    const protocols = ["https://", "http://", "ipfs://"];

    // Array to store all the media links and fileName list
    const mediaList: {
        mediaLink: string,
        fileName: string
    }[] = []

    content = content.replace(imageRegex, (match, alt, url) => {
        const oUrl = url;
        let fileName = alt ? alt : url.split("/").pop();
        fileName = fileName.replace(/\s+/g, "_").toLowerCase();
        mediaList.push({ mediaLink: url, fileName: fileName })
        protocols.forEach((protocol) => {
            url = url.replace(protocol, `./${slug}/`);
        });
        return match.replace(oUrl, `./${slug}/${fileName}`);
    });

    const replacer = (match: string, url: any) => {
        const oUrl = url;
        let fileName = url.split("/").pop();
        fileName = fileName.replace(/\s+/g, "_").toLowerCase();
        mediaList.push({ mediaLink: url, fileName: fileName })
        protocols.forEach((protocol) => {
            url = url.replace(protocol, `./${slug}/`);
        });
        return match.replace(oUrl, `./${slug}/${fileName}`);
    };

    content = content.replace(imageHtmlRegex, replacer);

    content = content.replace(videoRegex, replacer);

    content = content.replace(audioRegex, replacer);

    return { content, mediaList };
}

