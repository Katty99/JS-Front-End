function loadingBar(percentage) {
    if (percentage === 100) {
        console.log("100% Complete!")
        console.log("[%%%%%%%%%%]")
    }

    else {
        let numOfSigns = percentage / 10
        let numOfDots = 10 - numOfSigns
        let finalString = '%'.repeat(numOfSigns)+'.'.repeat(numOfDots)
        console.log(`${percentage}% [${finalString}]`)
        console.log("Still loading...")
    }
}

loadingBar(70)