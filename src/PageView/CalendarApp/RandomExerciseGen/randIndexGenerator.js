import ExercisesData from '../../../Data/ExercisesData';

export default function getRandomNumbersArray(el) {
  let randomNumbersArray = [];
  for(let i = 0; i < el; i++) {
    let randomNumber = Math.floor(Math.random() * ExercisesData().length);
    if(randomNumbersArray.includes(randomNumber)){
      randomNumber === 0 ?
        randomNumbersArray.push(randomNumber + 1) :
        randomNumbersArray.push(randomNumber - 1)
    } else {
      randomNumbersArray.push(randomNumber)
    }
  }
  return randomNumbersArray
};
