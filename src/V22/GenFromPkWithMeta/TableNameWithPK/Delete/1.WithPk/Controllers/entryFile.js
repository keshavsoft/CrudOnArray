import {
    postDefaultFunc as postDefaultFuncFromRepo
} from '../Repos/entryFile.js';

let postFilterDataFromBodyFunc = async (req, res) => {
    const LocalDataPk = req.locals.KeshavSoft.DataPk;
    let LocalKey = req.params.Key;

    let LocalFromRepo = await postDefaultFuncFromRepo({
        inDataPk: LocalDataPk,
        inKey: LocalKey
    });

    if (LocalFromRepo.KTF === false) {
        res.status(409).send(LocalFromRepo.KReason);
        return;
    };

    res.status(200).send(LocalFromRepo.JsonData);
};

export {
    postFilterDataFromBodyFunc
};