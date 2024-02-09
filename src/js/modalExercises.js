import axios from 'axios';
import { getLoader } from './common';

const gallery = document.querySelector('.gallery');
const backdrop = document.querySelector('.backdrop');
const modalCard = document.querySelector('.modal');

gallery.addEventListener('click', onClickExercisesCard);

async function onClickExercisesCard(event) {
  if (event.target === event.curentTarget) {
    return;
  }
  const element = event.target.closest('.exercise-item');
  if (element === null) {
    return;
  }
  getLoader();
  const elementId = element.dataset.id;
  const exercisesInfo = await getExercisesCardInfo(elementId);

  backdrop.classList.remove('visually-hidden');

  modalCard.innerHTML = '';
  const modalExercisesMarkup = createMarkupExercisesCard(exercisesInfo);
  modalCard.innerHTML = modalExercisesMarkup;

  getLoader('none');
  modalCard.classList.remove('visually-hidden');

  const closeBtn = document.querySelector('.close-modal-btn');
  closeBtn.addEventListener('click', onClick);
  backdrop.addEventListener('click', backdropOnClick);
  document.addEventListener('keydown', onEscape);
}

function onClick() {
  modalCard.classList.add('visually-hidden');
  backdrop.classList.add('visually-hidden');
  modalCard.innerHTML = '';
  document.removeEventListener('keydown', onEscape);
}

function backdropOnClick(event) {
  if (event.target.closest('.modal')) {
    return;
  }

  modalCard.classList.add('visually-hidden');
  backdrop.classList.add('visually-hidden');
  modalCard.innerHTML = '';
  document.removeEventListener('keydown', onEscape);
}

function onEscape(event) {
  event.preventDefault();
  if (event.key === 'Escape') {
    modalCard.classList.add('visually-hidden');
    backdrop.classList.add('visually-hidden');
    modalCard.innerHTML = '';
    document.removeEventListener('keydown', onEscape);
  }
}

async function getExercisesCardInfo(id) {
  try {
    const BASE_URL = 'https://energyflow.b.goit.study/api';
    const ENDPOINT = 'exercises';
    const { data } = await axios.get(`${BASE_URL}/${ENDPOINT}/${id}`);
    return data;
  } catch (err) {
    console.error(err);
  }
}

function createMarkupExercisesCard({
  _id,
  bodyPart,
  equipment,
  gifUrl,
  name,
  target,
  description,
  rating,
  burnedCalories,
  time,
  popularity,
}) {
  //перевірити чи він наявний localStorage

  return `    <div class="modal-description-container">
      <button class="close-modal-btn">
        <svg class="close-modal-icon" width="24" height="24">
          <use href="./img/icons.svg#icon-cross"></use>
        </svg>
      </button>
      <img
        class="modal-gif"
        src="${gifUrl}"
        alt="${name}"
        width="295"
        height="258"
      />

      <h4 class="modal-title">${name}</h4>
      <div class="rating-container">
        <p class="modal-exercises-rating">${rating}</p>
        <svg class="star" width="18" height="18">
          <use href="./img/icons.svg#icon-star"></use>
        </svg>
      </div>
      <ul class="description-list">
        <li class="description-item">
          <p>Target</p>
          <span>${target}</span>
        </li>
        <li class="description-item">
          <p>Body Part</p>
          <span>${bodyPart}</span>
        </li>
        <li class="description-item">
          <p>Equipment</p>
          <span>${equipment}</span>
        </li>
        <li class="description-item">
          <p>Popular</p>
          <span>${popularity}</span>
        </li>
        <li class="description-item">
          <p>Burned Calories</p>
          <span>${burnedCalories}/${time} min</span>
        </li>
      </ul>
      <p class="modal-description-text">${description}</p>
    </div>
    <div class="modal-buttons-container">
      <button data-id="${_id}" class="add-favorite-btn">Add to favorite</button>
      <button data-id="${_id}" class="give-rating-btn">Give a rating</button>
    </div>
  </div>`;
}
