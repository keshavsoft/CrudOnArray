import path from "path";
import ParamsJson from '../../../CommonFuncs/params.json' with {type: 'json'};

import * as url from 'url';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const StartFunc = ({ inResponse, inId }) => {
    let LocalId = inId;
    const LocalDataPath = ParamsJson.DataPath;
    const LocalTableName = ParamsJson.TableName;
    // res.sendFile('index.html', { root: path.join(__dirname, 'public') });
    const options = {
        root: path.join(__dirname, "..", "..", "..", "..", "..", LocalDataPath, LocalTableName)
    };

    inResponse.sendFile(`${LocalId}.pdf`, options);

    //set the archive name
    // inResponse.sendFile(`./${LocalDataPath}/${LocalTableName}/${inId}.pdf`);
    // inResponse.sendFile(`./${LocalDataPath}/${LocalTableName}/${inId}.pdf`);
};

export { StartFunc };