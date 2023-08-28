// указать тип переменной
/** @type HTMLElement */
let variable;

/**
 * @param {HTMLElement} element
 * 
 * @return {string}
*/
function func(element) {
    return "return";
}
/**
 * 
 * @param {number} directionX x-coordinate from -1 to 1
 * @param {number} directionY y-coordinate from -1 to 1
 * @returns {() => void} handler for button
 */
function getButtonHandler(directionX, directionY) {
    function inner() {
        move(directionX, directionY);
        updatePosition();
    }

    return inner;
}