document.querySelector('.btn').addEventListener('click',btnFunc)
        
function btnFunc (e) {
    fetch('https://thesimpsonsquoteapi.glitch.me/quotes')
.then(response => response.json())
.then(data => document.querySelector('.btn').innerHTML=data[0].quote);
fetch('https://thesimpsonsquoteapi.glitch.me/quotes')
.then(response => response.json())
.then(data => document.querySelector('.author').innerHTML=data[0].character);
}
btnFunc()