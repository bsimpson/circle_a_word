const { nextTick } = require("process");

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

function checkRight(word, row = 0, column = 0, index = 0, answers = []) {
  if (index === word.length) {
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
    return checkRight(word, row, column, index + 1, answers);
  } else {
    return false;
  }
}

function findWord(word) {
  for(let row = 0; row < formattedGrid().length; row++) {
    for(let column = 0; column < formattedGrid()[row].length; column++) {
      if (result = checkRight(word, row, column)) {
        return result;
      }
    }
  }
}

function formattedGrid() {
  return grid.map(row => row.split(''));
}

function formattedWords() {
  return words.map(word => word.replace(/ /g, '').toLowerCase());
}

function walk() {
  return formattedWords().map(findWord).filter(x => x)
}

module.exports = {
  formattedGrid,
  formattedWords,
  findWord,
  walk,
}