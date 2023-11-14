function simpleCalculator(num1, num2, operation) {
    switch (operation) {
        case 'multiply': {
            console.log(num1 * num2);
            break;
        }
        case 'divide': {
            console.log(num1 / num2);
            break;
        }

        case 'add': {
            console.log(num1 + num2);
            break;
        }

        case 'subtract': {
            console.log(num1 - num2);
            break
        }
    }
}

simpleCalculator(40, 8, 'divide')
simpleCalculator(5, 5, 'multiply')
simpleCalculator(12, 19, 'add')
simpleCalculator(50, 13, 'subtract')