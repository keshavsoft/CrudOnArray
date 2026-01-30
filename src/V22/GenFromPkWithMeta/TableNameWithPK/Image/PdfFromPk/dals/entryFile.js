import { StartFunc as StartFuncFromReadFromFile } from '../KFs/readFromFile.js';

let GetFunc = ({ inId, inResponse, inDataPk }) => {
    StartFuncFromReadFromFile({ inId, inResponse, inDataPk });
};

export {
    GetFunc
};