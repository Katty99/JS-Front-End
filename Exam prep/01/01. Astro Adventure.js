function astroAdventure(input) {
    let astronauts = {}
    let numberOfAstronauts = input.shift()

    for (let i = 0; i < numberOfAstronauts; i++) {
        let currentAstronaut = input.shift().split(' ')
        let [name, oxygen, energy] = currentAstronaut
        astronauts[name] = [Number(oxygen), Number(energy)]
    }

    for (let row of input) {
        if (row === 'End') {
            break
        }

        let [command, name, num] = row.split(' - ')

        if (command === 'Explore') {
            let energyNeeded = Number(num)
            let astronautEnergy = astronauts[name][1]
            if (energyNeeded <= astronautEnergy) {
                astronauts[name][1] -= energyNeeded
                let remainingEnergy = astronauts[name][1]
                console.log(`${name} has successfully explored a new area and now has ${remainingEnergy} energy!`)
            } else {
                console.log(`${name} does not have enough energy to explore!`)
            }
        } else if (command === 'Refuel') {
            let amount = Number(num)
            if (astronauts[name][1] + amount > 200) {
                let excess = (astronauts[name][1] + amount) - 200
                let correctAmount = amount - excess
                astronauts[name][1] = 200
                console.log(`${name} refueled their energy by ${correctAmount}!`)
            } else {
                astronauts[name][1] += amount
                console.log(`${name} refueled their energy by ${amount}!`)
            }

        } else if (command === 'Breathe') {
            let amount = Number(num)
            if (astronauts[name][0] + amount > 100) {
                let excess = (astronauts[name][0] + amount) - 100
                let correctAmount = amount - excess
                astronauts[name][0] = 100
                console.log(`${name} took a breath and recovered ${correctAmount} oxygen!`)
            } else {
                astronauts[name][0] += amount
                console.log(`${name} took a breath and recovered ${amount} oxygen!`)
            }
        }
    }

    for (let key in astronauts) {
        let name = key
        let [oxygen, energy] = astronauts[key]
        console.log(`Astronaut: ${name}, Oxygen: ${oxygen}, Energy: ${energy}`)
    }
}

const input = [    '4',
    'Alice 60 100',
    'Bob 40 80',
    'Charlie 70 150',
    'Dave 80 180',
    'Explore - Bob - 60',
    'Refuel - Alice - 30',
    'Breathe - Charlie - 50',
    'Refuel - Dave - 40',
    'Explore - Bob - 40',
    'Breathe - Charlie - 30',
    'Explore - Alice - 40',
    'End']

astroAdventure(input)