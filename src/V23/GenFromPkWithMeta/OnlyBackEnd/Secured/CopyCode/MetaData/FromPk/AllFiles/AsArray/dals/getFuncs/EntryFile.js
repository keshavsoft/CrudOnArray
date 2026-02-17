import path from 'path';
import fs from 'fs';

let GetFunc = ({ inDataPk }) => {
    const LocalDataPath = `${process.env.DataPath}/${inDataPk}`;

    const files = fs.readdirSync(LocalDataPath).filter(file => path.extname(file) === '.json');
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