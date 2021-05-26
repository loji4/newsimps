document.querySelector('.btn').addEventListener('click',btnFunc)
        
function btnFunc (e) {
    fetch('https://thesimpsonsquoteapi.glitch.me/quotes')
.then(response => response.json())
// .then(data => console.log(data))
.then(data => document.querySelector('.btn').innerHTML=data[0].quote);
}