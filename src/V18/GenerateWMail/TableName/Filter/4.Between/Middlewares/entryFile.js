const StartFunc = (req, res, next) => {
    const ColumnName = req.params.fromDate;
    const ColumntoDate = req.params.toDate;
    const ColumndateField = req.params.dateField;

    const ddmmyyyyRegex = /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-\d{4}$/;

    // Validate fromDate
    if (
        !ColumnName ||
        typeof ColumnName !== "string" ||
        !ddmmyyyyRegex.test(ColumnName)
    ) {
        return res.status(400).send("fromDate must be in dd-mm-yyyy format. Example: 30-10-2025");
    }

    // Validate toDate
    if (
        !ColumntoDate ||
        typeof ColumntoDate !== "string" ||
        !ddmmyyyyRegex.test(ColumntoDate)
    ) {
        return res.status(400).send("toDate must be in dd-mm-yyyy format. Example: 31-10-2025");
    }

    // Validate dateField
    if (
        !ColumndateField ||
        typeof ColumndateField !== "string" ||
        ColumndateField.trim() === "" ||
        ColumndateField.includes("{") || ColumndateField.includes("}")
    ) {
        return res.status(400).send("Valid dateField is required in the URL parameter.");
    }

    next();
};

export { StartFunc };
