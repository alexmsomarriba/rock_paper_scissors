
'use strict';


const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const rockPaperScissors = (hand1, hand2) => {
  let h1 = hand1.trim().toLowerCase()
  let h2 = hand2.trim().toLowerCase()
  if (h1 === h2) {
    return "tie"
  }
  if (h1 === 'rock' && h2 === 'paper') {
    return "h2 win"
  }
  if (h1 === 'rock' && h2 === 'scissors') {
    return "h1 win"
  }
  if (h1 === 'paper' && h2 === 'rock') {
    return "h1 win"
  }
  if (h1 === 'paper' && h2 === 'scissors') {
    return "h2 win"
  }
  if (h1 === 'scissors' && h2 === 'rock') {
    return "h2 win"
  }
  if (h1 === 'scissors' && h2 === 'paper') {
    return "h1 win"
  }
}

function getPrompt() {
  rl.question('hand1: ', (answer1) => {
    rl.question('hand2: ', (answer2) => {
      console.log( rockPaperScissors(answer1, answer2) );
      getPrompt();
    });
  });
}

if (typeof describe === 'function') {

  describe('#rockPaperScissors()', () => {
    it('should detect a tie', () => {
      assert.equal(rockPaperScissors('rock', 'rock'), "It's a tie!");
      assert.equal(rockPaperScissors('paper', 'paper'), "It's a tie!");
      assert.equal(rockPaperScissors('scissors', 'scissors'), "It's a tie!");
    });
    it('should detect which hand won', () => {
      assert.equal(rockPaperScissors('rock', 'paper'), "Hand two wins!");
      assert.equal(rockPaperScissors('paper', 'scissors'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");
    });
    it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
      assert.equal(rockPaperScissors('rOcK', ' paper '), "Hand two wins!");
      assert.equal(rockPaperScissors('Paper', 'SCISSORS'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock ', 'sCiSsOrs'), "Hand one wins!");
    });
  });
} else {
  getPrompt();
}
