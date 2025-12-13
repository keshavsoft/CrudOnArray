import fs from "fs";
import path from "path";

import ParamsJson from '../../../CommonFuncs/params.json' with {type: 'json'};

const StartFunc = () => {
  const LocalFileName = ParamsJson.TableName;
  const LocalDataPath = ParamsJson.DataPath;
  const LocalDefaultObject = ParamsJson.DefaultObjectToInsert.Simple;

  const filePath = `${LocalDataPath}/${LocalFileName}.json`;
  let LocalReturnObject = { KTF: false };

  try {
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
      let LocalArrayPk = data.map(element => element.pk);

      data.push(LocalDefaultObject);

      fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');

      LocalReturnObject.KTF = true;
      LocalReturnObject.SuccessText = `Inserted into ${LocalFileName}.json successfully`;

      return LocalReturnObject;
    } else {
      LocalReturnObject.KReason = `File ${LocalFileName}.json does not exist in ${LocalDataPath} folder.`;
      console.warn(LocalReturnObject.KReason);

      return LocalReturnObject;
    }
  } catch (err) {
    console.error('Error:', err);
  }

  return LocalReturnObject;
};

export { StartFunc };
