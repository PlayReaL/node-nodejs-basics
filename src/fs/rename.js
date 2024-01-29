import * as fs from "node:fs";
import * as path from "node:path";
import { fileURLToPath } from "url";

const rename = async () => {
    const fileName = fileURLToPath(import.meta.url);
    const oldFileName = path.join(
        path.dirname(fileName),
        "files",
        "wrongFilename.txt"
    );
    const newFileName = path.join(
        path.dirname(fileName),
        "files",
        "properFilename.md"
    );

    try {
        await fs.promises.rename(oldFileName, newFileName);
    } catch (error) {
        throw new Error("FS operation failed");
    }
};

await rename();
