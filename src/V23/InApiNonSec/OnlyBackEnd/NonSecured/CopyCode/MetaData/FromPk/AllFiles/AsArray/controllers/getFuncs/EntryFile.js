import { GetFunc as GetFuncRepo } from '../../repos/getFuncs/EntryFile.js';

let GetFunc = (req, res) => {
    const LocalDataPk = req.locals.KeshavSoft.DataPk;

    const LocalFromRepo = GetFuncRepo({ inDataPk: LocalDataPk });

    res.status(200).json(LocalFromRepo);
};

export {
    GetFunc
};