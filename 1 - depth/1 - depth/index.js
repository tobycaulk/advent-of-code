const { depths } = require('../data');

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