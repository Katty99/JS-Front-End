function oddAndEvenSum(number) {
    let toString = number.toString()

    let oddSum = 0
    let evenSum = 0

    for (let i of toString) {
        let currentNum = parseInt(i)

        if (currentNum % 2 === 0) {
            evenSum += currentNum
        }

        else {
            oddSum += currentNum
        }
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`)
}

oddAndEvenSum(1000435)
oddAndEvenSum(3495892137259234)