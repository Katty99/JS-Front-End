function motoRace(input) {
    let numberOfRiders = Number(input.shift())
    let riders = {}
    let ridersUpdated = {}

    for (let i = 0; i < numberOfRiders; i++) {
        let currentRacer = input.shift()
        let [name, fuelCapacity, position] = currentRacer.split('|')
        riders[name] = [Number(fuelCapacity), Number(position)]
        ridersUpdated[name] = [Number(fuelCapacity), Number(position)]
    }

    for (let line of input) {
        if (line === 'Finish') {
            break
        }
        let currentLine = line.split(' - ')
        let command = currentLine.shift()
        switch (command) {
            case 'StopForFuel':
                let rider = currentLine.shift()
                let minimumFuel = Number(currentLine.shift())
                let newPosition = Number(currentLine.shift())

                if (ridersUpdated[rider][0] < minimumFuel) {
                    ridersUpdated[rider][0] = riders[riders][0]
                    ridersUpdated[rider][1] = newPosition
                    console.log(`${rider} stopped to refuel but lost his position, now he is ${newPosition}.`)
                } else {
                    console.log(`${rider} does not need to stop for fuel!`)
                }
                break;

            case 'Overtaking':
                let riderOne = currentLine.shift()
                let riderTwo = currentLine.shift()

                if (ridersUpdated[riderOne][1] < ridersUpdated[riderTwo][1]) {
                    ridersUpdated[riderOne][1] -= 1
                    ridersUpdated[riderTwo][1] += 1
                    console.log(`${riderOne} overtook ${riderTwo}!`)
                }
                break;

            case 'EngineFail':
                let riderFailed = currentLine.shift()
                let lapsLeft = currentLine.shift()
                delete riders[riderFailed]
                delete ridersUpdated[riderFailed]
                console.log(`${riderFailed} is out of the race because of a technical issue, ${lapsLeft} laps before the finish.`)
                break;
        }
    }

    let ridersArray = Object.entries(ridersUpdated);
    ridersArray.sort((a, b) => a[1][1] - b[1][1]);
    let sortedRiders = Object.fromEntries(ridersArray);
    console.log(sortedRiders);
}

let input = (["3",
    "Valentino Rossi|100|1",
    "Marc Marquez|90|2",
    "Jorge Lorenzo|80|3",
    "StopForFuel - Valentino Rossi - 50 - 1",
    "Overtaking - Marc Marquez - Jorge Lorenzo",
    "EngineFail - Marc Marquez - 10",
    "Finish"])

motoRace(input)