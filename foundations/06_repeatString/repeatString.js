const repeatString = function (string, num) {
    let newString = string;
    for (let i = 0; i < num - 1; i++) {
        newString += string;
        console.log(newString);
    }
    return newString;

};

// Do not edit below this line
module.exports = repeatString;
