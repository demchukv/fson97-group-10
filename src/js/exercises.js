import axios from 'axios';

const refs = {
  gallery: document.querySelector('.gallery'),
  buttons: document.querySelector('.exercises-btns-div'),
  musclesBtn: document.querySelector('[data-muscles]'),
  bodypartsBtn: document.querySelector('[data-bodyparts]'),
  equipBtn: document.querySelector('[data-equipment]'),
};

axios.defaults.baseURL = 'https://energyflow.b.goit.study/api';

async function getData() {
  const data = await axios.get('/filters', {
    params: {
      filter: 'Muscles',
      page: 1,
      perPage: 12,
    },
  });
  return data;
}

getData().then(
  ({ data: { results } }) => createMarkup(results),
  refs.musclesBtn.classList.add('active')
);

function createMarkup(arr) {
  const markup = arr
    .map(
      ({ name, filter, imgUrl }) => `<li class="gallery-item">
        <a href="">
        <img class="gallery-image" src="${imgUrl}" alt="Galllery Image">
            <ul class="gallery-item-description">
                <li class="name">${name}</li>
                <li class="filter">${filter}</li>
            </ul>
        </a>
    </li>`
    )
    .join('');

  refs.gallery.insertAdjacentHTML('beforeend', markup);
}


refs.buttons.addEventListener('click', selected);

let prevButton = null;

function selected(e) {
  const isButton = e.target.nodeName === 'BUTTON';
  refs.musclesBtn.classList.remove('active');

  if (!isButton) {
    return;
  }

  e.target.classList.add('active');

  if (prevButton !== null) {
    prevButton.classList.remove('active');
  }
  prevButton = e.target;

  if (prevButton === prevButton) {
    prevButton.classList.add('active')
  }
}