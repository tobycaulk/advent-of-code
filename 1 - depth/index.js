const fs = require('fs');

const data = fs.readFileSync('data.txt', 'utf-8');
const depths = data.split('\n');

let depthIncreases = 0;
let lastDepth = parseInt(depths[0]);
for(let i = 1; i < depths.length; i++) {
    const depth = parseInt(depths[i]);
    if(depth > lastDepth) {
        depthIncreases++;
    }
    lastDepth = parseInt(depths[i]);
}

console.log(depthIncreases);