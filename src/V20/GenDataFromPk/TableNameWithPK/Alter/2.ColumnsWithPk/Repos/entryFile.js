import {
    postDefaultFunc as postDefaultFuncFromDal
} from '../Dals/entryFile.js';

let postDefaultFunc = ({ inDataPk, inBody, inPk }) => {
    return postDefaultFuncFromDal({ inDataPk, inBody, inPk });
};

export {
    postDefaultFunc
};