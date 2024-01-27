import * as path from "path";
import * as child_process from "child_process";
import { fileURLToPath } from "url";

const spawnChildProcess = async (args) => {
    const fileName = fileURLToPath(import.meta.url);
    const dirPath = path.dirname(fileName);
    child_process.fork(path.join(dirPath, "files", "script.js"), args);
};

// Put your arguments in function call to test this functionality
spawnChildProcess(["t1", "t2", 25]);
