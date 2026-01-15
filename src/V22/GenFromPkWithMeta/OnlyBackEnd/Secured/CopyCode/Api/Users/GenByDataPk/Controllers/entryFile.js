import { StartFunc as StartFuncFromCreateToken } from "../../../Token/CreateToken.js";
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

  const LocalToken = StartFuncFromCreateToken({ inObject: LocalFromRepo?.DataPk });

  res.set("Content-Type", "text/plain");
  res.cookie("KSToken", LocalToken, { maxAge: 900000, httpOnly: false })
    .end(`${LocalFromRepo?.DataPk}`);
};

export { postFilterDataFromBodyFunc };
