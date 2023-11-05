function calculate(num, c1, c2, c3, c4, c5) {
    let toInt = parseInt(num)
    let commands = [c1, c2, c3, c4, c5]

    for (let i = 0; i <= commands.length; i++) {
        if (commands[i] === 'chop') {
            toInt /= 2
            console.log(toInt)
        }

        else if (commands[i] === 'dice') {
            toInt = Math.sqrt(toInt)
            console.log(toInt)
        }

        else if (commands[i] === 'spice') {
            toInt += 1
            console.log(toInt)
        }

        else if (commands[i] === 'bake') {
            toInt *= 3
            console.log(toInt)
        }

        else if (commands[i] === 'fillet') {
            toInt -= 0.2 * toInt
            console.log(toInt)
        }
    }
}

calculate('9', 'dice', 'spice', 'chop', 'bake', 'fillet')