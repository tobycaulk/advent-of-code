const fs = require('fs');

const data = fs.readFileSync('../data.txt', 'utf-8');
const commands = data.split('\n').map(unparsedCommand => {
    const command = unparsedCommand.split(' ');
    return {
        direction: command[0],
        unit: parseInt(command[1])
    }
});

module.exports = ({
    commands
})