import {
    postDefaultFunc as postDefaultFuncFromDal
} from '../Dals/entryFile.js';

let postDefaultFunc = ({ inDataPk, inRowIndex, inKeyName, inRequestBody }) => {
    return postDefaultFuncFromDal({ inDataPk, inRowIndex, inKeyName, inRequestBody });
};

export {
    postDefaultFunc
};