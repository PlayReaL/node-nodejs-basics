import * as stream from "node:stream";

const transform = async () => {
    stream.pipeline(
        process.stdin,
        new stream.Transform({
            transform(chunk, encoding, callback) {
                const chunkStringified = chunk.toString().slice(0, -1);
                const reversed = chunkStringified.split("").reverse().join("");
                callback(null, reversed + "\n");
            },
        }),
        process.stdout,
        (err) => {
            if (err) throw err;
        }
    );
};

await transform();
