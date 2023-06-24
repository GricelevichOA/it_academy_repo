function checkBusTour(bridges) {

    for (let i = 0; i < bridges.length; i++) {
        if (bridges[i] <= 512) return i + 1;
    }

    return undefined;
}

console.log(checkBusTour([111, 511, 6059, 800, 512])); // 1
console.log(checkBusTour([665, 511, 6059, 800, 513])); // 2
console.log(checkBusTour([1000, 856, 6059, 800, 512])); // 5
console.log(checkBusTour([1000, 856, 6059, 800, 513])); // undefined
console.log(checkBusTour([1000, 856, 60, 800, 513])); // 3