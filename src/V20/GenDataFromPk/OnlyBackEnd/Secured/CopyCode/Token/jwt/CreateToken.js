import jwt from 'jsonwebtoken';

let StartFunc = ({ inObject, inDataPK }) => {

    var token = jwt.sign({ DataPk: inDataPK }, inObject);

    return token;
};

export { StartFunc };