function toggle() {
    let buttonText = document.getElementsByClassName("button")[0]
    let text = document.getElementById('extra')

    if (buttonText.textContent === 'More') {
        text.style.display = 'block'
        buttonText.textContent = 'Less'
    } else if (buttonText.textContent === 'Less') {
        text.style.display = 'none'
        buttonText.textContent = 'More'
    }
}