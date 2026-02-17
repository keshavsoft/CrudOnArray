import { GetFunc as GetFuncDal } from '../../dals/getFuncs/EntryFile.js';

let GetFunc = ({ inDataPk }) => {
    return GetFuncDal({ inDataPk });
};

export { GetFunc };