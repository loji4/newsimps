// add an event listener to the button 
document.querySelector('.btn').addEventListener('click',btnFunc)
  
// function for event listener. 
function btnFunc (e) {
// send a request to simpsons api to retrieve quotes
fetch('https://thesimpsonsquoteapi.glitch.me/quotes')
// retrieve json from the response 
.then(response => response.json())
// place json(quote) into the innerHTML 
.then(data => document.querySelector('.btn').innerHTML=data[0].quote);
// fetch the author of the quote 
fetch('https://thesimpsonsquoteapi.glitch.me/quotes')
.then(response => response.json())
// place json(author) into the innerHTML.
.then(data => document.querySelector('.author').innerHTML=data[0].character);
}
btnFunc()