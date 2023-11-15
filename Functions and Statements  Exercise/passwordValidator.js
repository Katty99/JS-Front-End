function passwordValidator(password) {
    let passwordIsValid = true
    let digitsCount = 0

    if (password.length < 6 || password.length > 10) {
        passwordIsValid = false
        console.log("Password must be between 6 and 10 characters")
    }

    for (let i of password) {
        let condition = /^[a-zA-Z0-9]+$/

        if (condition.test(i) === false) {
            passwordIsValid = false
            console.log("Password must consist only of letters and digits")
            break
        }
    }

    for (let i of password) {
        let condition = /[0-9]/
        if (condition.test(i)) {
            digitsCount += 1
        }
    }

    if (digitsCount < 2) {
        passwordIsValid = false
        console.log("Password must have at least 2 digits")
    }

    if (passwordIsValid) {
        console.log("Password is valid")
    }
}

passwordValidator("12Pass")