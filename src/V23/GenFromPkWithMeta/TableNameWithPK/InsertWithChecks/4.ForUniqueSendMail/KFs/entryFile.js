import { StartFunc as StartFuncFromInsertToFile } from './insertToFile.js';
import { StartFunc as StartFuncFromSendMail } from './sendMail.js';

let StartFunc = ({ inRequestBody, inDomainName }) => {
    let LocalFromInsertToFile = StartFuncFromInsertToFile({ inRequestBody });

    if (LocalFromInsertToFile.KTF === false) {
        return LocalFromInsertToFile;
    };

    const LocalFromSendMail = StartFuncFromSendMail({
        inDomainName,
        insertedPk: LocalFromInsertToFile.insertedPk,
        inDataToInsert: inRequestBody
    });

    if (LocalFromSendMail.KTF === false) {
        return LocalFromSendMail;
    };

    return LocalFromInsertToFile;
};

export {
    StartFunc
};