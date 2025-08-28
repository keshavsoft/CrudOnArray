import {
    postDefaultFunc as postDefaultFuncFromDal
} from '../Dals/entryFile.js';

let postDefaultFunc = async ({ inRequestBody }) => {
    return await postDefaultFuncFromDal({ inRequestBody });
};

export {
    postDefaultFunc
};