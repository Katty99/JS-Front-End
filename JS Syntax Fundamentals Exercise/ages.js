function ages(num) {
    let result;

    if (num < 0) {
        result = "out of bounds"
    }

    else if ( 0 <= num && num <= 2) {
        result = "baby"
    }

    else if ( 3 <= num && num <= 13) {
        result = "child"
    }

    else if ( 14 <= num && num <= 19) {
        result = "teenager"
    }

    else if ( 20 <= num && num <= 65) {
        result = "adult"
    }

    else if ( 66 <= num) {
        result = "elder"
    }

    console.log(result)
}
