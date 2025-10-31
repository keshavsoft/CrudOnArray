const StartFunc = (req, res, next) => {
    const LocalBody = req.body;

    if (!LocalBody || LocalBody.length === 0) {
        return res.status(400).send("Request body should not be empty.");
    }

    if (!Array.isArray(LocalBody)) {
        return res.status(400).send("Remove The Obj From The Body.");
    };

    next();
};

export { StartFunc };
