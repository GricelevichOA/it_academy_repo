function generateCounter(type, start = 0) {
    let count = start;

    function increase(step = 1) {
        count += step;
        return count;
    }

    function decrease(step = 1) {
        count -= step;
        return count;
    }

    if (type === "increase") {
        return increase;
    } else if (type === "decrease") {
        return decrease;
    } else {
        return count;
    }
}

const increase = generateCounter("increase", 100);
console.log(increase()); // 101
console.log(increase(5)); // 106

const decrease = generateCounter("decrease", 100);
console.log(decrease()); // 99
console.log(decrease(5)); // 94

const test = generateCounter("test", 123);
console.log(test); 