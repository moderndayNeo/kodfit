const heightInM = localStorage.height / 100;
const currentWeight = localStorage.currentWeight;
const goalWeight = localStorage.goalWeight;

const calculateBMI = (height, weight) => weight / Math.pow(height, 2);

const goalBMI = calculateBMI(heightInM, goalWeight);
const currentBMI = calculateBMI(heightInM, currentWeight);

const maxOneDecimal = (num) => {
    return Math.floor(num) === num ? num : num.toFixed(1);
};

export const roundedGoalBMI = maxOneDecimal(goalBMI);
export const roundedCurrentBMI = maxOneDecimal(currentBMI);
