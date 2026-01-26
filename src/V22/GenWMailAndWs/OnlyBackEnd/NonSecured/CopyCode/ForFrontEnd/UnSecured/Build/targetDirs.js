import path from "path";
import { execSync } from "child_process";

function run(cmd, cwd = process.cwd()) {
    console.log(`> ${cmd}`);
    execSync(cmd, { stdio: "inherit", cwd });
};

const StartFunc = ({ inVersionPath, inSchemaName }) => {
    /* Target dirs */
    const targetDir = path.join(inVersionPath, inSchemaName);
    const protectedDir = path.join(targetDir, "UnProtected");

    fs.mkdirSync(protectedDir, { recursive: true });

    /* Copy dist */
    copyRecursive(
        path.join(COMMON_REPO_PATH, "dist"),
        protectedDir
    );
};

export { StartFunc };