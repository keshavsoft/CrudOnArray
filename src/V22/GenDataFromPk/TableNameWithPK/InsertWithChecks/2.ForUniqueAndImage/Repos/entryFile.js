import {
    postDefaultFunc as postDefaultFuncFromDal
} from '../Dals/entryFile.js';

let postFunc = async ({ inDataPk, inDomainName, inDataToInsert, inImageName }) => {
    return await postDefaultFuncFromDal({ inDataPk, inDomainName, inDataToInsert, inImageName });
};

export {
    postFunc
};