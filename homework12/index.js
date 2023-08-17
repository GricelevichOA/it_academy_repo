// CLASS
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

// FUNCTIONS
function distanceCalc(start, end) {
    if (!(start instanceof Point) || !(end instanceof Point)) {
        throw new Error("One or both points are not an instance of Point class");
    }

    if (start.x === end.x && start.y === end.y) {
        throw new Error("You should use two different points");
    }

    return Math.sqrt((start.x - end.x) ** 2 + (start.y - end.y) ** 2).toFixed(5);
}

function distanceInput() {
    const x1 = prompt("Введите x первой точки");
    const y1 = prompt("Введите y первой точки");
    const x2 = prompt("Введите x второй точки");
    const y2 = prompt("Введите у второй точки");

    const start = new Point(x1, y1);
    const end = new Point(x2, y2);

    const result = distanceCalc(start, end);

    alert(`Расстояние между точками (${start.x}, ${start.y}) и (${end.x}, ${end.y}) равно: ${result}`);
}

// FUNCTION CALL
distanceInput();

// TESTS
describe('GENERAL', () => { 
    it("should throw an error", () => {
        const start = "1, 2";
        const end = new Point(3, 4);
        chai.assert.throws(()=>{distanceCalc(start, end)}, Error, "One or both points are not an instance of Point class");
    });

    it("should throw an error", () => {
        const start = new Point(3, 4);
        const end = new Point(3, 4);
        chai.assert.throws(()=>{distanceCalc(start, end)}, Error, "You should use two different points");
    });

    it("should return 1.00000 for points (2,4) (3, 4)", () => {
        const start = new Point(2, 4);
        const end = new Point(3, 4);
        chai.assert.equal(distanceCalc(start, end), 1.00000);
    });

    it("should return 10.00000 for points (2,3) (8, 11)", () => {
        const start = new Point(2, 3);
        const end = new Point(8, 11);
        chai.assert.equal(distanceCalc(start, end), 10.00000);
    });

    it("should return 13.60147 for points (7,12) (3, 25)", () => {
        const start = new Point(7,12);
        const end = new Point(3, 25);
        chai.assert.equal(distanceCalc(start, end), 13.60147);
    });

    it("should return 44.65422 for points (-17, 9) (20, -16)", () => {
        const start = new Point(-17, 9);
        const end = new Point(20, -16);
        chai.assert.equal(distanceCalc(start, end), 44.65423);
    });
});
