const fs = require('fs');

const getData = () => {
    return fs.readFileSync('../data.txt', 'utf-8')
        .split('\n')
        .map(depth => parseInt(depth));
}

module.exports = {
    depths: getData()
}