function rotation(array, numOfRotations) {
    for (let i = 0; i < numOfRotations; i++) {
        array.push(array[0])
        array.shift()
    }
    console.log(array.join(" "))
}


rotation([51, 47, 32, 61, 21], 2)