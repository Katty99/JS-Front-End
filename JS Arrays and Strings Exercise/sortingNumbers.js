function sort(numbers) {
    let toPrint = []
    numbers.sort((a, b) => a - b)

    while (numbers.length > 0) {
        toPrint.push(numbers.shift(), numbers.pop());
    }

    return(toPrint)
}

console.log(sort([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]))