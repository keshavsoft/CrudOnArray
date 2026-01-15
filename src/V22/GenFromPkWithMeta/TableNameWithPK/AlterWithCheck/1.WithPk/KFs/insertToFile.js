import fs from "fs";
import ParamsJson from '../../../CommonFuncs/params.json' with {type: 'json'};

const StartFunc = ({ inDataPk, inPk, inBody }) => {
  const LocalFileName = ParamsJson.TableName;
  const LocalDataPath = ParamsJson.DataPath;
  let LocalinDataToInsert = inBody;

  let LocalReturnObject = { KTF: false };
  let filePath = `${LocalDataPath}/${inDataPk}/${LocalFileName}.json`;

  try {
    if (!fs.existsSync(filePath)) {
      LocalReturnObject.KReason = `File ${LocalFileName}.json does not exist in ${CommonDataPath} folder.`;
      return LocalReturnObject;
    }

    const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
    const indexToUpdate = data.findIndex((e) => e.pk === Number(inPk));

    const LocalUniqueColumns = LocalFuncForUniqueColumns();
    let LocalPresentDataRemoved = data.filter(obj => obj.pk != inPk);;

    const LocalFromCheck = LocalFuncCheck({
      inDataAsArray: LocalPresentDataRemoved,
      inUniqueColumns: LocalUniqueColumns,
      inRequestBody: LocalinDataToInsert
    });

    if (LocalFromCheck.KTF === false) {
      return LocalFromCheck;
    };

    if (indexToUpdate === -1) {
      LocalReturnObject.KReason = `Record not found with pk:'${inPk}'.`;
      return LocalReturnObject;
    }

    let LocalUpdateData = { ...data[indexToUpdate], ...LocalinDataToInsert };

    // Inject pk back to inBody
    LocalinDataToInsert.pk = Number(inPk);
    data[indexToUpdate] = LocalUpdateData;

    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf8");

    LocalReturnObject.KTF = true;
    LocalReturnObject.JsonData = `Record updated successfully with pk :'${inPk}'.`;
  } catch (err) {
    LocalReturnObject.KReason = `Error: ${err.message}`;
    console.error("Error:", err);
  }

  return LocalReturnObject;
};

const LocalFuncForUniqueColumns = () => {
  const LocalUniqueColumns = ParamsJson.ColumnsWithSchema.filter(element => {
    return element.unique;
  });

  return LocalUniqueColumns;
};

const LocalFuncCheck = ({ inDataAsArray, inUniqueColumns, inRequestBody }) => {
  let LocalinDataToInsert = inRequestBody;

  let LocalReturnObject = {};
  LocalReturnObject.KTF = true;

  inUniqueColumns.every(LoopColumn => {
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