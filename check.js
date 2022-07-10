const incBtn = document.querySelector('#inc');
const decBtn = document.querySelector('#dec');
let counter=0
function incre() {
    const counterel=document.getElementById('counter')
    counter++
    counterel.innerText=counter
    //create something new type of output 
    let li=document.createElement('li')
    li.innerHTML = '<b>Something<\b>'+ counter
}
function dcere() {
    const counterel=document.getElementById('counter')
    counter--
    counterel.innerText=counter
}
incBtn.addEventListener('click',incre)
decBtn.addEventListener('click',dcere)