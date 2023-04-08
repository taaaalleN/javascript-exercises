const removeFromArray = function(array, ...removeFromArray) {
    return array.filter(e => !removeFromArray.includes(e));
};

// Do not edit below this line
module.exports = removeFromArray;