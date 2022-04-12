const fs = require('fs');

const data = fs.readFileSync('../data.txt', 'utf-8').split('\r\n');

module.exports = ({
    data
});
