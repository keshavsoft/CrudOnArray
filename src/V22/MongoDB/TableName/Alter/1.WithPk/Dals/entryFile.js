import { StartFunc as StartFuncFromInsertToFile } from '../FromMongoDB/insertToFile.js';

let postDefaultFunc = ({ inBody, inPk }) => {
    let LocalFromLowDb = StartFuncFromInsertToFile({ inBody, inPk });

    if (LocalFromLowDb.KTF === false) {
        return LocalFromLowDb;
    };

    return LocalFromLowDb;
};

export {
    postDefaultFunc
};