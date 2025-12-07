import {
    postDefaultFunc as postDefaultFuncFromDal
} from '../Dals/entryFile.js';

let postDefaultFunc = () => {
    return postDefaultFuncFromDal();
};

export {
    postDefaultFunc
};