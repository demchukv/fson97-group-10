import axios from 'axios';
import icons from '../img/icons.svg';
import { getLoader } from './common';
import { addGiveRatingListener, removeGiveRatingListener } from './give-rating';

const gallery = document.querySelector('.gallery');
const backdrop = document.querySelector('.backdrop');
const modalCard = document.querySelector('.modal');

gallery.addEventListener('click', onClickExercisesCard);

async function onClickExercisesCard(event) {
  if (event.target === event.curentTarget) {
    return;
  }
  const element = event.target.closest('.ex-item-start');
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

  addGiveRatingListener();

  getLoader('none');
  modalCard.classList.remove('visually-hidden');

  const addToFavoriteBtn = document.querySelector('.add-favorite-btn');
  addToFavoriteBtn.addEventListener('click', addToFavoriteOnClick);

  const closeBtn = document.querySelector('.close-modal-btn');
  closeBtn.addEventListener('click', onClick);
  backdrop.addEventListener('click', backdropOnClick);
  document.addEventListener('keydown', onEscape);
}

async function addToFavoriteOnClick(event) {
  const element = event.target.closest('.add-favorite-btn');
  const elementId = element.dataset.id;
  const favorites = localStorage.getItem('favorites');

  if (favorites) {
    const favoriteList = JSON.parse(favorites);
    const condition = favoriteList.some(({ _id }) => _id === elementId);

    if (condition) {
      localStorage.setItem(
        'favorites',
        JSON.stringify(favoriteList.filter(({ _id }) => _id !== elementId))
      );
      element.innerHTML = addInnerHTML();
    } else {
      const exercisesCardInfo = await getExercisesCardInfo(elementId);
      localStorage.setItem(
        'favorites',
        JSON.stringify([...favoriteList, exercisesCardInfo])
      );
      element.innerHTML = addInnerHTML('remove');
    }
  } else {
    const exercisesCardInfo = await getExercisesCardInfo(elementId);
    localStorage.setItem('favorites', JSON.stringify([exercisesCardInfo]));
    element.innerHTML = addInnerHTML('remove');
  }
}

function onClick() {
  modalCard.classList.add('visually-hidden');
  backdrop.classList.add('visually-hidden');
  modalCard.innerHTML = '';
  document.removeEventListener('keydown', onEscape);

  removeGiveRatingListener();

  closeBtn.removeEventListener('click', onClick);
  backdrop.removeEventListener('click', backdropOnClick);
}

function backdropOnClick(event) {
  if (event.target.closest('.modal')) {
    return;
  }

  modalCard.classList.add('visually-hidden');
  backdrop.classList.add('visually-hidden');
  modalCard.innerHTML = '';
  document.removeEventListener('keydown', onEscape);

  removeGiveRatingListener();

  closeBtn.removeEventListener('click', onClick);
  backdrop.removeEventListener('click', backdropOnClick);
}

export function onEscape(event) {
  event.preventDefault();
  if (event.key === 'Escape') {
    modalCard.classList.add('visually-hidden');
    backdrop.classList.add('visually-hidden');
    modalCard.innerHTML = '';
    document.removeEventListener('keydown', onEscape);

    removeGiveRatingListener();

    closeBtn.removeEventListener('click', onClick);
    backdrop.removeEventListener('click', backdropOnClick);
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

function addInnerHTML(value = 'add') {
  if (value === 'add') {
    return `Add to favorites
        <svg class="icon-heart" width="18" height="18">
          <use href="${icons}#icon-heart"></use>
        </svg>`;
  } else {
    return `Remove from
        <svg class="icon-heart" width="18" height="18">
          <use href="${icons}#icon-heart"></use>
        </svg>`;
  }
}

function spanToCapitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
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
  let isAdded = false;
  const favorites = localStorage.getItem('favorites');

  if (favorites) {
    const favoriteList = JSON.parse(favorites);
    isAdded = favoriteList.some(item => item._id === _id);
  }

  return `<div class="modal-description-container">
      <button class="close-modal-btn">
        <svg class="close-modal-icon" width="24" height="24">
          <use href="${icons}#icon-cross"></use>
        </svg>
      </button>
      <img
        class="modal-gif"
        src="${gifUrl}"
        alt="${name}"
        width="295"
        height="258"
      />
      <div class="text-container">
        <h4 class="modal-title">${name}</h4>
        <div class="rating-container">
          <p class="modal-exercises-rating">${rating}</p>
          <svg class="star" width="18" height="18">
            <use href="${icons}#icon-star"></use>
          </svg>
        </div>
        <ul class="description-list">
          <li class="description-item">
            <p>Target</p>
            <span>${spanToCapitalize(target)}</span>
          </li>
          <li class="description-item">
            <p>Body Part</p>
            <span>${spanToCapitalize(bodyPart)}</span>
          </li>
          <li class="description-item">
            <p>Equipment</p>
            <span>${spanToCapitalize(equipment)}</span>
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
        <div class="modal-buttons-container">
          <button data-id="${_id}" class="add-favorite-btn">
            ${isAdded ? 'Remove from' : 'Add to favorites'}
            <svg class="icon-heart" width="18" height="18">
              <use href="${icons}#icon-heart"></use>
            </svg>
          </button>
          <button data-id="${_id}" class="give-rating-btn">
            Give a rating
          </button>
        </div>
      </div>
    </div>`;
}
