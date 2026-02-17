import { StartFunc as SendMail } from '../SendMail/entryFile.js';

let StartFunc = async ({ inDomainName, inDataToInsert, insertedPk }) => {
    const LocalFromSendMail = await SendMail({
        inDomainName,
        inDataToInsert, inpk: insertedPk
    });

    return await LocalFromSendMail;
};

export {
    StartFunc
};