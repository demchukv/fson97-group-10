import axios from 'axios';
import Pagination from "tui-pagination";
import 'tui-pagination/dist/tui-pagination.css';
import { getLoader, showAlert } from './common';

const refs = {
  gallery: document.querySelector('.gallery'),
  buttons: document.querySelector('.exercises-btns-div'),
  pagination: document.getElementById('pagination'),
  musclesBtn: document.querySelector('[data-filter="muscles"]'),
  bodypartsBtn: document.querySelector('[data-filter="bodypart"]'),
  equipBtn: document.querySelector('[data-filter="equipment"]'),
};
let redrawPagination = true;
axios.defaults.baseURL = 'https://energyflow.b.goit.study/api';

const params = {
  perPage: 12,
  page: 1,
  filter: 'Muscles',
  totalPages: 1,
  totalItems: 0,
}

async function getData() {
  refs.gallery.innerHTML = "";
  getLoader();
  const data = await axios.get('/filters', {
    params: {
      filter: params.filter,
      page: params.page,
      limit: params.perPage,
    },
  });
  return data.data;
}

function createMarkup(results) {
  const markup = results
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

function handleSearch() {
  getData()
    .then(data => {
      const { results, totalPages, page } = data;
      createMarkup(results);
      if(redrawPagination){
        params.totalPages = totalPages;
        params.totalItems = totalPages * params.perPage;
        makeCardsPagination();
      }
    })
    .catch(error => {
      getLoader('hide');
      showAlert(error.message, 'ERROR');
    });
}

handleSearch();
refs.musclesBtn.classList.add('active');
refs.musclesBtn.disabled = true;

refs.buttons.addEventListener("click", (event) => {
  selected(event);
  const targetMenu = event.target;
  params.page = 1;
  redrawPagination = true;

  if (targetMenu === event.currentTarget) {
    return
  } else if (targetMenu === refs.musclesBtn) {
    refs.musclesBtn.disabled = true;
    refs.bodypartsBtn.disabled = false;
    refs.equipBtn.disabled = false;
    params.filter = 'Muscles'
  } else if (targetMenu === refs.bodypartsBtn) {
    refs.musclesBtn.disabled = false;
    refs.bodypartsBtn.disabled = true;
    refs.equipBtn.disabled = false;
    params.filter = 'Body parts'
  } else if (targetMenu === refs.equipBtn) {
    refs.musclesBtn.disabled = false;
    refs.bodypartsBtn.disabled = false;
    refs.equipBtn.disabled = true;
    params.filter = 'Equipment'
  }
  handleSearch();

  scrollToFilters();
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
    prevButton.classList.add('active');
  }
}

function makeCardsPagination(){
  redrawPagination = false;
  if(params.totalItems > params.perPage){
      const pagination = new Pagination('pagination', {
          totalItems : params.totalItems,
          itemsPerPage: params.perPage,
          visiblePages: 3
      });
      pagination.on('afterMove', function(eventData) {
          params.page = eventData.page;
          handleSearch();
          scrollToFilters()
      });
  }else{
      const paginationContainer = document.querySelector("#pagination");
      paginationContainer.innerHTML = '';
  }
}

function scrollToFilters(){
  const rect = refs.buttons.getBoundingClientRect();
  window.scrollBy({
    top: rect.y + rect.height,
    left: 0,
    behavior: "smooth",
  });
}