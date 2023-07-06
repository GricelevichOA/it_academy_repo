const colors = ['красный', 'оранжевый', 'жёлтый', 'зелёный', 'голубой', 'синий', 'фиолетовый'];

function randIndex(maxLength) {
    return Math.trunc(Math.random() * maxLength);
}

function mood(k) {
    const result = {};

    if (k === 7) {
        return colors;
    }

    if (k > 7) {
        throw Error("В радуге только семь цветов.");
    }

    for (let i = 0; i < k; i++) {
        const rnd = randIndex(colors.length);
        const newColor = colors[rnd];

        if (!result[newColor]) {
            result[newColor] = true;
        } else {
            i--;
        }      
    }
    
    return (Object.keys(result));
}

console.log(mood(3));
console.log(mood(4));
console.log(mood(5));
console.log(mood(6));
console.log(mood(7));
console.log(mood(8));
console.log(mood(9));
