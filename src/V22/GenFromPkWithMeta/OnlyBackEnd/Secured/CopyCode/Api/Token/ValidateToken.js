import { getFunc } from '../CommonExpose/forDataPk.js';

let StartFunc = ({ inToken }) => {
    try {
        const LocalDataPk = getFunc(inToken);

        return LocalDataPk;
    }
    catch (err) {
        return false;
    }
}

export { StartFunc };