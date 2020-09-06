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
});