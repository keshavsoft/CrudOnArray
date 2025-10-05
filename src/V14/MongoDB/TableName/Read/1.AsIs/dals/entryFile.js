import { StartFunc as StartFuncFromReadFromFile } from '../FromMongoDB/readFromFile.js';

let GetFunc = () => {
    let LocalFromLowDb = StartFuncFromReadFromFile();

    return LocalFromLowDb;
};

export {
    GetFunc
};