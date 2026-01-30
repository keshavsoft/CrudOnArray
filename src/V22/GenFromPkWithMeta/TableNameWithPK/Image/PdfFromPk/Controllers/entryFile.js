import {
    GetFunc as GetFuncRepo
} from '../Repos/entryFile.js';

let GetFunc = (req, res) => {
    const LocalId = req.params.id;
    const LocalDataPk = req.locals.KeshavSoft.DataPk;

    GetFuncRepo({
        inId: LocalId,
        inResponse: res,
        inDataPk: LocalDataPk
    });
};

export {
    GetFunc
};