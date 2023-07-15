// Паттерны проектирования
// ======================================Singleton======================================
// когда нужен тоолько один экземпляр объекта

class FileSystem {
    constructor(name) {
        if (FileSystem.__instance) {
            return FileSystem.__instance;
        }

        this.name = name;
        FileSystem.__instance = this;
    }

    getInstance() {
        return FileSystem.__instance;
    }

    test() {
        console.log(`this is test ${this.name}`);
    }
}

const system1 = new FileSystem("my-filesystem-1");
const system2 = new FileSystem("my-filesystem-2");

console.log(system1);
console.log(system2);
system1.test();
system2.test();

// ======================================Builder======================================

class User {
    constructor(firstName, lastName, midName, age, email, login, password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.midName = midName;
        this.age = age;
        this.email = email;
        this.login = login;
        this.password = password;
    }
}

class UserBuilder {
    constructor() {
        this.firstName = null;
        this.lastName = null;
        this.midName = "";
        this.age = null;
        this.email = null;
        this.login = "";
        this.password = null;
        return this;
    }

    // все остальные методы для  сделать также
    addFirstName(firstName) {
        this.firstName = firstName;
        return this
    }

    build() {
        return new User(
            this.firstName,
            this.lastName,
            // ... и так далее
        )
    }
}

const userBuilder1 = new UserBuilder();
userBuilder1.addFirstName("firstName");
// userBuilder1.addLastName("lastName");

// const userbuilder2 = new UserBuilder().addFirstName("firstName").addLastName("lastName");

// const params = {
//     firstName,
//     lastName,
//     midName,
//     age,
//     email,
//     login,
//     password
// }
// const user = new UserBuilder(firstName, lastName, null, null, email, null, "123");

// const params = {
//     firstName,
//     lastName,
//     midName,
//     age,
//     email,
//     login,
//     password
// }
// const user = new UserBuilder(firstName, lastName, null, null, email, null, "123");

// ======================================Decorator======================================

function withLog(func) {
    function inner(...args) {
        console.log(`${func.name} args`, args);
        const result = func(...args);
        console.log(`${func.name} result`, result);
        return result;
    }

    return inner;
}

// decorator 2
function withCache(func, cacheSize = 128) {
    const cache = [];

    function addToCache(args, result) {
        cache.push({
            args: JSON.stringify(args),
            result
        });

        if (cache.length > cacheSize) {
            cache.shift();
        }
    }

    function getFromCache(args) {
        const item = cache.find((item) => item.args === JSON.stringify(args));
        if (!item) {
            return null;
        }

        return item.result;
    }

    function inner(...args) {
        console.log(`${func.name} args`, args);

        let result = getFromCache(args);

        if (result) {
            console.log(`${func.name} from Cache`);
        } else {
            result = func(...args);
            addToCache(args, result);
        }

        console.log(`${func.name} result`, result);
        return result;
    }

    return inner;
}

function sum(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

const sumWithLog = withLog(sum);
const multiplyWithLog = withLog(multiply);
const divideWithLog = withLog(divide);

sumWithLog(5, 6);

multiplyWithLog(5, 4);

divideWithLog(6, 3);

const sumWithCache = withCache(sum);
sumWithCache(1, 2);
sumWithCache(3, 4);
sumWithCache(1, 2);


// treesum без рекурсии
function treesum(array) {
    if (!Array.isArray(array)) {
        throw new Error("this is not an array")
    }

    const stack = array.slice();
    let sum = 0;

    while (stack.length) {
        const lastItem = stack.pop();

        if (Array.isArray(lastItem)) {
            lastItem.forEach(item => stack.push(item));
            // stack.push(...lastItem);
        } else {
            sum += lastItem;
        }
    }

    return sum;
}
