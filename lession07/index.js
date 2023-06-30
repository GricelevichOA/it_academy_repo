
function randInt(max) {
    return Math.trunc(Math.random() * max);
}

function randIntBetween(min, max) {
    const length = Math.random() * (max - min);

    return Math.round(min + length);
}


// MOOD - вернуть k цветов радуги
const colors = ['красный', 'оранжевый', 'жёлтый', 'зелёный', 'голубой', 'синий', 'фиолетовый'];

function randIndex(maxLength) {
    return Math.trunc(Math.random() * maxLength);
}

function mood(k) {
    const result = [];
    for (let i = 0; i < k; i++) {
        const rnd = randIndex(colors.length);
        result.push(colors[rnd]);
    }

    return result;
}

console.log(mood(3));
console.log(mood(3));
console.log(mood(3));
console.log(mood(3));
console.log(mood(5));
console.log(mood(5));
console.log(mood(5));
console.log(mood(5));


