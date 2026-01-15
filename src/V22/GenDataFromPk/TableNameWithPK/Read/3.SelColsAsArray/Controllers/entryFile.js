import {
    postDefaultFunc as postDefaultFuncFromRepo
} from '../Repos/entryFile.js';

let postFilterDataFromBodyFunc = (req, res) => {
    let LocalRequestBody = req.body;
    const LocalDataPk = req.locals.KeshavSoft.DataPk;

    let LocalFromRepo = postDefaultFuncFromRepo({
        inRequestBody: LocalRequestBody,
        inDataPk: LocalDataPk
    });

    if (LocalFromRepo.KTF === false) {
        res.status(409).send(LocalFromRepo.KReason);
        return;
    };

    res.set('Content-Type', 'text/plain');
    res.send(LocalFromRepo.JsonData);
};

export {
    postFilterDataFromBodyFunc
};