const StartFunc = ({ inDataAsArray, inUniqueColumns, inRequestBody }) => {
    let LocalinDataToInsert = inRequestBody;

    let LocalReturnObject = {};
    LocalReturnObject.KTF = true;

    inUniqueColumns.every(LoopColumn => {
        const LoopInsideColumnNeeded = LoopColumn.field;

        const LoopInsideValueToCheck = LocalinDataToInsert[LoopInsideColumnNeeded];

        const LoopInsideRequiredValues = inDataAsArray.map(element => {
            return element[LoopInsideColumnNeeded];
        });

        if (LoopInsideRequiredValues.includes(LoopInsideValueToCheck)) {
            LocalReturnObject.KTF = false;
            LocalReturnObject.KReason = `${LoopInsideValueToCheck} already present in column : ${LoopInsideColumnNeeded}`;

            return false;
        };

        return true;
    });

    return LocalReturnObject;
};

export { StartFunc };