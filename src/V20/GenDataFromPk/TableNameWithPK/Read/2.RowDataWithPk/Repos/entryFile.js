import {
    GetFunc as GetFuncDal
} from '../dals/entryFile.js';

let GetFunc = ({ inId, inDataPk }) => {
    return GetFuncDal({ inId, inDataPk });
};

export {
    GetFunc
};