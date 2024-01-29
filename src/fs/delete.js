import * as fs from "node:fs";
import * as path from "node:path";
import { fileURLToPath } from "url";

const remove = async () => {
    const fileName = fileURLToPath(import.meta.url);
    const filePath = path.join(
        path.dirname(fileName),
        "files",
        "fileToRemove.txt"
    );

    try {
        await fs.promises.rm(filePath);
    } catch (error) {
        throw new Error("FS operation failed");
    }
};

await remove();
