import { StartFunc as StartFuncFromReadSelColumns } from '../KFs/readSelColumns.js';

let postDefaultFunc = ({ inDataPk, inRequestBody }) => {
    let LocalFromLowDb = StartFuncFromReadSelColumns({ inDataPk, inRequestBody });

    return LocalFromLowDb;
};

export {
    postDefaultFunc
};