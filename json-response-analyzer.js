/*
=========================================
JSON Response Analyzer
=========================================

Paste your API JSON response and analyze it.
Sensitive fields like tokens and auth flags are highlighted.

Developed by sudo_0xksh
=========================================
*/

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Paste JSON response:\n", (responseString) => {
    try {
        console.log("\nType before parsing:", typeof responseString);

        const response = JSON.parse(responseString);

        console.log("\nParsed response values:");
        console.log("token:", response.token);
        console.log("url:", response.url);
        console.log("api:", response.api);
        console.log("auth:", response.auth);

        console.log("\nType after parsing:", typeof response);

        console.log("\nSensitive fields detected:");
        for (const key in response) {
            if (key === "token" || key === "auth") {
                console.log("Sensitive:", key, response[key]);
            }
        }

    } catch (err) {
        console.error("\nInvalid JSON input ❌");
    } finally {
        rl.close();
    }
});
