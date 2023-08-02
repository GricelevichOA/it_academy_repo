// похожая домашка с классами
class Publisher {
    constructor(items = []) {
        this.items = items;
    }

    printItems() {
        for (const item of this.items) {
            item.print();
        }
    }

    addItem(itemToAdd) {
        if (itemToAdd instanceof Item) {
            this.items.push(itemToAdd);
        } else {
            throw new Error("itemToAdd is not an Item instance!");
        }
    }
}

class Item {
    constructor(title, description) {
        this.title = title;
        this.description = description;
    }

    print() {
        console.log(`Title: ${this.title}. Description: ${this.description}`);
    }
}

class Article extends Item {
    constructor(title, description, author) {
        super(title, description);
        this.author = author;
    }

    print() {
        console.log(`Article!\n${this.title}.\nDescription: ${this.description}.\nBy: ${this.author}`);
    }
}

class News extends Item {
    constructor(title, description, source, date) {
        super(title, description);
        this.source = source;
        this.date = date;
    }

    print() {
        console.log(`Source: ${this.source}\nHappend on: ${this.date}\nTitle: ${this.title}\nDescription: ${this.description}`);
    }
}

class Course extends Item {
    constructor(title, description, expirationDate) {
        super(title. description);
        const parsedExpirationDate = new Date(expirationDate);
        if (parsedExpirationDate === "Invalid Date") {
            throw new Error("parsedExpirationDate is Invalid Date")
        }
        this.expirationDate = parsedExpirationDate;
    }
    print() {
        if (this.#isActual()) {
            console.log(`Course: ${this.title} will be availible till ${this.expirationDate}`);
        } else {
            console.log("Not actual");
        }
    }

    #isActual() {
        return new Date() < this.expirationDate;
    }
}

const publisher = new Publisher();

publisher.addItem("mi-item-1");
publisher.addItem("mi-item-2");
publisher.addItem("mi-item-3");

// итерировать все элементы объекта
const obj = {};

for (const [key, value] of Object.entries(obj)) {
    console.log(`name: ${key} position: (${value.x}, ${value.y})`);
}