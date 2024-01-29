import * as fs from "node:fs";
import * as path from "node:path";
import { fileURLToPath } from "url";
import * as crypto from "node:crypto";

const calculateHash = async () => {
    const fileName = fileURLToPath(import.meta.url);
    const filePath = path.join(
        path.dirname(fileName),
        "files",
        "fileToCalculateHashFor.txt"
    );
    const hashFn = crypto.createHash("sha256");
    const stream = fs.createReadStream(filePath);
    stream.on("readable", () => {
        const data = stream.read();
        if (data) hashFn.update(data);
        else {
            console.log(`${hashFn.digest("hex")}`);
        }
    });
};

await calculateHash();
