import fs from "fs";

import ParamsJson from '../../../CommonFuncs/params.json' with {type: 'json'};

const StartFunc = ({ inRequestBody }) => {
    const LocalFileName = ParamsJson.TableName;
    const LocalDataPath = ParamsJson.DataPath;

    let LocalinDataToInsert = inRequestBody;

    const filePath = `${LocalDataPath}/${LocalFileName}.json`;
    let LocalReturnObject = {};
    LocalReturnObject.KTF = false;

    try {
        if (fs.existsSync(filePath)) {
            const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

            const LocalFromCheck = LocalFuncCheck({
                inDataAsArray: data,
                inRequestBody: LocalinDataToInsert
            });

            if (LocalFromCheck.KTF === false) {
                return LocalFromCheck;
            };

            let LocalInsertData = LocalFuncCreateObjectToInsert({
                inDataToInsert: LocalinDataToInsert,
                inOriginalArray: data
            });
            
            const MaxPk = LocalInsertData.pk;

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

const LocalFuncCreateObjectToInsert = ({ inDataToInsert, inOriginalArray }) => {
    const LocalinDataToInsert = inDataToInsert;

    let LocalArrayPk = inOriginalArray.map(element => element.pk);

    let LocalRemoveUndefined = LocalArrayPk.filter(function (element) {
        return element !== undefined;
    });

    let numberArray = LocalRemoveUndefined.map(Number);
    let MaxPk = Math.max(...numberArray, 0) + 1;

    let LocalInsertData = {
        ...LocalinDataToInsert,
        pk: MaxPk,
        ServerInsertedTimeStamp: new Date()
    };

    return LocalInsertData;
};

const LocalFuncForUniqueColumns = () => {
    const LocalUniqueColumns = ParamsJson.ColumnsWithSchema.filter(element => {
        return element.unique;
    });

    return LocalUniqueColumns;
};

const LocalFuncCheck = ({ inDataAsArray, inRequestBody }) => {
    let LocalinDataToInsert = inRequestBody;

    const LocalUniqueColumns = LocalFuncForUniqueColumns();

    let LocalReturnObject = {};
    LocalReturnObject.KTF = true;

    LocalUniqueColumns.every(LoopColumn => {
        const LoopInsideColumnNeeded = LoopColumn.field;

        const LoopInsideValueToCheck = LocalinDataToInsert[LoopInsideColumnNeeded];

        const LoopInsideRequiredValues = inDataAsArray.map(element => {
            return element[LoopInsideColumnNeeded];
        });

        if (LoopInsideRequiredValues.includes(LoopInsideValueToCheck)) {
            LocalReturnObject.KTF = false;
            LocalReturnObject.KReason = `${LoopInsideValueToCheck} already present in column : ${LoopInsideColumnNeeded}`;

            return false;
        };

        return true;
    });

    return LocalReturnObject;
};

export { StartFunc };