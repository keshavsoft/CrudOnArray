import path from 'path';
import archiver from 'archiver';
import fs from 'fs';

import * as url from 'url';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const LocalDataPath = `../../../../../${process.env.DataPath}`;

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

    const jsonFiles = filesInDirectory.filter(file => {
        return path.extname(file).toLowerCase() === '.json';
    });

    // for (var i in directories) {
    //     console.log("aaaaaaaaaaaaa : ", directories[i]);

    //     archive.directory(directories[i], directories[i].replace(__dirname, ''));
    // };
    jsonFiles.forEach(jsonFile => {
        const filePath = path.join(directoryPath, jsonFile);

        archive.file(filePath, { name: jsonFile });
    });


    // for (var i in directories) {
    //     console.log("aaaaaaaaaaaaa : ", directories[i]);

    //     // archive.directory(directories[i], directories[i].replace(__dirname, ''));

    //     archive.file(path.resolve(__dirname, LocalDataPath, directories[i]), { name: directories[i] });
    // };


    archive.finalize();
};

export { GetFunc };