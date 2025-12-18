import {
    postDefaultFunc as postDefaultFuncFromDal
} from '../Dals/entryFile.js';

let postDefaultFunc = ({ inDataPk, inColumnName }) => {
    return postDefaultFuncFromDal({ inDataPk, inColumnName });
};

export {
    postDefaultFunc
};