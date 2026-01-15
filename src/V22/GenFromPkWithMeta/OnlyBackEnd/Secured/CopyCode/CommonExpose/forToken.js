import { v4 as uuidv4 } from 'uuid';
let CommonToken;

const setFunc = () => {
    const LocalUuid = uuidv4();
    CommonToken = LocalUuid;
    return LocalUuid;
};

const getFunc = () => {
    return CommonToken;
};

export { getFunc, setFunc };