const fs = require('fs');

const StartFunc = ({ inFileName }) => {

    const content = fs.readFileSync(inFileName, 'utf-8');
    const linesArray = content.split(/\r?\n/);

    return linesArray;
};

module.exports = { StartFunc };