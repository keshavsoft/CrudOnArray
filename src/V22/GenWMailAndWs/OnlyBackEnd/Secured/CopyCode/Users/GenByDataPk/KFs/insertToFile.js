import fs from "fs";

import ParamsJson from './params.json' with {type: 'json'};

const StartFunc = ({ inUserName, inPassword }) => {
  const LocalFileName = "UsersTable";
  const LocalDataPath = ParamsJson.DataPath;

  const LocalUserName = inUserName;
  const LocalPassword = inPassword;

  const filePath = `${LocalDataPath}/${LocalFileName}.json`;
  let LocalReturnObject = {};
  LocalReturnObject.KTF = false;

  try {
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

      let LocalFindRow = data.find(element => {
        return element.UserName === LocalUserName && element.Password === LocalPassword
      });

      if (!LocalFindRow) {
        return LocalReturnObject
      };

      LocalReturnObject.KTF = true;
      LocalReturnObject.DataPk = LocalFindRow.DataPk;

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

export { StartFunc };