function calculate (fruit, weight, price) {
    let grToKg = weight / 1000
    let cost = price * grToKg

    console.log(`I need $${cost.toFixed(2)} to buy ${grToKg.toFixed(2)} kilograms ${fruit}.`)
}

calculate('orange', 2500, 1.80)