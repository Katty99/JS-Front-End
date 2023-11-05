function solve(nums) {
    let even = 0
    let odd = 0

    for (let i of nums) {
        if (i % 2 === 0 ){
            even += i
        }
        else {
            odd += i
        }
    }

    console.log(even - odd)
}
