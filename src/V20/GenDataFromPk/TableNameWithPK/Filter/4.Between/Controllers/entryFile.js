import {
    GetFunc as GetFuncRepo
} from '../Repos/entryFile.js';

let GetFunc = (req, res) => {
    const LocalDataPk = req.locals.KeshavSoft.DataPk;
    const LocalfromDate = req.params.fromDate;
    const LocalToDate = req.params.toDate;
    const LocalDateField = req.params.dateField;

    let LocalFromRepo = GetFuncRepo({ inDataPk: LocalDataPk, inFromDate: LocalfromDate, inToDate: LocalToDate, inDateField: LocalDateField });

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