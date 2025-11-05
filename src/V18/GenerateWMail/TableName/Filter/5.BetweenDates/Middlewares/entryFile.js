const StartFunc = (req, res, next) => {
    const ColumnName = req.params.fromDate;
    const ColumntoDate = req.params.toDate;
    const ColumndateField = req.params.dateField;

    // ✅ yyyy-mm-dd format validation
    const yyyymmddRegex = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;

    // Validate fromDate
    if (
        !ColumnName ||
        typeof ColumnName !== "string" ||
        !yyyymmddRegex.test(ColumnName)
    ) {
        return res.status(400).send("fromDate must be in yyyy-mm-dd format. Example: 2025-10-30");
    }

    // Validate toDate
    if (
        !ColumntoDate ||
        typeof ColumntoDate !== "string" ||
        !yyyymmddRegex.test(ColumntoDate)
    ) {
        return res.status(400).send("toDate must be in yyyy-mm-dd format. Example: 2025-10-31");
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
