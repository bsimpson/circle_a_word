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
  'ketone',
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

function right(row, column) {
  return [row, column + 1];
}

function downRight(row, column) {
  return [row + 1, column + 1];
}

function down(row, column) {
  return [row + 1, column];
}

function downLeft(row, column) {
  return [row + 1, column - 1];
}

function left(row, column) {
  return [row, column - 1];
}

function upLeft(row, column) {
  return [row - 1, column - 1];
}

function up(row, column) {
  return [row - 1, column];
}

function upRight(row, column) {
  return [row - 1, column + 1];
}

const strategies = [
  right,
  downRight,
  down,
  downLeft,
  left,
  upLeft,
  up,
  upRight,
];

function check(word, advanceStrategy, row = 0, column = 0, index = 0, answers = []) {
  if (index === word.length) {
    return answers;
  } else if (formattedGrid()[row] && formattedGrid()[row][column] === word[index]) {
    answers.push({
      row,
      column,
      letter: word[index],
      word,
    });
    return check(word, advanceStrategy, ...advanceStrategy(row, column), index + 1, answers);
  } else {
    return false;
  }
}

function findWord(word) {
  for(let row = 0; row < formattedGrid().length; row++) {
    for(let column = 0; column < formattedGrid()[row].length; column++) {
      for (const advanceStrategy of strategies) {
        if (result = check(word, advanceStrategy, row, column)) {
          return result;
        }
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

function toHTML() {
  const solution = [].concat(...walk());

  let html = '<table>';
  formattedGrid().forEach((row, rowIndex) => {
    html += '<tr>';
    row.forEach((column, columnIndex) => {
      if (word = solution.find(character => character.row == rowIndex && character.column == columnIndex)) {
        html += `<td data-highlight data-highlight-${formattedWords().findIndex(x => x === word.word ) % 13}>${column}</td>`;
      } else {
        html += `<td>${column}</td>`;
      }
    })
    html += '</tr>';
  })
  html += '</table>';

  return html;
}

module.exports = {
  formattedGrid,
  formattedWords,
  findWord,
  walk,
  toHTML,
  formattedWords,
}