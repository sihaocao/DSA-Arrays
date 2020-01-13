function filterArray(arr) {
    const results = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 5) {
            results.push(arr[i])
        }
    }
    return results;
}

filterArray([0,1,2,3,4,5,6,7,8,9,10]);