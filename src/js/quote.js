const quoteContainer = document.querySelector('.generated-quote-container');


document.addEventListener('DOMContentLoaded', aaddQuote);

function aaddQuote() {
  fetch('https://energyflow.b.goit.study/api/quote', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  })
    .then(response => response.json())
    .then(data => {
      console.log(data); 
      localStorage.setItem('quoteData', JSON.stringify(data))
    
    })
    .catch(error => {
      console.error('Error:', error);
    });
}
