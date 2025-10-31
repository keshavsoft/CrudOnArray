const StartFunc = (req, res, next) => {
    const LocalBody = req.body;

    if (!LocalBody || LocalBody.length === 0) {
        return res.status(400).send("Request body should not be empty.");
    };

    next();
};

export { StartFunc };
