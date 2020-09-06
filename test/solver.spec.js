var assert = require('assert');
const solver = require('../solver');

describe('Solver', () => {
  describe('formattedGrid', () => {
    it('outputs grid', () => {
      assert.deepEqual(solver.formattedGrid(),
        [ 
          [ 'd', 'b', 'o', 'i', 'l', 'i', 'n', 'g', 'p', 'o', 'i', 'n', 't', 'o' ],
          [ 'i', 'r', 'g', 'a', 'n', 'o', 'x', 'i', 'd', 'a', 't', 'i', 'o', 'n' ],
          [ 's', 'f', 'r', 'e', 'e', 'r', 'a', 'd', 'i', 'c', 'a', 'l', 'n', 'd' ],
          [ 't', 'd', 'n', 'u', 'o', 'p', 'm', 'o', 'c', 'n', 'i', 'o', 'p', 'i' ],
          [ 'i', 'c', 'c', 'o', 'c', 'v', 'k', 'm', 'o', 'h', 'i', 'n', 'h', 'c' ],
          [ 'l', 'e', 'a', 'e', 'b', 'e', 'a', 'i', 'o', 't', 'm', 'o', 'o', 'a' ],
          [ 'l', 'l', 'i', 't', 't', 'r', 't', 'l', 'a', 't', 'h', 'i', 't', 'c' ],
          [ 'a', 'u', 'm', 'o', 'a', 's', 'a', 'm', 'e', 'a', 'a', 't', 'o', 'i' ],
          [ 't', 'c', 'n', 'a', 'u', 'l', 'i', 'c', 'l', 'n', 'e', 'c', 'l', 'e' ],
          [ 'i', 'e', 's', 'b', 't', 'l', 'y', 'o', 'o', 's', 'c', 'a', 'y', 'l' ],
          [ 'o', 'l', 'm', 'n', 'b', 't', 'g', 's', 'a', 'r', 'k', 'e', 's', 'c' ],
          [ 'n', 'o', 's', 'u', 'o', 'e', 'e', 'h', 'i', 'l', 'd', 'r', 'i', 'u' ],
          [ 'c', 'm', 's', 't', 'n', 'i', 'p', 'r', 'a', 's', 'r', 'y', 's', 'n' ],
          [ 'c', 'h', 'e', 'm', 'i', 'c', 'a', 'l', 'b', 'o', 'n', 'd', 'h', 'y' ]
        ]
      );
    });
  });

  describe('formattedWords', () => {
    it('removes spaces', () => {
      assert.equal(solver.formattedWords()[2], 'boilingpoint');
    });

    it('lowercases', () => {
      assert.equal(solver.formattedWords()[0], 'alkali');
    });
  });

  describe('findAdjacentSquares', () => {
    it('finds letters adjacent to a given square', () => {
      assert(solver.findAdjacentSquares(2, 1), ['i', 'r', 'g', 's', 's', 'f', 'r', 't', 'd', 'n']);
    });

    it('preserves positioning with out of bounds', () => {
      assert(solver.findAdjacentSquares(0, 0), [undefined, undefined, undefined, undefined, 'd', 'b', undefined, 'i', 'r']);
    })
  });

  describe('getDirection', () => {
    const adjacentLetters = ['i', 'r', 'g', 's', 's', 'f', 'r', 't', 'd', 'n'];
    assert.deepEqual(solver.getDirection(adjacentLetters, 'r'), [0, -1]);
  });

  describe('getNextLetterInDirection', () => {
    it('returns letter to the right', () => {
      assert.equal(solver.getNextLetterInDirection([2, 1], [1, 0]), 'r');
    })

    it('returns the letter to the lower right', () => {
      assert.equal(solver.getNextLetterInDirection([2, 1], [1, 1]), 'n');
    })

    it('handles undefined', () => {
      assert.equal(solver.getNextLetterInDirection([0, 0], [-1, -1]), undefined);
    })
  })
});