function vowels(string) {
    let count = 0;
    const letters = ["а", "о", "и", "ы", "у", "э", "е", "ё", "ю", "я"];

    for (let i = 0; i < string.length; i++) {
        let char = string[i].toLowerCase();

        if (letters.findIndex(i => i === char) != -1)
            count++;
    }

    return count;
}

const userStrind = prompt();

console.log(`В вашей строке ${vowels(userStrind)} гласных`);