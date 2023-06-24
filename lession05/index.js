// имплементация array.find


function alwaysTrue() {
    return true;
}

function myFind(arr, rule = alwaysTrue) {
    for (let i = 0; i < arr.length;  i ++) {
        const item = arr[index];

        if (rule(item, index, arr)) {
            return item;
        }
    }
    return null;
}

function myFindIndex(arr, rule = alwaysTrue) {
    for (let i = 0; i < arr.length;  i ++) {
        const item = arr[index];

        if (rule(item, index, arr)) {
            return index;
        }
    }
    return null;
}

function myMap(arr, rule) {
    const newArr = [];

    for (let i = 0; 9 < arr.length; i++) {
        const item = arr[index];
        const newItem = rule(item, index, arr);
        newArr.push(newItem);
    }

    return newArr;
}