function solve() {
    let input = document.getElementById('text').value.toLowerCase()
    let convention = document.getElementById('naming-convention').value
    let allowedCases = ['Pascal Case', 'Camel Case']
    if (!allowedCases.includes(convention)) {
        document.getElementById('result').textContent = 'Error!'
    } else if (convention === 'Camel Case') {
        let result = input.split(" ").reduce((s, c) => s
            + (c.charAt(0).toUpperCase() + c.slice(1)));
        document.getElementById('result').textContent = result
    } else {
        let result = input.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
            .map(x => x.charAt(0).toUpperCase() + x.slice(1).toLowerCase())
            .join('');
        document.getElementById('result').textContent = result
    }
}