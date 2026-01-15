import { StartFunc as StartFuncFromReadFromFile } from '../KFs/readFromFile.js';

let GetFunc = ({ inFromDate, inToDate, inDateField }) => {
    let LocalFromLowDb = StartFuncFromReadFromFile({ inFromDate, inToDate, inDateField });

    return LocalFromLowDb;
};

export {
    GetFunc
};