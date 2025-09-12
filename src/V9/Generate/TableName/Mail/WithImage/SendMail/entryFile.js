// import { StartFunc as sendMailCC } from "../../../../../Mail/sendMailCC.js";
import { StartFunc as sendMailCC } from "./sendMailCC.js";

let StartFunc = async ({ inDomainName, inDataToInsert, inpk }) => {
    if ("Email" in inDataToInsert) {
        const LocalFromSendMail = await sendMailCC({
            CCEmail: inDataToInsert.Email, inDomainName,
            inDataInserted: inDataToInsert, inpk
        });

        return await LocalFromSendMail;
    }
};

export { StartFunc };