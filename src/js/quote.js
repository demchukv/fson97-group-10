const quoteContainer = document.querySelector('.generated-quote-container');
const start = 10;
const date = new Date();
const today = date.getDate();
console.log(today);

if (start !== today) {
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
        localStorage.setItem('quoteData', JSON.stringify(data));
        
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
}
