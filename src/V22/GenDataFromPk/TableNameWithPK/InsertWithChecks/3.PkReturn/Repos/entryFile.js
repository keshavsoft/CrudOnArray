import {
    postDefaultFunc as postDefaultFuncFromDal
} from '../Dals/entryFile.js';

let postDefaultFunc = ({ inDataPk, inRequestBody }) => {
    return postDefaultFuncFromDal({ inDataPk, inRequestBody });
};

export {
    postDefaultFunc
};