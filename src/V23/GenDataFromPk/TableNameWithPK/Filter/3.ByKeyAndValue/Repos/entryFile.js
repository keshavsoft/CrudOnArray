import {
    GetFunc as GetFuncDal
} from '../dals/entryFile.js';

let GetFunc = ({ inDataPk, inKey, inValue }) => {
    return GetFuncDal({ inDataPk, inKey, inValue });
};

export {
    GetFunc
};