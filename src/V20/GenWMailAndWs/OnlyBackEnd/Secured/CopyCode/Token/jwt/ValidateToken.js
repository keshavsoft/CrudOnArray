import jwt from 'jsonwebtoken';

let StartFunc = ({ inToken }) => {
    try {
        let jVarTokenInfo = jwt.verify(inToken, "Keshav");

        return jVarTokenInfo;
    }
    catch (err) {
        return false;
    }
}

export { StartFunc };