// фибоначчи через массив
function fibArray(n) { 
    const arr = [1, 1];

    for (let i = 2; i <= n; i++) {
        const nextFib = arr[i - 1] + arr[i - 2];
        arr.push(nextFib);
    }

    console.log(arr);
    return arr[n];
}

// фибоначчи через переменные
function fibFaster(n) { 
    let a = 1;
    let b = 1;

    for (let i = 2; i <= n;  i++) {
        const nextFib = a + b;
        b = a;
        a = nextFib;

        // [a, b] = [a + b, a]; // или так
    }

    return a;
}


// debugger; // останавливает выполнение кода для дебага

// чистые функции
// 1. Нет внешних зависимостей
// 2. Нет сайд-эффектов
// 3. Одинаковый результат при одинаковых входных данных

const arr = [];
function example1(a) {
    arr.push(a); // не чистая функция
}

function example2(a) {
    console.log(a); // не чистая функция
}

function example3() {
    return Date.now(); // не чистая функция
}

function sum(a, b) {
    return a + b; // чистая функция
}

// замыкание

function generateCounter() {
    let count = -1;

    function inner() {
        count += 1;
        return count;
    }

    return inner; 
}

const counter = generateCounter(); // мы не имеем доступа к переменной count, но функция inner имеет из-за замыкания

// фибоначчи через замыкание
function generateFib() {
    let a = 0;
    let b = 1;

    function inner(n) { 
        const nextFib = a + b;
        b = a;
        a = nextFib;
        return a;
    }

    return inner;
}

function generateFibAlt(start = 0) {
    let a = 1;
    let b = 1;
    let index = 0;

    function inner(n) { 
        index += 1;

        if (index < 3) {
            return 1;
        }

        const nextFib = a + b;
        b = a;
        a = nextFib;
        return [a, index];
    }

    for (let i = 0; i < start; i++) {
        inner();
    }

    return inner;
}


const fib = generateFib();
fib(6); // console.log(fib(6)); или с самого нуля вызывать, потом проверю
fib() // каждый новый вызов создаёт новое число

 