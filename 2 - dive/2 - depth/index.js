const { commands } = require('../data');

let position = { x: 0, y: 0, aim: 0 };
for(let i = 0; i < commands.length; i++) {
    const command = commands[i];
    if(command.direction === 'forward') {
        position.x += command.unit;
        position.y += command.unit * position.aim;
    } else if(command.direction == 'down') {
        position.aim += command.unit;
    } else if(command.direction == 'up') {
        position.aim -= command.unit;
    }
}

console.log(position);
console.log(position.x * position.y);