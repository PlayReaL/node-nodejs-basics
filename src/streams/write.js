import * as fs from "node:fs";
import * as path from "node:path";
import { fileURLToPath } from "url";

const write = async () => {
    const fileName = fileURLToPath(import.meta.url);
    const filePath = path.join(
        path.dirname(fileName),
        "files",
        "fileToWrite.txt"
    );
    const stream = fs.createWriteStream(filePath);

    process.stdin.on("data", (data) => stream.write(data));
    process.on("SIGINT", () => process.exit());
    process.on("exit", () => stream.end());
};

await write();
