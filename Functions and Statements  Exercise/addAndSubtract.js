function addAndSubtract(numOne, numTwo, numThree) {
    function sum(numOne, numTwo) {
        return numOne + numTwo
    }

    function subtract(sum, numThree) {
        return sum - numThree
    }

    console.log(subtract(sum(numOne, numTwo), numThree))
}