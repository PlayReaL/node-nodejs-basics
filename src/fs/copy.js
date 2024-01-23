import * as fs from "node:fs";
import * as path from "node:path";
import { fileURLToPath } from "url";

const copy = async () => {
    const fileName = fileURLToPath(import.meta.url);
    const srcPath = path.join(path.dirname(fileName), "files");
    const destPath = path.join(path.dirname(fileName), "files_copy");

    try {
        await fs.promises.cp(srcPath, destPath, {
            errorOnExist: true,
            force: false,
            recursive: true,
        });
    } catch (error) {
        throw new Error("FS operation failed");
    }
};

await copy();
