import {
    GetFunc as GetFuncRepo
} from '../Repos/entryFile.js';

let GetFunc = (req, res) => {
    const LocalDataPk = req.locals.KeshavSoft.DataPk;
    const LocalKey = req.params.inKey;
    const LocalValue = req.params.inValue;

    let LocalFromRepo = GetFuncRepo({ inDataPk: LocalDataPk, inKey: LocalKey, inValue: LocalValue });

    if (LocalFromRepo.KTF === false) {
        res.status(404).send(LocalFromRepo.KReason);

        return;
    };

    res.set('Content-Type', 'application/json');
    res.status(200).send(LocalFromRepo.JsonData);
};

export {
    GetFunc
};