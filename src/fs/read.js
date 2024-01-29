import * as fs from "node:fs";
import * as path from "node:path";
import { fileURLToPath } from "url";

const read = async () => {
    const fileName = fileURLToPath(import.meta.url);
    const filePath = path.join(
        path.dirname(fileName),
        "files",
        "fileToRead.txt"
    );

    try {
        const content = await fs.promises.readFile(filePath, "utf-8");
        console.log(content);
    } catch (error) {
        throw new Error("FS operation failed");
    }
};

await read();
