import { v4 as uuidv4 } from 'uuid';

import { StartFunc as StartFuncFromCreateToken } from "../../../Token/jwt/CreateToken.js";
import { postDefaultFunc as postDefaultFuncFromRepo } from "../Repos/entryFile.js";

let postFilterDataFromBodyFunc = (req, res) => {
  let LocalRequestBody = req.body;
  let LocalUserName = LocalRequestBody.UserName;
  let LocalPassword = LocalRequestBody.Password;

  let LocalFromRepo = postDefaultFuncFromRepo({
    inUserName: LocalUserName,
    inPassword: LocalPassword,
  });

  if (LocalFromRepo.KTF === false) {
    res.status(409).send(LocalFromRepo.KTF);
    return;
  }

  const LocalUuid = uuidv4();
  const LocalToken = StartFuncFromCreateToken({ inObject: LocalFromRepo.JsonData?.DataPk });

  res.set("Content-Type", "text/plain");
  res.cookie("KSToken", LocalToken, { maxAge: 900000, httpOnly: false })
    .end(LocalFromRepo.JsonData.UserName);
};

export { postFilterDataFromBodyFunc };
