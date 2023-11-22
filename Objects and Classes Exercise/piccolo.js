function piccolo(array) {
    let cars = []

    for (let i = 0; i < array.length; i ++) {
        let [direction, registrationNumber] = array[i].split(", ");

        if (direction === "IN" && !cars.includes(registrationNumber)) {
            cars.push(registrationNumber)
        } else if (direction === "OUT" && cars.includes(registrationNumber)) {
            cars = cars.filter(car => car !== registrationNumber)
        }
    }

    if (cars.length > 0) {
        let sortedCars = cars.sort()
        console.log(sortedCars.join("\n"))
    }
    else {
        console.log("Parking Lot is Empty")
    }
}

piccolo(['IN, CA2844AA', 'IN, CA1234TA', 'OUT, CA2844AA', 'IN, CA9999TT', 'IN, CA2866HI',
    'OUT, CA1234TA', 'IN, CA2844AA', 'OUT, CA2866HI', 'IN, CA9876HH', 'IN, CA2822UU'])

piccolo(['IN, CA2844AA',

'IN, CA1234TA',

'OUT, CA2844AA',

'OUT, CA1234TA'])