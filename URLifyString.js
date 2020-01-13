function stringifyUrl(string) {
    const arr = string.split('');
    const newArr = arr.map(item => {
        if (item === ' ') {
            return item = '%20'
        }
        return item
    })
    return newArr.join('')
}

stringifyUrl('tauhida parveen');