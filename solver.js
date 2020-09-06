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

function findAdjacentSquares(row, column) {
  return adjacentSquares.map(offset => formattedGrid()[row + offset[0], column + offset[1]]);
}

function getDirection(array, value) {
  const index = array.findIndex(x => x == value);
  return adjacentSquares[index];
}

function getNextLetterInDirection(currentSquare, offset) {
  const row = formattedGrid()[currentSquare[0] + offset[1]];
  if (row) { // handles case where we access out of bounds
    return row[currentSquare[1] + offset[0]];
  }
}

function formattedGrid() {
  return grid.map(row => row.split(''));
}

function formattedWords() {
  return words.map(word => word.replace(/ /g, '').toLowerCase());
}

function walk() {
  formattedWords.forEach((word, currentRow) => {
    const firstLetter = word[0];
    formattedGrid().forEach((row) => {
      const currentColumn = row.findIndex(gridLetter => gridLetter === firstLetter);

      if (currentColumn) { // letter was found in row
        findAdjacentSquares(currentRow, currentColumn)
      }
    })
  })
}

module.exports = {
  formattedGrid,
  formattedWords,
  findAdjacentSquares,
  getDirection,
  getNextLetterInDirection,
}