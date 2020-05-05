const setAge = (age) => {
    localStorage.age = age;
};

const setHeight = (height) => {
    localStorage.height = height;
};

const setCurrentWeight = (weight) => {
    localStorage.currentWeight = weight;
};

const setGoalWeight = (weight) => {
    localStorage.goalWeight = weight;
};

const setSex = (sex) => {
    localStorage.sex = sex;
};

export { setAge, setHeight, setCurrentWeight, setGoalWeight, setSex };
