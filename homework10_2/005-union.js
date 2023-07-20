function union(a, b) {
    const result = [];

    if (a.length >= b.length) {
        a.forEach(i => {
            if (b.includes(i) && !result.includes(i)) {
                result.push(i);
            }
        })
    } else {
        b.forEach(i => {
            if (a.includes(i) && !result.includes(i)) {
                result.push(i);
            }
        })
    }

    return result.sort((a, b) => a - b);
}

console.log(union([1, 1, 3, 2, 5], [5, 3, 7, 7]));
console.log(union([2, 4, 6, 8, 10, 12, 10, 8, 6, 4, 2], [3, 6, 9, 12, 15, 18]));
console.log(union([1, 2, 3], [11, 0, -1]));