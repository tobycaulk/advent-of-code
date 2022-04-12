const { data } = require('../data');

const getDataByColumn = (column) => data.map(row => row[column]);

const getGammaAndEpsilonRateData = () => {
    const columnData = [...Array(data[0].length).keys()].map(i => getDataByColumn(i));
    const mostFrequentBits = columnData.map(column => column.filter(column => column == 1).length > column.length / 2 ? '1' : '0');
    return {
        gamma: mostFrequentBits.join(''),
        epsilonRate: mostFrequentBits.map(bit => bit == 0 ? 1 : 0).join('')
    }
}

const gammaAndEpsilon = getGammaAndEpsilonRateData();
console.log(parseInt(gammaAndEpsilon.gamma, 2) * parseInt(gammaAndEpsilon.epsilonRate, 2));