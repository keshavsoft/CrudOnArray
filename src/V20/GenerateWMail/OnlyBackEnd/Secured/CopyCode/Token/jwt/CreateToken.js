import jwt from 'jsonwebtoken';
import { setFunc } from '../../CommonExpose/forToken.js';
// const CommonToken = process.env.PORT;

let StartFunc = ({ inObject }) => {
    const LocalUuid = setFunc();
    var token = jwt.sign(inObject, LocalUuid);

    return token;
};

export { StartFunc };