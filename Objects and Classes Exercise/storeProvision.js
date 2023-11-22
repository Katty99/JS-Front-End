function storeProvision(arrayOne, arrayTwo) {
    const products = {}

    for (let i = 0; i < arrayOne.length; i++) {
        if (i % 2 !== 0) {
            products[arrayOne[i - 1]] = parseInt(arrayOne[i])
        }
    }

    for (let i = 0; i < arrayTwo.length; i++) {
        if (i % 2 !== 0) {
            if (products.hasOwnProperty(arrayTwo[i - 1])) {
                products[arrayTwo[i - 1]] += parseInt(arrayTwo[i])
            }
            else {
                products[arrayTwo[i - 1]] = parseInt(arrayTwo[i])
            }
        }
    }

    for (const key in products) {
        console.log(`${key} -> ${products[key]}`)
    }
}

storeProvision(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],

    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'])