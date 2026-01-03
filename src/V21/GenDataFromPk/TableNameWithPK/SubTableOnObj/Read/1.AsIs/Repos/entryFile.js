import {
    GetFunc as GetFuncDal
} from '../dals/entryFile.js';

let GetFunc = ({ inDataPk, inRowIndex, inKeyName }) => {
    return GetFuncDal({ inDataPk, inRowIndex, inKeyName });
};

export {
    GetFunc
};