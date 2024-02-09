import axios from 'axios';
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import { getLoader, showAlert } from './common';

const refs = {
  gallery: document.querySelector('.gallery'),
  buttons: document.querySelector('.exercises-btns-div'),
  musclesBtn: document.querySelector('[data-filter="muscles"]'),
  bodypartsBtn: document.querySelector('[data-filter="bodypart"]'),
  equipBtn: document.querySelector('[data-filter="equipment"]'),
};

axios.defaults.baseURL = 'https://energyflow.b.goit.study/api';

const params = {
  perPage: 12,
  page: 1,
  filter: 'Muscles',
}

async function getData() {
  getLoader();
  const data = await axios.get('/filters', {
    params: {
      filter: params.filter,
      page: params.page,
      limit: params.perPage,
    },
  });
  return data;
}

function createMarkup(arr) {
  refs.gallery.innerHTML = "";
  const markup = arr
    .map(
      ({ name, filter, imgUrl }) => `<li class="gallery-item">
        <a href="">
        <img class="gallery-image" src="${imgUrl}" alt="Galllery Image">
            <ul class="gallery-item-description" data-exercises="${name}">
                <li class="name">${name}</li>
                <li class="filter">${filter}</li>
            </ul>
        </a>
    </li>`
    )
    .join('');

  refs.gallery.innerHTML = markup;
  getLoader('hide');
}

function handleSearch(){
  getData()
    .then(({ data: { results } }) => createMarkup(results))
    .catch(error => {
      getLoader('hide');
      showAlert(error.message, 'ERROR');
    });
}

handleSearch()
refs.musclesBtn.classList.add('active');

refs.buttons.addEventListener("click", (event) => {
  selected(event)
  const targetMenu = event.target;

  if (targetMenu === event.currentTarget) {
    return
  } else if (targetMenu === refs.musclesBtn) {
    params.filter = 'Muscles'
  } else if (targetMenu === refs.bodypartsBtn) {
    params.filter = 'Body parts'
  } else if (targetMenu === refs.equipBtn) {
    params.filter = 'Equipment'
  }
  handleSearch()
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
