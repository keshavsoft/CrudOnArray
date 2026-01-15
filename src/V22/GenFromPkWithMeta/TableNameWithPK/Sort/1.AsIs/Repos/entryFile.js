import {
    GetFunc as GetFuncDal
} from '../dals/entryFile.js';

let GetFunc = ({ inDataPk }) => {
    return GetFuncDal({ inDataPk });
};

export {
    GetFunc
};