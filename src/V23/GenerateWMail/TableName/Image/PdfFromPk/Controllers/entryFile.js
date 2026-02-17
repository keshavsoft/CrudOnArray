import {
    GetFunc as GetFuncRepo
} from '../Repos/entryFile.js';

let GetFunc = (req, res) => {
    const LocalId = req.params.id;

    GetFuncRepo({
        inId: LocalId,
        inResponse: res
    });
};

export {
    GetFunc
};