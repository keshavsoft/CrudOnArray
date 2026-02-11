import {
    postDefaultFunc as postDefaultFuncFromRepo
} from '../Repos/entryFile.js';

let postFilterDataFromBodyFunc = (req, res) => {
    let LocalRequestBody = req.body;
    var host = req.get('host');
    let protocol = req.protocol;
    let LocalDomainName = `${protocol}://${host}`;

    let LocalFromRepo = postDefaultFuncFromRepo({
        inDomainName: LocalDomainName,
        inRequestBody: LocalRequestBody
    });

    if (LocalFromRepo.KTF === false) {
        res.status(409).send(LocalFromRepo.KReason);
        return;
    };

    res.set('Content-Type', 'text/plain');
    res.send(LocalFromRepo.SuccessText);
};

export {
    postFilterDataFromBodyFunc
};