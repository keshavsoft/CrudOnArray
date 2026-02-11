import {
    postDefaultFunc as postDefaultFuncFromDal
} from '../Dals/entryFile.js';

let postDefaultFunc = ({ inRequestBody, inDomainName }) => {
    return postDefaultFuncFromDal({ inRequestBody, inDomainName });
};

export {
    postDefaultFunc
};