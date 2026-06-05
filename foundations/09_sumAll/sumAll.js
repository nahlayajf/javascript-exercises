const sumAll = function (num1, num2) {
    let range = Math.abs(num1 - num2);
    let startNum = Math.min(num1, num2)

    for (let i = startNum; i < range; i++) {
        startNum += i;
    }

    let total = startNum;
    return total
}
// Todo: Fix debuggerx
// Do not edit below this line
module.exports = sumAll;

