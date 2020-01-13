function mergeArrays(arr1, arr2) {
    const mergedArray = arr1.concat(arr2);
    const sortedArray = mergedArray.sort(function (a, b) {
        return a - b
    })
    return sortedArray
}

mergeArrays([1, 3, 6, 7, 11], [2, 4, 5, 8, 9, 10]);