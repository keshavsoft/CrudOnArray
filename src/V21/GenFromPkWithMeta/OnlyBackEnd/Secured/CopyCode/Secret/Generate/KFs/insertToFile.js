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
      let LocalUser;
      if (data.length) {
        LocalUser = data.find(e => e.UserName === LocalUserName);

        if (!LocalUser) {
          return { KTF: false, KReason: `Wrong Username: ${LocalUserName}` };
        };

        if (LocalUser.Password != LocalPassword) {
          return { KTF: false, KReason: `Wrong Password: ${LocalPassword}` };
        };
      };

      LocalReturnObject.KTF = true;
      LocalReturnObject.JsonData = LocalUser;
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