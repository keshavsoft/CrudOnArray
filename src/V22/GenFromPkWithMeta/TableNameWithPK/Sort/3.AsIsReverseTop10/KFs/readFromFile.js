import fs from "fs";

import ParamsJson from '../../../CommonFuncs/params.json' with {type: 'json'};

let StartFunc = ({ inDataPk }) => {
    const LocalFileName = ParamsJson.TableName;
    const LocalDataPath = ParamsJson.DataPath;

    let LocalReturnData = { KTF: false };
    let filePath = `${LocalDataPath}/${inDataPk}/${LocalFileName}.json`;

    try {
        if (!fs.existsSync(filePath)) {
            LocalReturnData.KReason = `${LocalFileName}.json File does not exist in ${LocalDataPath} Folder.`;
            console.warn(LocalReturnData.KReason);
            return LocalReturnData;
        };

        let data = fs.readFileSync(filePath, 'utf8');
        let DataAsJson = JSON.parse(data);
        DataAsJson.reverse();
        const firstTen = DataAsJson.slice(0, 10);

        LocalReturnData.KTF = true;
        LocalReturnData.JsonData = firstTen;
    } catch (err) {
        LocalReturnData.KReason = `Error reading ${LocalFileName} file .`;
        console.warn(LocalReturnData.KReason);
        return LocalReturnData;
    };

    return LocalReturnData;
};

export { StartFunc };
