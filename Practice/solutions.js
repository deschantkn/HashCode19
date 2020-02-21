const fs = require('fs');

// Manually enter file names
const data = fs.readFileSync(`e_also_big.in`, 'utf8').toLocaleString().split(',')[0].split('\n');
const maxSlices = parseInt(data[0].split(' ')[0].trim(), 10);
const slices = data[1].split(' ').map((item) => parseInt(item, 10));

const validSums = [];
const sumIds = [];

function optimizeSlices(summable) {
  let sum = 0;
  summable = Array.from(new Set(summable));

  for (let i = 0; i < summable.length; i++) {
    sum += summable[summable.length - i - 1];

    if (sum > maxSlices) {
      summable.splice((summable.length-i-1), 1);
      optimizeSlices(summable);
      break;
    }
  }

  summable = summable.map((item) => slices.indexOf(item));
  validSums.push({ [sum]: summable });
}

optimizeSlices(slices);

validSums.forEach(sumObj => {
  Object.keys(sumObj).forEach(item => sumIds.push(parseInt(item)));
});
const filtered = sumIds.filter(sumId => sumId <= maxSlices);
const selected = Math.max(...filtered).toString();

validSums.filter(validSumObj => Object.keys(validSumObj).forEach(key => {
  if (key === selected) {
    console.log(validSumObj[key].length);
    console.log(validSumObj[key].join(" "));
  }
}));
