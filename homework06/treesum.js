const testArray = [5, 7, [4, [2], 8, [1, 3], 2], [9, []], 1, 8];

function treeSum(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i]) && arr[i].length > 0) {
            sum += treeSum(arr[i]);
        } else {
            sum += parseInt(arr[i]) ? arr[i] : 0;
        }
    }
    return sum;
}

console.log(`Сумма всех числовых элементов массива равна: ${treeSum(testArray)}`);
