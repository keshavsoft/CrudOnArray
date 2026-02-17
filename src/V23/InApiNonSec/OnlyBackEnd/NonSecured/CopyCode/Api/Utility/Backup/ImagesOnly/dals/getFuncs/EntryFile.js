import path from 'path';
import archiver from 'archiver';
import fs from 'fs';

import * as url from 'url';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const LocalDataPath = `../../../../../${process.env.DataPath}`;
const CommonDataPathFromEnv = process.env.DataPath;

let GetFunc = ({ inResponse, callback }) => {
    let LocalUserPK = "data";

    var output = fs.createWriteStream(`${LocalUserPK}.zip`);

    var archive = archiver('zip', {
        zlib: { level: 9 },
        forceLocalTime: true
    });

    archive.pipe(output);

    archive.on('error', function (err) {
        inResponse.status(500).send({ error: err.message });
    });

    //on stream closed we can end the request
    archive.on('end', function () {
        console.log('Archive wrote %d bytes', archive.pointer());
        //console.log('output', output);
        callback(archive.pointer(), null);
    });

    //set the archive name
    inResponse.attachment(`${LocalUserPK}.zip`);

    //this is the streaming magic
    archive.pipe(inResponse);

    // var directories = [path.resolve(__dirname, LocalDataPath)];
    const directoryPath = path.resolve(__dirname, LocalDataPath);

    var filesInDirectory = fs.readdirSync(directoryPath);
    console.log("filesInDirectory : ", filesInDirectory);

    for (const entry of filesInDirectory) {
        const entryPath = path.join(directoryPath, entry);
        const stats = fs.statSync(entryPath);

        if (stats.isDirectory()) {
            archive.directory(`${CommonDataPathFromEnv}/${entry}`, entry);
        };
    };

    // const jsonFiles = filesInDirectory.filter(file => {
    //     return file.isDirectory();
    // });

    // jsonFiles.forEach(jsonFile => {
    //     archive.directory(`${CommonDataPathFromEnv}/${jsonFile}`, false);
    // });

    archive.finalize();
};

export { GetFunc };