const repeatString = function (string, num) {
    if (num < 0) {
        return "ERROR";
    }
    if (num === 0) {
        return "";
    }

    let newString = string;

    for (let i = 0; i < num - 1; i++) {
        newString += string;
        console.log(newString);
    }
    return newString;




};

// Make string repeat 0 times when 0 is the number inputed 
// run the debugger
// Do not edit below this line
module.exports = repeatString;
