/*import Handlebars from 'handlebars';*/
import icons from '../img/icons.svg';

const refs = {
  favoritesContent: document.querySelector('.favorites-card-content'),
};
const KEY = 'favorites';
let dltBtnsCards = null;
const noFavorites = ` <div class="favorites-content">
<div class="favorites-empty-img"></div>

<p class="favorites-text">
  It appears that you haven't added any exercises to your favorites yet.
  To get started, you can add exercises that you like to your favorites
  for easier access in the future.
</p>
</div>`;

try {
  if (localStorage.getItem(KEY)) {
    const storedData = JSON.parse(localStorage.getItem(KEY));
    if (Array.isArray(storedData) && storedData.length === 0) {
      console.log('');
      refs.favoritesContent.innerHTML = noFavorites;
    } else {
      refs.favoritesContent.innerHTML = `<ul class="favorites-group">${createMarkup(
        storedData
      )}</ul> 

    `;
    }
    dltBtnsCards = document.querySelectorAll('.favorites-delete');
  }else{
    refs.favoritesContent.innerHTML = noFavorites;
  }
  
} catch (e) {
  console.log(e);
}

//* DELETE BUTTON
if (dltBtnsCards) {
  dltBtnsCards.forEach(dltBtnCard => {
    dltBtnCard.addEventListener('click', e => {
      let getLocalStorageData = localStorage.getItem(KEY);
      let data = JSON.parse(getLocalStorageData);
      const card = e.target.closest('.favorites-item');
      const idCard = card.dataset.id;
      localStorage.setItem(
        KEY,
        JSON.stringify(data.filter(({ _id }) => _id !== idCard))
      );
      const cardList = document.querySelector('.favorites-group');
      cardList.removeChild(card);
      if (cardList.children.length === 0) {
        refs.favoritesContent.innerHTML = noFavorites;
      }
    });
  });
}

//* MARKUP CARDS
function createMarkup(data) {
  return data
    .map(
      i =>
        `
        <li class="favorites-item" data-id="${i._id}" id="card-${i._id}">
           <p class="favorites-item-head">
              <span class="favorites-item-head-wrapper">
                <span class="favorites-item-workout">WORKOUT</span>
                  <button class="favorites-delete">
                    <svg class="delete-icon" width="12" height="13">
                      <use href="${icons}#icon-trash"></use>
                    </svg>
                  </button>
                  <a class="ex-item-start" href="" data-id="${i._id}">
                    <span>Start</span>
                     <svg class="favorites-arrow-icon" width="14" height="14">
                      <use href="${icons}#icon-arrow-start"></use>
                    </svg>
                  </a>
             </p>
              <span class="favorites-card-title">
                <span class="favorites-run-men"><svg class="ex-icon-run" width="14" height="14">
                  <use href="${icons}#icon-running_man"></use>
                </svg>
              </span>
            <h3 class="favorites-item-name">${
              i.name.charAt(0).toUpperCase() + i.name.slice(1)
            }</h3>
            </span>
            </span>
            <p class="favorites-item-info">
             <span class="ex-info-group"><span class="favorites-item-desc">Burned calories:</span> <span
                class="favorites-item-value">${i.burnedCalories} / ${
          i.time
        } min</span>
        </span>
        <span class="favorites-info-group"><span class="favorites-item-desc">Body part:</span> <span
                class="favorites-item-value">${
                  i.bodyPart.charAt(0).toUpperCase() + i.bodyPart.slice(1)
                }</span>
        </span>
        <span class="favorites-info-group"><span class="favorites-item-desc">Target:</span> <span
                class="favorites-item-value">${
                  i.target.charAt(0).toUpperCase() + i.target.slice(1)
                }</span>
        </span>
    </p>
</li>
        `
    )
    .join('');
}
// document.addEventListener('DOMContentLoaded', function () {
//   if (!navigator.userAgent.toLowerCase().includes('webkit')) {
//     document.querySelector('.wrapper').innerHTML =
//       '<p>Sorry! Non webkit users. :(</p>';
//   }
// });
// document.addEventListener('DOMContentLoaded', function () {
//   var scrollbar = document.querySelector('.scrollbar');

//   scrollbar.style.height = '100%';
// });
