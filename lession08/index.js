// console.log(new Date().toString());
// console.log(new Date().toISOString());
// console.log(new Date().toUTCString());
// console.log(new Date().toLocaleDateString("RU-ru"));
// console.log(new Date().toLocaleTimeString("RU-ru"));

function secondsToDate(seconds) {
    const minutes = seconds / 60;
    const hours = seconds / 60 / 60;
    const days = seconds / 60 / 60 / 24;
    const years = seconds / 60 / 60 / 24 / 365;

    const result = {
        years,
        days,
        hours,
        seconds
    }

    return Object.entries(result)
        .map(item => [Number(item[1].toFixed(2)), item[0]])
        .find((item) => item[0] > 0.8);
}

// console.log(secondsToDate(10000000000));

console.log(new Date("Thu Jul 06 2023 18:00:27 GMT+0300 (Москва, стандартное время)"));

// сложение, вычитание дат
// отнять день
const newDate = new Date();
const dayAgo = new Date(newDate - 1000 * 60 * 60 * 24);

console.log(newDate, dayAgo);


// копировать объект

const user1 = {
    age: 20,
}

// поверхностная копия
const user2 = Object.assign({name: "Object.assign"}, user1);

// deep-copy
const user3 = JSON.parse(JSON.stringify(user1));

// сравнение объектов
Object.is();

// глубокая копия
structuredClone(value)
