import { StartFunc as StartFuncFromReadSelColumns } from '../KFs/readSelColumns.js';

let getDefaultFunc = ({ inDataPk, inColumnName }) => {
    let LocalFromLowDb = StartFuncFromReadSelColumns({ inDataPk, inColumnName });

    return LocalFromLowDb;
};

export {
    getDefaultFunc
};