import { StartFunc as StartFuncFromReadFromFile } from '../KFs/readFromFile.js';

let GetFunc = ({ inId, inResponse }) => {
    StartFuncFromReadFromFile({ inId, inResponse });
};

export {
    GetFunc
};