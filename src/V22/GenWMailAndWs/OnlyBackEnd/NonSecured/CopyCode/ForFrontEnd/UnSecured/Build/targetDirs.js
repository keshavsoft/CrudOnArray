import path from "path";
import { execSync } from "child_process";
import fs from "fs";

function run(cmd, cwd = process.cwd()) {
    console.log(`> ${cmd}`);
    execSync(cmd, { stdio: "inherit", cwd });
};

const StartFunc = ({ inVersionPath, inSchemaName, inRepoPath }) => {
    /* Target dirs */
    const targetDir = path.join(inVersionPath, inSchemaName);
    const protectedDir = path.join(targetDir, "UnProtected");

    fs.mkdirSync(protectedDir, { recursive: true });

    /* Copy dist */
    copyRecursive(
        path.join(inRepoPath, "dist"),
        protectedDir
    );
};

/* ---------- UTIL ---------- */
function copyRecursive(src, dest) {
    fs.readdirSync(src, { withFileTypes: true }).forEach(entry => {
        const srcPath = path.join(src, entry.name);
        const destPath = path.join(dest, entry.name);

        if (entry.isDirectory()) {
            fs.mkdirSync(destPath, { recursive: true });
            copyRecursive(srcPath, destPath);
        } else {
            fs.copyFileSync(srcPath, destPath);
        }
    });
};

export { StartFunc };