import {
    GetFunc as GetFuncDal
} from '../dals/entryFile.js';

let GetFunc = ({ inDataPk, inFromDate, inToDate, inDateField }) => {
    return GetFuncDal({ inDataPk, inFromDate, inToDate, inDateField });
};

export {
    GetFunc
};