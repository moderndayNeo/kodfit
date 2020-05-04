const setAge = (age) => {
    localStorage.age = age;
}

const setHeight = (height) => {
    localStorage.height = height;
}

const setCurrentWeight = (weight) => {
    localStorage.currentWeight = weight;
}

const setGoalWeight = (weight) => {
    localStorage.goalWeight = weight;
}

export { setAge, setHeight, setCurrentWeight, setGoalWeight }