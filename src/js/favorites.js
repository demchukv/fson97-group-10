import Handlebars from 'handlebars';
import icons from '../img/icons.svg';
const refs = {
  favoritesContent: document.querySelector('.favorites-card-content'),
};
const KEY = 'favorites';
let dltBtnsCards = null;

try {
  let getLocalStorageData = localStorage.getItem(KEY);
  let data = JSON.parse(getLocalStorageData);
  refs.favoritesContent.innerHTML = `<ul class="favorites-group">${createMarkup(
    data
  )}</ul>`;
  dltBtnsCards = document.querySelectorAll('.favorites-delete');
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
    });
  });
}

//* MARKUP CARDS
function createMarkup(data) {
  return data
    .map(
      i =>
        `
        <li class="favorites-item" data-id="${i._id}">
           <p class="favorites-item-head">
              <span class="favorites-item-head-wrapper">
                <span class="favorites-item-workout">WORKOUT</span>
                  <button class="favorites-delete">
                    <svg class="delete-icon" width="12" height="13">
                      <use href="${icons}#icon-trash"></use>
                    </svg>
                  </button>
                  <a class="ex-item-start" href="#" data-id="${i._id}">
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
