function orders(product, quantity) {
    let priceList = {
        "coffee": 1.5,
        "water": 1,
        "coke": 1.4,
        "snacks":2,
    };

    let totalPrice = priceList[product] * quantity
    console.log(totalPrice.toFixed(2))
}

orders("water", 5)