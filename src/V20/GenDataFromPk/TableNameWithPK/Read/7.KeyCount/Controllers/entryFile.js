import {
    getDefaultFunc as getDefaultFuncFromRepo
} from '../Repos/entryFile.js';

let getFilterDataFromBodyFunc = (req, res) => {
    let LocalColumnName = req.params.ColumnName;
    const LocalDataPk = req.locals.KeshavSoft.DataPk;

    let LocalFromRepo = getDefaultFuncFromRepo({
        inColumnName: LocalColumnName,
        inDataPk: LocalDataPk
    });

    if (LocalFromRepo.KTF === false) {
        res.status(409).send(LocalFromRepo.KReason);
        return;
    };

    res.set('Content-Type', 'application/json');
    res.send(LocalFromRepo.JsonData);
};

export {
    getFilterDataFromBodyFunc
};