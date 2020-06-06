const rock = 0;
const scissors = 1;
const paper = 2;

let player = parseInt(prompt('Your choice: 0 - rock, 1 - scissors, 2 - paper'));
let computer = Math.floor(Math.random() * 3);

if (computer==0 && player==1 || computer==1 && player==2 || computer==2 && player==0) {
	console.log('computer win');
} else if (computer==0 && player==0 || computer==1 && player==1 || computer==2 && player==2) {
	console.log('it is a draw');
} else {
	console.log('player win');
}