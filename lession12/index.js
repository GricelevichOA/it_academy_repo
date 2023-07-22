function calcSquareRoots() {
    const a = prompt("Enter a");
    const b = prompt("Enter b");
    const c = prompt("Enter c");

    const D = b * b - 4 * a * c;

    if (D < 0) {
        alert("roots: none");
    } else if (D === 0) {
        const x1 = -b / 2 / a;
        alert(`roots: ${x1} ${x1}`);
    } else {
        const x1 = (-b - Math.sqrt(D)) / 2 / a;
        const x2 = (-b + Math.sqrt(D)) / 2 / a;
        alert(`roots: ${x1} ${x2}`);
    }
};

// calcSquareRoots();
// 1x^2+2x+1 => -1 -1
// 1x^2+6x+9 => -3 -3
// 1x^2+5x+6 => -2 -3

function round(x) {
    return parseFloat(x.toFixed(5));
}

function calcSquareRootsCore(a, b, c) {
    const D = b * b - 4 * a * c;

    if (D < 0) {
        return [];
    } else if (D === 0) {
        const x1 = -b / 2 / a;

        return [round(x1)];
    }

    const x1 = (-b - Math.sqrt(D)) / 2 / a;
    const x2 = (-b + Math.sqrt(D)) / 2 / a;

    return [round(x1), round(x2)];
}

function calcSquareRootsInterface() {
    const a = prompt("Enter a");
    const b = prompt("Enter b");
    const c = prompt("Enter c");

    const roots = calcSquareRootsCore(a, b, c);

    if (!roots.length) {
        alert("roots: none");
    } else if (roots.length === 1) {
        alert(`roots: ${roots[0]} ${roots[0]}`);
    } else {
        alert(`roots: ${roots[0]} ${roots[1]}`);
    }
}

// calcSquareRootsInterface();
// 2x^2+8x+8 => -2 2
// 1x^2+6x+9 => -3 -3
// 1x^2+5x+6 => -2 -3

// args - number[]
// expectedValue - number[]
function myTest(msg, args, expectedValue) {
    const functionReturnValue = calcSquareRootsCore(...args);
    let result = true;

    if (functionReturnValue.length !== expectedValue.length) {
        result = false;
    }

    for (let i = 0; i < functionReturnValue.length; i++) {
        if (functionReturnValue[i] !== expectedValue[i]) {
            result = false;
        }
    }

    if (result) {
        console.log("OK", msg);
    } else {
        console.log("FAILED!", msg);
    }
}

myTest("should work for [1, 2, 1]", [1, 2, 1], [-1]);
myTest("should work for [1, 6, 9]", [1, 6, 9], [-3]);
myTest("should work for [1, 5, 6]", [1, 5, 6], [-3, -2]);
