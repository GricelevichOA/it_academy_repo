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


describe("GENERAL", () => {
    describe("my test cases", () => {
        it('my OK test', () => {
            chai.assert.equal(true, true);
        });
    
        it('my FAIL test', () => { 
            chai.assert.equal(true, false);
        });

        it("caches error", () => {
            try {
                throw new Error("some error");
            } catch(e) {
                chai.assert.deepEqual(e, new Error("some error"));
            }
        });
    });

    describe("testing calcSquareRootsCore", () => {
        it("should return [-1] for [1, 2, 1]", () => {
            const functionReturnValue = calcSquareRootsCore(1, 2, 1);
            chai.assert.deepEqual(functionReturnValue, [-1]);
        });
    
        it("should return [-3] for [1, 6, 9]", () => {
            const functionReturnValue = calcSquareRootsCore(1, 6, 9);
            chai.assert.deepEqual(functionReturnValue, [-3]);
        });
    
        it("should return [-1] for [1, 2, 1]", () => {
            const functionReturnValue = calcSquareRootsCore(1, 2, 1);
            chai.assert.deepEqual(functionReturnValue, [-1]);
        });
    
        it("should return [-3, -2] for [1, 5, 6]", () => {calcSquareRootsCore(1, 5, 6);
            chai.assert.deepEqual([-3, -2], calcSquareRootsCore(1, 5, 6));
        });
    });
});