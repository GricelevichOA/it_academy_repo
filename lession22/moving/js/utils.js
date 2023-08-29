/**
 * @param {Number} min
 * @param {Number} max
 * @return {Number}
 */
export function randBetween(min, max) {
  const length = Math.random() * (max - min);
  return min + length;
}

export function generateStartDirections() {
  // normalization
  // sqrt(directionX**2 + directionY**2) == 1;
  // directionX**2 + directionY**2 == 1;
  // directionY == sqrt(1 - directionX**2);
  const directionX = randBetween(-1, 1);
  const directionYSign = Math.sign(randBetween(-1, 1));
  const directionY = directionYSign * Math.sqrt(1 - directionX ** 2);

  return {
    directionX,
    directionY,
  };
}