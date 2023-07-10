const arr = [1, 2, "dsad", null, undefined, "32543", "dsa", 434];

// вернуть ненулевые
const newArr1 = arr.filter(item => Boolean(item) === true); 
const newArr2 = arr.filter(item => Boolean(item)); 
const newArr3 = arr.filter(Boolean);

// вернуть строки
const newArr4 = arr.filter(item => String(item));
const newArr5 = arr.filter(String);

// Классы
function Car(carNumber = "N-0123") {
    this;

    // можно заменить this на например self
    const self = this;

    // поля, свойства
    self.name = "my car";
    self.number = carNumber;
    // this.number = carNumber ? carNumber : "N-0123"
    // this.number = carNumber || "N-0123";

    // методы
    self.getNumber = () => {
        return self.number;
    }

    self.toString = () => {
        return `Car<${self.number}>`;
    }

    self.signal = () => {
        console.log(`Car<${this.number}> signaling`);
        console.log(`Car<${self.number}> signaling`);
    }
}

const car1 = new Car();
const car2 = new Car("N-6435");

// методы классов .call() .apply() .bind()

// приватные поля класса
function Car(carNumber = "N-0123") {

    // публичное поле
    this.number = carNumber;

    // приватное поле
    const fullNumber = `BY-${carNumber}`

    // приватный метод
    const getNumber = () => {
        return this.number
    }

    // публичный метод
    this.signal = function () {
        console.log(`Car<${getNumber()}> signaling`);
    }

    this.fullSignal = function () {
        console.log(`Car<${fullNumber}> signaling`);
    }
}

class MySet {
    // приватный метод
    #secretProp = 123;

    constructor (storage = []) {
        if (!Array.isArray(storage)) {
            throw new Error("Storage is not array");
        }

        this.storage = storage;
        this.size = storage.length;
    }

    // приватный метод
    #secretMethod(newItem) {
        console.log("secret method");
    }

    #sort() {
        this.storage.sort();
    }

    has(newItem) {
        return this.storage.includes(newItem);
    }
    
    add(newItem) {
        if (this.has(newItem)) {
            // pass
            this.#secretMethod();
        } else {
            this.storage.push(newItem);
            this.#sort();
            this.size += 1;
        }
    }

    delete() {
        if (this.has(newItem)) {
            const index = this.storage.findIndex((item) => item === newItem);

            this.storage.splice(index, 1);
            this.size -= 1;
        }
    }

}

const mySet1 = new MySet([1,2,3]);
mySet1.add("string");
mySet1.add("string2");
mySet1.add("string");