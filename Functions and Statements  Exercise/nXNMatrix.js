function nXNMatrix (num) {
    let matrix = []
    for (let row = 0; row < num; row++) {
        matrix.push([])
        for (let col = 0; col < num; col++) {
            matrix[row].push(num)
        }
    }

    for (let row of matrix) {
        console.log(row.join(" "))
    }
}

nXNMatrix(7)