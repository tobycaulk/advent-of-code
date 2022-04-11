const { data } = require('../data');

const getDataByColumn = (column) => {
    return data.map(row => row[column]).join('');
}

const getGammaAndEpsilonRateData = () => {
    const columnData = [];
    for (let i = 0; i < data[0].length; i++) {
        columnData.push(getDataByColumn(i));
    }

    const mostFrequentBits = columnData.map(column => {
        let ones = 0;
        let zeros = 0;
        for (let bit in column) {
            if (parseInt(column[bit]) == 0) {
                zeros++;
            } else {
                ones++;
            }
        }

        if (ones > zeros) {
            return '1';
        } else {
            return '0';
        }
    });

    const gamma = mostFrequentBits.join('');
    const epsilonRate = mostFrequentBits.map(bit => {
        if(bit == 0) {
            return 1;
        } else {
            return 0;
        }
    }).join('');

    return ({
        gamma,
        epsilonRate
    })
}

const gammaAndEpsilon = getGammaAndEpsilonRateData();
const decimalData = {
    gamma: parseInt(gammaAndEpsilon.gamma, 2),
    epsilonRate: parseInt(gammaAndEpsilon.epsilonRate, 2)
};

console.log(decimalData);
console.log(decimalData.gamma * decimalData.epsilonRate);