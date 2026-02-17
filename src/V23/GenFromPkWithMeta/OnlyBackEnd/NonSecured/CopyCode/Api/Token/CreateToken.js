import { setFunc } from '../CommonExpose/forDataPk.js';
// const CommonToken = process.env.PORT;

let StartFunc = ({ inObject }) => {
    const LocalUuid = setFunc(inObject);

    return LocalUuid;
};

export { StartFunc };