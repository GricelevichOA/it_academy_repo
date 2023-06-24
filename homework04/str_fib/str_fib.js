function strFib(n) {
    if (n < 2) return 0;
    if (n < 3) return 1;

    return strFib(n - 1) + strFib(n - 2) + strFib(n - 3) + 1;
}


console.log(strFib(0));
console.log(strFib(1));
console.log(strFib(2));
console.log(strFib(3));
console.log(strFib(4));
console.log(strFib(5));
console.log(strFib(6));
console.log(strFib(7));
console.log(strFib(8));