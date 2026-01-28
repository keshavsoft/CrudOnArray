const StartFunc = ({ inLines, inNewVersion }) => {
    const LocalLines = inLines;

    LocalFuncForImportMiddleware({ inLines: LocalLines });
    LocalFuncForImport({ inLines: LocalLines, inNewVersion });
    LocalFuncForUse({ inLines: LocalLines, inNewVersion });
};

const LocalFuncForImport = ({ inLines, inNewVersion }) => {
    const LocalnewVersion = inNewVersion;
    const LocalLines = inLines;

    const importLine = `import { router as routerFrom${LocalnewVersion} } from "./${LocalnewVersion}/routes.js";`;

    const alreadyImported = LocalLines.some(line => line.trim() === importLine);

    if (!alreadyImported) {
        const lastImportIndex = LocalLines.reduce((acc, line, i) =>
            line.startsWith('import') ? i : acc, -1);
        LocalLines.splice(lastImportIndex + 1, 0, importLine);
    };
};

const LocalFuncForUse = ({ inLines, inNewVersion }) => {
    const LocalnewVersion = inNewVersion;
    const LocalLines = inLines;
    const LocalStartChar = "router";

    const useLine = `${LocalStartChar}.use("/${LocalnewVersion}", StartFuncFromMiddleware, routerFrom${LocalnewVersion});`;

    const alreadyUsed = LocalLines.some(line => line.trim() === useLine);

    if (!alreadyUsed) {
        const lastUseIndex = LocalLines.reduce((acc, line, i) =>
            line.trim().startsWith(`${LocalStartChar}.use(`) ? i : acc, -1);
        LocalLines.splice(lastUseIndex + 1, 0, useLine);
    };
};

const LocalFuncForImportMiddleware = ({ inLines }) => {
    const LocalLines = inLines;

    const useLine = `import { StartFunc as StartFuncFromMiddleware } from "./MiddleWares/entryFile.js";`;

    const alreadyUsed = LocalLines.some(line => line.trim() === useLine);

    if (!alreadyUsed) {
        const lastUseIndex = LocalLines.findIndex(line => {
            if (line.trim().startsWith('const port = ')) {
                return true;
            };
            if (line.trim().startsWith('let port = ')) {
                return true;
            };
            if (line.trim().startsWith('var port = ')) {
                return true;
            };
            if (line.trim().startsWith('const router = ')) {
                return true;
            };
            
            return false;
        });
        // line.trim().startsWith('const port = ') || line.trim().startsWith("let port = ") ? i : acc, -1);

        LocalLines.splice(lastUseIndex + 1, 0, useLine);
        LocalLines.splice(lastUseIndex + 1, 0, "");
    };
};

module.exports = { StartFunc };
