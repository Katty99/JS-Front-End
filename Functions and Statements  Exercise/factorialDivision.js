function factorialDivision(numOne, numTwo) {
    function factorial(number) {
        let solution = 1
        for (let i = 1; i <= number; i++) {
            solution *= i
        }
        return solution
    }

    let factorialOne = factorial(numOne)
    let factorialTwo = factorial(numTwo)
    let finalResult = factorialOne / factorialTwo
    console.log(finalResult.toFixed(2))
}

factorialDivision(6, 2)