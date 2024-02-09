import axios from 'axios';

const refs = {
  gallery: document.querySelector('.gallery'),
  buttons: document.querySelector('.exercises-btns-div'),
  musclesBtn: document.querySelector('[data-filter="muscles"]'),
  bodypartsBtn: document.querySelector('[data-filter="bodyparts"]'),
  equipBtn: document.querySelector('[data-filter="equipment"]'),
};

axios.defaults.baseURL = 'https://energyflow.b.goit.study/api';
const perPage = 12;
let page = 1;
let filter = 'Muscles';

async function getData() {
  const data = await axios.get('/filters', {
    params: {
      filter,
      page,
      limit: perPage,
    },
  });
  return data;
}

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

  refs.gallery.innerHTML = markup;
}

function handleSearch(){
  getData().then(
    ({ data: { results } }) => createMarkup(results),
  );
}

handleSearch()
refs.musclesBtn.classList.add('active');

refs.buttons.addEventListener("click", (event) => {
  selected(event)
  const targetMenu = event.target;

  if (targetMenu === event.currentTarget) {
    return
  } else if (targetMenu === refs.musclesBtn) {
    filter = 'Muscles'
    handleSearch()
    return
  } else if (targetMenu === refs.bodypartsBtn){
    filter = 'Body parts'
    handleSearch()
    return
  } else if (targetMenu === refs.equipBtn) {
    filter = 'Equipment'
    handleSearch()
    return
  }
})

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
