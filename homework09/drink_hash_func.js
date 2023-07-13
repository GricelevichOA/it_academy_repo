function HashStorageFunc() {
    const hash = {};

    this.addValue = (key, value) => {
        hash[key] = value;
    }

    this.getValue = (key) => {
        return hash[key]; // проверок не делал, undefined приходит в любом случае, если ключа не существует
    }

    this.deleteValue = (key) => {
        if (hash[key]) {
            delete(hash[key]);
            return true;
        } else {
            return false;
        }
    }

    this.getKeys = () => {
        return Object.keys(hash);
    }
}

const drinkStorage = new HashStorageFunc();

drinkStorage.addValue("Juice", {fruit: "orange", isAlcoholic: false});
drinkStorage.addValue("Vodka", {isAlcoholic: true, ABV: 40});
drinkStorage.addValue("Tea", {isAlcoholic: false, recepie: "Поместить пакетик в горячую воду на 4-5 минут"});
drinkStorage.addValue("Water", {description: "Plain water"});
drinkStorage.deleteValue("Water");


console.log("DRINKS_HASH_FUNC");

console.log(drinkStorage.getKeys());
drinkStorage.getKeys().forEach((key)=> {
    console.log(`Напиток: ${key}. Информация о напитке:`);
    console.log(drinkStorage.getValue(key));
})