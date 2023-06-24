function getPower(n) {
    let num = n;
    let pow = 0;

    for (let i = 1; num > 1; i++) {
        if (num % 2 != 0 ) return undefined;
        num /= 2;
        pow++;
    }

    return pow;
}

console.log("5 ", getPower(5));
console.log("2 ", getPower(2));
console.log("4 ", getPower(4));
console.log("8 ", getPower(8));
console.log("16 ", getPower(16));
console.log("32 ", getPower(32));
console.log("3 ", getPower(3));
console.log("256 ", getPower(256));
console.log("512 ", getPower(512));
console.log("1024 ", getPower(1024));