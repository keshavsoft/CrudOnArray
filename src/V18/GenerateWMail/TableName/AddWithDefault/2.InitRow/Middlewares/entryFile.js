const StartFunc = (req, res, next) => {
    const LocalBody = req.body;
    const Localparams = req.params;

    if (Localparams.inKey === "") {
        return res.status(400).send("Request params 'inKey' should not be empty.");
    };

    if (Object.keys(Localparams).length === 0) {
        return res.status(400).send("Request params should not be empty.");
    };

    if (Object.keys(LocalBody).length === 0) {
        return res.status(400).send("Request body should not be empty.");
    };

    if (LocalBody.ColumnName === "") {
        return res.status(400).send("Request body 'ColumnName' should not be empty.");
    };

    if (Array.isArray(LocalBody)) {
        return res.status(400).send("Remove The Array From The Body.");
    };

    if (typeof LocalBody !== 'object' && Object.keys(LocalBody).length === 0) {
        return res.status(400).send("Request body should not be an empty object.");
    };

    next();
};

export { StartFunc };
