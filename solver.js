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
  return adjacentSquares.reduce((previousValue, currentValue) => {
    const x = currentValue[0];
    const y = currentvalue[1];
    previousValue[currentValue] = formattedGrid()[row + x, column + y]; // offset
    return previousValue;
  }, {})
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
        
      }
    })
  })
}

module.exports = {
  formattedGrid,
  formattedWords,
}