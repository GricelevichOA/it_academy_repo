class HashStorageClass {
    constructor() {
        this.hash = {};
    }

    addValue(key, value) {
        this.hash[key] = value;
    };

    getValue(key) {
        return this.hash[key]; // проверок не делал, undefined приходит в любом случае, если ключа не существует
    };

    deleteValue(key) {
        if (this.hash[key]) {
            delete (this.hash[key]);
            return true;
        } else {
            return false;
        }
    };

    getKeys() {
        return Object.keys(this.hash);
    };
}

const drinkStorageClass = new HashStorageClass();

drinkStorageClass.addValue("Juice", {fruit: "orange", isAlcoholic: false});
drinkStorageClass.addValue("Vodka", {isAlcoholic: true, ABV: 40});
drinkStorageClass.addValue("Tea", {isAlcoholic: false, recepie: "Поместить пакетик в горячую воду на 4-5 минут", ingridients: ["tea", "dried apple"]});
drinkStorageClass.addValue("Water", {description: "Plain water"});
drinkStorageClass.deleteValue("Water");

console.log("DRINKS_HASH_CLASS ");

console.log(drinkStorageClass.getKeys());
drinkStorageClass.getKeys().forEach((key)=> {
    console.log(`Напиток: ${key}. Информация о напитке:`);
    console.log(drinkStorageClass.getValue(key));
})