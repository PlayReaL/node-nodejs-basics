import * as worker_threads from "node:worker_threads";

const nthFibonacci = (n) =>
    n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
    worker_threads.parentPort.postMessage(
        nthFibonacci(worker_threads.workerData)
    );
};

sendResult();
