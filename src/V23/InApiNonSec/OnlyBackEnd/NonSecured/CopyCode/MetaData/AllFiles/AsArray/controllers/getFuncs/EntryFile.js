import { GetFunc as GetFuncRepo } from '../../repos/getFuncs/EntryFile.js';

let GetFunc = (req, res) => {
    const LocalFromRepo = GetFuncRepo();

    res.status(200).json(LocalFromRepo);
};

export {
    GetFunc
};