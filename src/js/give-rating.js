import axios from "axios";
import { getLoader, showAlert } from "./common";
import { onEscape } from './modalExercises';

let giveRatingBtn;
let id;
const overlayRating = document.querySelector('.overlay-rating');
const backdrop = document.querySelector('.backdrop');
const modalRating = document.querySelector('.modal-rating');
const closeRatingBtn = document.querySelector('.close-modal-rating-btn');
const starContainer = document.querySelector('.star-container');
const sendRatingBtn = document.querySelector('.send-rating-btn');


/**
 * Встановлюємо прослуховувач кліку по кнопці "Give rating"
 */
export function addGiveRatingListener(){
    giveRatingBtn = document.querySelector(".give-rating-btn");
    giveRatingBtn.addEventListener('click', handleGiveRatingClick);
    closeRatingBtn.addEventListener('click', closeRatingModal);
    overlayRating.addEventListener('click', closeOnOverlayClick);
    starContainer.addEventListener('click', handleClickOnStar);
    sendRatingBtn.addEventListener('click', handleSendRatingBtnClick);
    /*document.addEventListener('keydown', onPushEscape);*/
    
}

/**
 * Знімаємо прослуховувач кліку по кнопці "Give rating"
 */
export function removeGiveRatingListener(){
    giveRatingBtn.removeEventListener('click', handleGiveRatingClick);    
    closeRatingBtn.removeEventListener('click', closeRatingModal);
    overlayRating.removeEventListener('click', closeOnOverlayClick);
    starContainer.removeEventListener('click', handleClickOnStar);
    sendRatingBtn.removeEventListener('click', handleSendRatingBtnClick);
    /*document.removeEventListener('keydown', onPushEscape);*/
}

/**
 * Обробляємо клік по кнопці: 
 * відкриваємо модальне вікно для рейтингу, 
 * ховаємо вікно з інформацією про вправу
 * @param {*} event 
 */
function handleGiveRatingClick(event){
    event.preventDefault();
    document.removeEventListener('keydown', onEscape);
    id = event.target.dataset.id;
    hideExercisesModal();
    openGiveRatingModal();
}

/**
 * Відкриваємо модальне вікно з формою рейтингу
 * @param {*} id - айді вправи, яку оцінюють
 */
function openGiveRatingModal(){
    modalRating.classList.remove('visually-hidden');
    overlayRating.style.display = "block";
    backdrop.style.display = 'none';
}

/**
 * 
 */
function handleClickOnStar(event){
    if(event.target.tagName === "INPUT"){
        const value = event.target.value;
        const ratingValue = document.querySelector('.rating-value');
        ratingValue.textContent = Number(value).toFixed(1);
    }
}

/**
 * Збирає і перевіряє дані форми для відправки на бекенд
 */
function handleSendRatingBtnClick(event){
    event.preventDefault();
    getLoader();
    const formData = document.querySelector('.rating-form');
    const rate = formData.elements["star"].value;
    const email =  formData.elements["email"].value.trim().toLowerCase();
    const review =  formData.elements["review"].value.trim();

    const re = /\S+@\S+\.\S+/;

    if(rate === ""){
        showAlert("Please set your estimation!", "ERROR");
        getLoader('hide');
        return;
    }
    if(email === "" || !re.test(email)){
        showAlert("Please enter your email!", "ERROR");
        getLoader('hide');
        return;
    }
    sendRatingData(rate, email, review)
    .then(function (response) {
        console.log(response);
        showAlert('Thank you! Your rating has been sent!', 'OK');
        const ratingValue = document.querySelector('.rating-value');
        ratingValue.textContent = '0.0';
    })
    .catch(function (error) {
        if (error.response.status === 409) {
            showAlert('Such email already exists!');
        }else if (error.response.status === 404){
            showAlert('Such exercise not found!');
        } else {
            showAlert(error.message, 'ERROR');
        }
    })
    .finally(() => {
        getLoader('hide');
        formData.reset();
    });
}

/**
 * Відправляємо дані на сервер
 * @param {*} rate 
 * @param {*} email 
 * @param {*} review 
 */
async function sendRatingData(rate, email, review){
       const BASE_URL = 'https://energyflow.b.goit.study/api';
       const ENDPOINT = 'exercises';
       rate = Number(rate);
       return  await axios.patch(`${BASE_URL}/${ENDPOINT}/${id}/rating/`, {rate, email, review});
}

/**
 * Закриваємо модальне вікно з формою рейтингу
 * і відновлюємо модальне вікно з інформацією про вправу
 */
function closeRatingModal(){
    modalRating.classList.add('visually-hidden');
    overlayRating.style.display = "none";
    backdrop.style.display = 'block';
    restoreExercisesModal();
    document.addEventListener('keydown', onEscape);
}

/**
 * Тимчасово приховуємо вікно з інформацією про вправу
 */
function hideExercisesModal(){
    const modalCard = document.querySelector('.modal');
    modalCard.classList.add('visually-hidden');
}

/**
 * Відновлюємо вікно з інформацією про вправу
 */
function restoreExercisesModal(){
    const modalCard = document.querySelector('.modal');
    modalCard.classList.remove('visually-hidden');
}

/**
 * Закриття модального вікна по натисканню на клавішу Esc
 * @param {*} event 
 */
function onPushEscape(event) {
    event.preventDefault();
    if (event.key === 'Escape') {
      closeRatingModal();
    }
  }
  
  /**
 * Закриття модального вікна при кліку на оверлей
 * @param {*} event 
 */
function closeOnOverlayClick(event) {
    if(event.target.classList.contains('overlay-rating')){
        closeRatingModal();
    }
}
