import * as fs from "node:fs";
import * as path from "node:path";
import { fileURLToPath } from "url";

const create = async () => {
    const fileName = fileURLToPath(import.meta.url);
    const filePath = path.join(path.dirname(fileName), "files", "fresh.txt");
    const fileContent = "I am fresh and young";

    try {
        await fs.promises.writeFile(filePath, fileContent, { flag: "wx" });
    } catch (error) {
        throw new Error("FS operation failed");
    }
};

await create();
