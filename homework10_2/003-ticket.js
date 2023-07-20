function checkTicket(number) {
    if (number.length !== 6) {
        return false;
    }

    const firstHalf = number.slice(0, 3).split("").reduce((curr, next) => {return parseInt(curr) + parseInt(next)});
    const secondHalf = number.slice(3).split("").reduce((curr, next) => {return parseInt(curr) + parseInt(next)});

    return firstHalf === secondHalf;
}

console.log(checkTicket('005212'));
console.log(checkTicket('133700'));
console.log(checkTicket('123032'));