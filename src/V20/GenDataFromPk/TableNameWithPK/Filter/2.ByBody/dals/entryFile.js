import { StartFunc as StartFuncFromReadFromFile } from '../KFs/readFromFile.js';

let PostFunc = ({ inDataPk, inKey, inValue }) => {
    let LocalFromLowDb = StartFuncFromReadFromFile({ inDataPk, inKey, inValue });

    return LocalFromLowDb;
};

export {
    PostFunc
};