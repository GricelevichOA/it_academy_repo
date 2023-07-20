function getSpringMeltStreak(temperature) {
    let maxStreak = 0;
    let currentStreak = 0;

    for (let i = 0; i < temperature.length; i++) {
        if (temperature[i] > 0) {
            currentStreak++;
        } else {
            maxStreak = currentStreak;
            currentStreak = 0;
        }
    }

    return maxStreak;
}

console.log(getSpringMeltStreak([-20, 30, -40, 50, 10, -10]));
console.log(getSpringMeltStreak([10, 20, 30, 1, -10, 1, 2, 3]));
console.log(getSpringMeltStreak([-10, 0, -10, 0, -10]));