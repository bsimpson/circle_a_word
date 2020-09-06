const grid = [
  'dboilingpointo',
  'irganoxidation',
  'sfreeradicalnd',
  'tdnuopmocniopi',
  'iccocvkmohinhc',
  'leaebeaiotmooa',
  'llittrtlathitc',
  'aumoasameaatoi',
  'tcnauliclnecle',
  'iesbtlyooscayl',
  'olmnbtgsarkesc',
  'nosuoeehildriu',
  'cmstniprasrysn',
  'chemicalbondhy',
];

const words = [
  'Alkali',
  'atom',
  'boiling point',
  'catalysis',
  'chemical bond',
  'combustion',
  'compound',
  'distillation',
  'free radical',
  'halogen',
  'hydrocarbon',
  'ions',
  'keytone',
  'matter',
  'molecule',
  'nucleic acid',
  'oxidation',
  'phase',
  'photolysis',
  'reaction',
  'sublimation',
  'valence',
];

let foundWords = [];

const adjacentSquares = [
  [-1, -1],  [0, -1], [1, -1],
  [-1, 0],   [0, 0],  [1, 0],
  [-1, 1],   [0, 1],  [1, 1],
];

// function findAdjacentSquares(row, column) {
//   return adjacentSquares.map(offset => {
//     const adjacentRow = formattedGrid()[row + offset[1]];
//     if (adjacentRow) {
//       return adjacentRow[column + offset[0]];
//     }
//   });
// }

// function getDirection(adjacentLetters, value) {
//   const index = adjacentLetters.findIndex(x => x == value);
//   return adjacentSquares[index];
// }

function getNextLetterInDirection(currentSquare, offset) {
  const row = formattedGrid()[currentSquare[0] + offset[1]];
  if (row) { // handles case where we access out of bounds
    return row[currentSquare[1] + offset[0]];
  }
}

function checkRight(word, answers = [], row = 0, column = 0, index = 0) {
  if (index === word.length - 1) {
    return answers;
  } else if (formattedGrid()[row][column] === word[index]) {
    answers.push({
      row,
      column,
      letter: word[index],
    });
    column++;
    if (column === 15) {
      row++;
      column = 0;
    }
    return checkRight(word, answers, row, column, index);
  } else {
    return false;
  }
}

// todo how do we go to next dup letter? idea - can we truncate the array prefix and search on the remaining?
function findWord(word) {
  if (result = checkRight(word)) {
    foundWords.push(result);
  }
}

function formattedGrid() {
  return grid.map(row => row.split(''));
}

function formattedWords() {
  return words.map(word => word.replace(/ /g, '').toLowerCase());
}

function walk() {
  answers = []; // reset work
  formattedWords.forEach(findWord);
}

module.exports = {
  formattedGrid,
  formattedWords,
  findAdjacentSquares,
  getDirection,
  getNextLetterInDirection,
}