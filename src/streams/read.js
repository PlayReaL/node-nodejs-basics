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

    const stream = fs.createReadStream(filePath);
    stream.on("data", (chunk) => process.stdout.write(chunk));
};

await read();
