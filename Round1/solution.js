const fs = require('fs');

const data = fs.readFileSync('c_incunabula.txt', 'utf8').toString().split('\n');
const [line1, line2, ...bookData] = data;

const [totalBooks, libraries, totalDays] = line1.split(' ');
const bookScores = line2.split(' ').map((item) => parseInt(item, 10));

const libraryData = [];

for (let i = 0; i <= libraries; i += 2) {
  const parsed = bookData[i].split(' ').map((item) => parseInt(item, 10));
  const parsed2 = bookData[i + 1].split(' ').map((item) => parseInt(item, 10));

  libraryData.push({ books: parsed[0], signup: parsed[1], booksPerDay: parsed[2], bookIDs: parsed2 });
}

console.log('totalBooks', totalBooks);
console.log('libraries', libraries);
console.log('totalDays', totalDays);
console.log('bookScores', bookScores);
console.log(libraryData);

