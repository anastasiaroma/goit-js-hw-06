let counterValue = 0;
const targetBtn = document.querySelector("#counter");
const btnIncrementEl = document.querySelector('[data-action="increment"]');
const numberValueEl = document.querySelector('#value')
const btnDescrementEl = document.querySelector('[data-action="decrement" ]');

btnIncrementEl.addEventListener('click',() =>{
    numberValueEl.textContent = counterValue +=1
});
btnDescrementEl.addEventListener('click',() =>{
    numberValueEl.textContent = counterValue -=1
})