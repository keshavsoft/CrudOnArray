import path from "path";

import { execSync } from "child_process";

function run(cmd, cwd = process.cwd()) {
    console.log(`> ${cmd}`);
    execSync(cmd, { stdio: "inherit", cwd });
};

const StartFunc = ({ inRepoPath }) => {
    /* Build */
    run("npm run NonSec", inRepoPath);
};

export { StartFunc };