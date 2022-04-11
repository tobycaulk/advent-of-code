const fs = require('fs');

const data = fs.readFileSync('../data.txt', 'utf-8').split('\n');

module.exports = ({
    data
});
