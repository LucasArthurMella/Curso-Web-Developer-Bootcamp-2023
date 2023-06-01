const scores = [929321, 899341, 888336, 543671, 243567, 111934];

const highScore = scores[0];
const secondHighScore = scores[1];

//... is rest operator
const [gold, silver, bronze, ...everyoneElse] = scores;