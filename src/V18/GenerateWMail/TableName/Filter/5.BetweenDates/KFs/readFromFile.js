import fs from "fs";
import ParamsJson from "../../../CommonFuncs/params.json" with { type: "json" };

let StartFunc = ({ inFromDate, inToDate, inDateField }) => {
    const LocalFileName = ParamsJson.TableName;
    const LocalDataPath = ParamsJson.DataPath;

    let LocalReturnData = { KTF: false };

    if (!inFromDate || !inToDate) {
        LocalReturnData.KReason = "inFromDate and inToDate are required.";
        return LocalReturnData;
    }

    // ✅ Convert yyyy-mm-dd to JS Date safely
    const ConvertToDate = (dateStr) => {
        // dateStr like "2025-10-30"
        return new Date(`${dateStr}T00:00:00`);
    };

    let from = ConvertToDate(inFromDate);
    let to = ConvertToDate(inToDate);

    // End of day for `to` date
    to.setHours(23, 59, 59, 999);

    try {
        const data = fs.readFileSync(`${LocalDataPath}/${LocalFileName}.json`, "utf8");
        const parsedData = JSON.parse(data);

        const filtered = parsedData.filter((item) => {
            const recDate = new Date(item[inDateField]);
            return recDate >= from && recDate <= to;
        });

        if (filtered.length === 0) {
            LocalReturnData.KReason = `No data found between ${inFromDate} and ${inToDate}.`;
            return LocalReturnData;
        }

        LocalReturnData.KTF = true;
        LocalReturnData.JsonData = filtered;
        LocalReturnData.Count = filtered.length;
        return LocalReturnData;

    } catch (err) {
        console.error("Error:", err);
    }

    return LocalReturnData;
};

export { StartFunc };
