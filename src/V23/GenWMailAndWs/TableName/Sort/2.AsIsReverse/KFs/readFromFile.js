import fs from "fs";

import ParamsJson from '../../../CommonFuncs/params.json' with {type: 'json'};

let StartFunc = () => {
    const LocalFileName = ParamsJson.TableName;
    const LocalDataPath = ParamsJson.DataPath;

    let LocalReturnData = { KTF: false };
    let filePath = `${LocalDataPath}/${LocalFileName}.json`;

    try {
        if (!fs.existsSync(filePath)) {
            LocalReturnData.KReason = `${LocalFileName}.json File does not exist in ${LocalDataPath} Folder.`;
            console.warn(LocalReturnData.KReason);
            return LocalReturnData;
        };

        let data = fs.readFileSync(`${LocalDataPath}/${LocalFileName}.json`, 'utf8');
        let DataAsJson = JSON.parse(data);
        DataAsJson.reverse();

        LocalReturnData.KTF = true;
        LocalReturnData.JsonData = DataAsJson;
    } catch (err) {
        LocalReturnData.KReason = `Error reading ${LocalFileName} file .`;
        console.warn(LocalReturnData.KReason);
        return LocalReturnData;
    };

    return LocalReturnData;
};

export { StartFunc };
