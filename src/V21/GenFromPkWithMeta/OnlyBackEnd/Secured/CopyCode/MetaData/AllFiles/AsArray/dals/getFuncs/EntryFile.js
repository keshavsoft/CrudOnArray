import path from 'path';
import fs from 'fs';

import * as url from 'url';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const LocalDataPath = `../../../../../${process.env.DataPath}`;

let GetFunc = () => {
    const files = fs.readdirSync(process.env.DataPath).filter(file => path.extname(file) === '.json');
    let LocalReturnArray = [];

    files.forEach(file => {
        if (path.extname(file).toLowerCase() === '.json') {
            // Get the filename without the .json extension
            const fileNameWithoutExt = path.basename(file, '.json');
            LocalReturnArray.push(fileNameWithoutExt);
            // console.log(fileNameWithoutExt);
        }

        // const filePath = path.join(process.env.DataPath, file);
        // console.log(`------ ${file}:`, file);

    });

    return LocalReturnArray;
};

export { GetFunc };