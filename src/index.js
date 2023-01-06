module.exports = function reverse(n) {
    let result = "";
    const numberModul = Math.abs(n);
    for (number of numberModul.toString()) {
        result = number + `${result}`;
    }
    return Number(result);
};
