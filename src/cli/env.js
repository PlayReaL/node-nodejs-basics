const parseEnv = () => {
    let res = "";

    for (let k in process.env) {
        if (k.slice(0, 4) === "RSS_") {
            res += `${k}=${process.env[k]}; `;
        }
    }
    console.log(res.slice(0, -2));
};

parseEnv();
