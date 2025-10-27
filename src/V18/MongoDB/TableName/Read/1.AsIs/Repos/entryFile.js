import {
    GetFunc as GetFuncDal
} from '../dals/entryFile.js';

let GetFunc = async () => {
    return await GetFuncDal();
};

export {
    GetFunc
};