const StartFunc = (req, res, next) => {
    const ColumnName = req.params.fromDate;
    const ColumntoDate = req.params.toDate;
    const ColumndateField = req.params.dateField;

    if (
        !ColumnName ||
        typeof ColumnName !== 'string' ||
        ColumnName.trim() === "" ||
        ColumnName.includes("{") || ColumnName.includes("}")
    ) {
        return res.status(400).send("Valid fromDate is required in the URL parameter.");
    }

    if (
        !ColumntoDate ||
        typeof ColumntoDate !== 'string' ||
        ColumntoDate.trim() === "" ||
        ColumntoDate.includes("{") || ColumntoDate.includes("}")
    ) {
        return res.status(400).send("Valid ColumntoDate is required in the URL parameter.");
    }

    if (
        !ColumndateField ||
        typeof ColumndateField !== 'string' ||
        ColumndateField.trim() === "" ||
        ColumndateField.includes("{") || ColumndateField.includes("}")
    ) {
        return res.status(400).send("Valid ColumndateField is required in the URL parameter.");
    }

    next();
};

export { StartFunc };
