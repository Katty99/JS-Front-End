function array(n, nums) {
    let final = []
    for (let i = 0; i < n; i++) {
        final.push(nums[i])
    }
    console.log(final.reverse().join(" "))
}

