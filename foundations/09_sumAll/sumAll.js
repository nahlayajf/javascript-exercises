const sumAll = function (min, max) {
    if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
    if (min < 0 || max < 0) return "ERROR";
    if (min > max) {
        const temp = min;
        min = max;
        max = temp;
    }
    let sum = 0;
    for (let i = min; i <= max; i++) {
        sum += i;
    }
    return sum;
};




// *** Unfinished solution ***

// // const sumAll = function (num1, num2) {
//     let max = Math.max(num1, num2);
//     let startNum = Math.min(num1, num2)
//     if ((num1 || num2) < 0 || !NisInteger(num1, num2) || isNaN(num1)  {
//         return ("ERROR");
//     }
//     else {
//         for (let i = startNum + 1; i <= max; i++) {
//             startNum += i
//         }
//         return startNum;
//     }
// }

// Todo: Fix solution 
// Do not edit below this line
module.exports = sumAll;

