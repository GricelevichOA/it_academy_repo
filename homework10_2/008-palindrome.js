function isPalindrome(value) {
    return value === value.split("").reverse().join("");
}

console.log(isPalindrome("bob"));
console.log(isPalindrome("task"));
console.log(isPalindrome("rock"));
console.log(isPalindrome("loool"));