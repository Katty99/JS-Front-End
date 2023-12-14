function extractText() {
    const content = document.querySelectorAll('ul#items li')
    const textBox = document.querySelector('#result')

    for (let element of content) {
        textBox.value += element.textContent + '\n'
    }
}