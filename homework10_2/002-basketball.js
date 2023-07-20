function getWinner(points) {
    let pointsTeam1 = 0;
    let pointaTeam2 = 0;

    points.forEach(quater => {
        let score = quater.split("-");
        pointsTeam1 += parseInt(score[0]);
        pointaTeam2 += parseInt(score[1]);
    });

    if (pointsTeam1 === pointaTeam2) {
        return undefined;
    } else {
        return pointsTeam1 > pointaTeam2 ? 1 : 2;
    }
}

console.log(getWinner(['23-26', '24-30', '30-27', '35-31']));
console.log(getWinner(['36-32', '32-24', '20-28', '30-26']));
console.log(getWinner(['36-18', '22-31', '27-21', '19-34']));