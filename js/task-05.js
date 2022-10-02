const inputEl = document.querySelector("#name-input");
inputEl.addEventListener('input', (event) => {
    const outputEl = document.querySelector('#name-output')
    outputEl.textContent = event.target.value
    if (inputEl.value === '') {
        outputEl.textContent = 'Anonymous'

}
})