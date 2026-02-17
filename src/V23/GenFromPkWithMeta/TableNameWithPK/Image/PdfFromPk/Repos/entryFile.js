import {
    GetFunc as GetFuncDal
} from '../dals/entryFile.js';

let GetFunc = ({ inId, inResponse, inDataPk }) => {
    GetFuncDal({ inId, inResponse, inDataPk });
};

export {
    GetFunc
};