const removeFromArray = function (arr, ...items) {

    console.log(items);
    console.log(arr);
    for (let i = 0; i < items.length; i++) {
        let indexItem = arr.indexOf(items[i]);
        console.log(arr.splice(indexItem, 1));
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
