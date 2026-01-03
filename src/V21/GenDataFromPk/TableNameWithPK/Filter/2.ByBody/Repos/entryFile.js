import {
    PostFunc as PostFuncDal
} from '../dals/entryFile.js';

let PostFunc = ({ inDataPk, inKey, inValue }) => {
    return PostFuncDal({ inDataPk, inKey, inValue });
};

export {
    PostFunc
};