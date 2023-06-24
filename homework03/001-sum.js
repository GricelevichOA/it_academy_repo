function sum(n) {
  let sum = 0;
  if (n < 1) { // в условии в примере с нулём показывает единицу, поэтому сделал так
    return 1;
  } else {
    for (let i = 0; i <= n; i++) {
      sum += i;
    }
    return sum;
  }
}

console.log(sum(5));
console.log(sum(6));
console.log(sum(100000));

