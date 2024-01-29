import * as fs from "node:fs";
import * as path from "node:path";
import { fileURLToPath } from "url";

const list = async () => {
    const fileName = fileURLToPath(import.meta.url);
    const folderPath = path.join(path.dirname(fileName), "files");

    try {
        const files = await fs.promises.readdir(folderPath);
        files.map((file) => console.log(file));
    } catch (error) {
        throw new Error("FS operation failed");
    }
};

await list();
