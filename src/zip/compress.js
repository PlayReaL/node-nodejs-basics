import * as fs from "node:fs";
import * as path from "node:path";
import { fileURLToPath } from "url";
import * as stream from "node:stream";
import * as zlib from "node:zlib";

const compress = async () => {
    const fileName = fileURLToPath(import.meta.url);
    const srcPath = path.join(
        path.dirname(fileName),
        "files",
        "fileToCompress.txt"
    );
    const destPath = path.join(path.dirname(fileName), "files", "archive.gz");

    const src = fs.createReadStream(srcPath);
    const dest = fs.createWriteStream(destPath);
    const gzip = zlib.createGzip();

    stream.pipeline(src, gzip, dest, (err) => {
        if (err) throw err;
    });
};

await compress();
