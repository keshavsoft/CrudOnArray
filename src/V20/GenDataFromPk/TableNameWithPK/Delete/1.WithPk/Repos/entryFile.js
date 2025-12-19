import {
    postDefaultFunc as postDefaultFuncFromDal,
} from '../Dals/entryFile.js';

let postDefaultFunc = ({ inDataPk, inKey }) => {
    return postDefaultFuncFromDal({ inDataPk, inKey });
};

export {
    postDefaultFunc
};