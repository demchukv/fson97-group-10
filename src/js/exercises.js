import axios from "axios";

const refs = {
gallery: document.querySelector('.gallery'),
buttons: document.querySelector('.exercises-btns-div'),
// musclesBtn: document.querySelector('')
};

axios.defaults.baseURL = 'https://energyflow.b.goit.study/api';

async function getData() {
    const data  = await axios.get("/filters", {
        params: {
            filter: 'Muscles',
            page: 1,
            perPage: 12,
        }
    });
    return data
  }

getData().then(({data:{results}}) => createMarkup(results))




// async function handleMuscleSearch() {

// }

// async function handleBodyPartsSearch() {

// }

// async function handleEquipSearch() {

// }

// async function handleExerciseSearch() {

// }

function createMarkup(arr) {
  const markup = arr
    .map(
      ({
        name,
        filter,
        imgUrl,
      }) => `<li class="gallery-item">
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