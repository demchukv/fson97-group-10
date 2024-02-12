const quoteContainer = document.querySelector('.generated-quote-container');

/*document.addEventListener('DOMContentLoaded', addOrUpdateQuote);*/

function addOrUpdateQuote() {

  const storedData = localStorage.getItem('quoteData');
  const storedDate = localStorage.getItem('quoteDate');

  const today = new Date().getDate();


  if (storedData && storedDate && parseInt(storedDate) === today) {
    const { author, quote } = JSON.parse(storedData);
    createMarkup(author, quote);
  } else {

    fetchNewQuote();
  }
}

function fetchNewQuote() {
  fetch('https://energyflow.b.goit.study/api/quote', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  })
    .then(response => response.json())
    .then(data => {

      localStorage.setItem('quoteData', JSON.stringify(data));
      localStorage.setItem('quoteDate', new Date().getDate());

      const { author, quote } = data;
      createMarkup(author, quote);
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

function createMarkup(author, quote) {
  const markup = `
    <h2 class="quote-header">Quote of the day</h2>
    <p class="quote-text">${quote}</p>
    <h3 class="quote-author">${author}</h3>`;
  quoteContainer.innerHTML = markup;
}

addOrUpdateQuote();