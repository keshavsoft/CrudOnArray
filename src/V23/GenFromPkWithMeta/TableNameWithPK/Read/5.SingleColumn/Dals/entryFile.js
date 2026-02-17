import { StartFunc as StartFuncFromReadSelColumns } from '../KFs/readSelColumns.js';

let postDefaultFunc = ({ inDataPk, inColumnName }) => {
    let LocalFromLowDb = StartFuncFromReadSelColumns({ inDataPk, inColumnName });

    return LocalFromLowDb;
};

export {
    postDefaultFunc
};