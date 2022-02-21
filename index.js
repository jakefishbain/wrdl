let guess;
let result = [];
let solution = 'coder'

const process = require('process');
const chalk = require('chalk');

console.log('Guess a word...')

process.stdin.on('data', data => {
	console.log(`You guessed ${data.toString()}`);
	guess = data.toString();

	guess.split('').forEach(function(guessLetter, index) {
		let solutionLetter = solution.charAt(index);
		if (guessLetter === solutionLetter) {
			result.push("green");
		}
		else if (solution.indexOf(guessLetter) != -1) {
			result.push("yellow");
		}
		else {
			result.push("grey");
		}
	})

	let resultStr = '';

	result.forEach(function(color, i) {
		resultStr += chalk.bold.keyword(color)(guess[i])
	});

	console.log(resultStr)
	process.exit();
});