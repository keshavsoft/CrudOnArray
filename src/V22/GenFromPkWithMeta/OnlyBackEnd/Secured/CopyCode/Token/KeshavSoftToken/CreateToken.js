import { setFunc } from '../../CommonExpose/forToken.js';
// const CommonToken = process.env.PORT;

let StartFunc = ({ inObject }) => {
    const LocalUuid = setFunc(inObject);

    return LocalUuid;
};

export { StartFunc };