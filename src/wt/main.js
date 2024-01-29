import * as worker_threads from "node:worker_threads";
import * as path from "node:path";
import * as os from "node:os";
import { fileURLToPath } from "url";

const performCalculations = async () => {
    const workers = [];
    const dirPath = path.dirname(fileURLToPath(import.meta.url));

    for (let i = 0; i < os.cpus().length; i += 1) {
        const workerJob = new Promise((resolve) => {
            const worker = new worker_threads.Worker(
                path.join(dirPath, "worker.js"),
                { workerData: i + 10 }
            );
            worker.on("message", (result) => {
                resolve({
                    status: "resolved",
                    data: result,
                });
            });

            worker.on("error", (error) => {
                resolve({
                    status: "error",
                    data: null,
                });
            });
        });
        workers.push(workerJob);
    }

    const result = await Promise.all(workers);
    console.log(result);
};

await performCalculations();
