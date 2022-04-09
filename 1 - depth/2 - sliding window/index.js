const { depths } = require('../data');

const WINDOW_SIZE = 3;

const getDepthSumFromWindow = (window) => {
    let sum = 0;
    for(let i = 0; i < WINDOW_SIZE; i++) {
        sum += depths[i + window];
    }

    return sum;
}

let windows = [];
for(let currentWindow = 0; currentWindow < depths.length; currentWindow++) {
    windows.push(getDepthSumFromWindow(currentWindow));
}

const depthIncreases = windows.reduce((prev, curr, index, arr) => {
    return arr[index - 1] < curr ? prev + 1 : prev;
}, 0);

console.log(depthIncreases);