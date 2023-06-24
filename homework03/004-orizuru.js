function computeOrizurus(total) {
    const res = total / 6;

    return [res, res*4, res];
}

console.log(computeOrizurus(6));
console.log(computeOrizurus(24));
console.log(computeOrizurus(60));

// в задаче не было ничего сказано насчёт чисел, которые не делятся на 6 без остатка, поэтому дополнительных проверок не делал