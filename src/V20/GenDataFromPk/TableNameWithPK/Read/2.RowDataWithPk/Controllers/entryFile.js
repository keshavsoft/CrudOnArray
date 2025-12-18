import {
    GetFunc as GetFuncRepo
} from '../Repos/entryFile.js';

let GetFunc = (req, res) => {
    const LocalId = req.params.id;
    const LocalDataPk = req.locals.KeshavSoft.DataPk;

    let LocalFromRepo = GetFuncRepo({ inId: LocalId, inDataPk: LocalDataPk  });

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