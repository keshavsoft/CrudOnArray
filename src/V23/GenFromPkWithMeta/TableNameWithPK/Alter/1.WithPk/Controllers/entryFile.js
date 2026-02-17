import {
    postDefaultFunc as postDefaultFuncFromRepo
} from '../Repos/entryFile.js';

let postFilterDataFromBodyFunc = (req, res) => {
    const LocalDataPk = req.locals.KeshavSoft.DataPk;
    let LocalPk = req.params.inPk;
    let LocalRequestBody = req.body;

    let LocalFromRepo = postDefaultFuncFromRepo({
        inDataPk: LocalDataPk,
        inBody: LocalRequestBody,
        inPk: LocalPk
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