function printNumbers(array, step) {
    let toPrint = []
    for (let i = 0; i < array.length; i += step) {
        toPrint.push(array[i])
    }

    return(toPrint)
}

printNumbers(['5', '20', '31', '4', '20'], 2)