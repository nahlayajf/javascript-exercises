const removeFromArray = function (arr, ...items) {
    let i = 0;
    while (i < items.length) {
        console.log(items)
        console.log(arr)

        if (arr.includes(items[i])) {

            let indexItem = arr.indexOf(items[i]);
            arr.splice(indexItem, 1);
        }
        else {
            i++
        }


    }

    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
