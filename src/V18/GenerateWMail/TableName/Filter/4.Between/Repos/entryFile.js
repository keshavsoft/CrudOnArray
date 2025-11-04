import {
    GetFunc as GetFuncDal
} from '../dals/entryFile.js';

let GetFunc = ({ inFromDate, inToDate, inDateField }) => {
    return GetFuncDal({ inFromDate, inToDate, inDateField });
};

export {
    GetFunc
};