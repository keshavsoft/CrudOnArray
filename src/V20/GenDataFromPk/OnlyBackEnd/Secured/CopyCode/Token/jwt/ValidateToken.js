import jwt from 'jsonwebtoken';
import { getFunc } from '../../CommonExpose/forToken.js';

let StartFunc = ({ inToken }) => {
    try {
        const LocalUuid = getFunc();
        let jVarTokenInfo = jwt.verify(inToken, LocalUuid);

        return jVarTokenInfo;
    }
    catch (err) {
        return false;
    }
}

export { StartFunc };