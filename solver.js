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

let answers = [];

const adjacentSquares = [
  [-1, -1],  [0, -1], [1, -1],
  [-1, 0],   [0, 0],  [1, 0],
  [-1, 1],   [0, 1],  [1, 1],
];

function findAdjacentSquares(row = 0, column = 0, index = null) {
  const maxRowSize = grid[0].length;
  if (index) {
    row = Math.floor(index / maxRowSize);
    col = index % maxRowSize;
  }

  return adjacentSquares.map(offset => {
    const adjacentRow = formattedGrid()[row + offset[1]];
    if (adjacentRow) {
      return adjacentRow[column + offset[0]];
    }
  });
}

function getDirection(adjacentLetters, value) {
  const index = adjacentLetters.findIndex(x => x == value);
  return adjacentSquares[index];
}

function getNextLetterInDirection(currentSquare, offset) {
  const row = formattedGrid()[currentSquare[0] + offset[1]];
  if (row) { // handles case where we access out of bounds
    return row[currentSquare[1] + offset[0]];
  }
}

// todo how do we go to next dup letter? idea - can we truncate the array prefix and search on the remaining?
function findWord(word) {

  let index = 0;
  let array = formattedGrid().flatten(); // initially search the whole grid
  while (array.includes(word[index])) {
    
    array = findAdjacentSquares(array.findIndex(x => x === word[index]));
    index += 1;
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