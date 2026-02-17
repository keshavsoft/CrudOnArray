import {
    getDefaultFunc as getDefaultFuncFromDal
} from '../Dals/entryFile.js';

let getDefaultFunc = ({ inDataPk, inColumnName }) => {
    return getDefaultFuncFromDal({ inDataPk, inColumnName });
};

export {
    getDefaultFunc
};