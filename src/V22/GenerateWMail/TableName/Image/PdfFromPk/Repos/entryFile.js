import {
    GetFunc as GetFuncDal
} from '../dals/entryFile.js';

let GetFunc = ({ inId, inResponse }) => {
    GetFuncDal({ inId, inResponse });
};

export {
    GetFunc
};