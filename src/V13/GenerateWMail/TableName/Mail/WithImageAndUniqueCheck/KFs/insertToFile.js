import fs from "fs";

import ParamsJson from '../../../CommonFuncs/params.json' with {type: 'json'};

import { StartFunc as StartFuncFromCheckFunc } from "./CheckFuncs.js";

const StartFunc = ({ inRequestBody }) => {
    const LocalFileName = ParamsJson.TableName;
    const LocalDataPath = ParamsJson.DataPath;

    let LocalDataToInsert = inRequestBody;

    const filePath = `${LocalDataPath}/${LocalFileName}.json`;
    let LocalReturnObject = {};
    LocalReturnObject.KTF = false;

    try {
        if (fs.existsSync(filePath)) {
            const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

            const LocalUniqueColumns = LocalFuncForUniqueColumns();

            const LocalFromCheck = StartFuncFromCheckFunc({
                inDataAsArray: data,
                inUniqueColumns: LocalUniqueColumns,
                inRequestBody: LocalDataToInsert
            });

            if (LocalFromCheck.KTF === false) {
                return LocalFromCheck;
            };

            let LocalArrayPk = data.map(element => element.pk);

            let LocalRemoveUndefined = LocalArrayPk.filter(function (element) {
                return element !== undefined;
            });

            let numberArray = LocalRemoveUndefined.map(Number);
            let MaxPk = Math.max(...numberArray, 0) + 1;

            let LocalInsertData = { ...LocalDataToInsert, pk: MaxPk };
            data.push(LocalInsertData);

            fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');

            LocalReturnObject.KTF = true;
            LocalReturnObject.SuccessText = `Inserted pk ${MaxPk} In To ${LocalFileName}.json successfully`;
            LocalReturnObject.insertedPk = MaxPk;

            return LocalReturnObject;
        } else {
            LocalReturnObject.KReason = `File ${LocalFileName}.json does not exist in ${LocalDataPath} folder.`;
            console.warn(LocalReturnObject.KReason);

            return LocalReturnObject;
        };
    } catch (err) {
        console.error('Error:', err);
    };

    return LocalReturnObject;
};

const LocalFuncForUniqueColumns = () => {
    const LocalUniqueColumns = ParamsJson.ColumnsWithSchema.filter(element => {
        return element.unique;
    });

    return LocalUniqueColumns;
};

export { StartFunc };