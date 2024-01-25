const parseArgs = () => {
    let res = "";

    for (let i = 0; i < process.argv.length; i += 1) {
        if(process.argv[i].slice(0, 2) === "--") {
            res += process.argv[i].slice(2);
            if (process.argv[i + 1] && process.argv[i + 1].slice(0, 2) !== "--") {
                res += ` is ${process.argv[i + 1]}, `;
            }
        }
    }
    console.log(res.slice(0, -2));
};

parseArgs();
