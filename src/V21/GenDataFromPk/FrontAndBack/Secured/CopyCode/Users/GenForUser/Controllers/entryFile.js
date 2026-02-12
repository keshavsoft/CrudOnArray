import { v4 as uuidv4 } from "uuid";

import { StartFunc as StartFuncFromCreateToken } from "../../../Token/jwt/CreateToken.js";
import { postDefaultFunc as postDefaultFuncFromRepo } from "../Repos/entryFile.js";

let postFilterDataFromBodyFunc = (req, res) => {
  const { UserName, Password } = req.body;

  const LocalFromRepo = postDefaultFuncFromRepo({
    inUserName: UserName,
    inPassword: Password,
  });

  if (LocalFromRepo.KTF === false) {
    return res.status(409).json({ success: false });
  }

  const LocalUuid = uuidv4();
  const LocalToken = StartFuncFromCreateToken({
    inObject: LocalFromRepo.JsonData?.DataPk,
  });

  res.cookie("KSToken", LocalToken, {
    maxAge: 900000,
    httpOnly: false,
  });

  return res.status(200).json({
    success: true,
    UserName: LocalFromRepo.JsonData.UserName,
    Image: LocalFromRepo.JsonData?.Image,
  });
};

export { postFilterDataFromBodyFunc };
