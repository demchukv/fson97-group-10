import axios from "axios";

const refs = {
gallery: document.querySelector('.gallery'),
musclesBtn: document.querySelector('.muscles'),
bodyPartsBtn: document.querySelector('.body-parts'),
equipBtn: document.querySelector('.equipment'),
};

refs.musclesBtn.addEventListener('click', handleMuscleSearch);
refs.bodyPartsBtn.addEventListener('click', handleBodyPartsSearch);
refs.equipBtn.addEventListener('click', handleEquipSearch);

axios.defaults.baseURL = 'https://energyflow.b.goit.study/api';

async function getData() {
    const { data } = await axios.get("/filters", {
        params: {
            filter: 'Muscles',
            page: 1,
            perPage: 12,
        }
    });
    return data
}

getData()

async function handleMuscleSearch() {

}

async function handleBodyPartsSearch() {

}

async function handleEquipSearch() {

}

async function handleExerciseSearch() {

}

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
                <li>${name}</li>
                <li>${filter}</li>
            </ul>
        </a>
    </li>`
    )
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);
}