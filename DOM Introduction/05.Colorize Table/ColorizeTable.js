function colorize() {
    const items = document.querySelectorAll('table tr')
    let index = 0
    for (let row of items) {
        index ++;
        if (index % 2 === 0) {
            row.style.backgroundColor = 'teal'
        }
    }
}