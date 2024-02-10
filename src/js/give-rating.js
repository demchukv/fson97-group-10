let giveRatingBtn;
const modalRating = document.querySelector('.modal-rating');
const closeRatingBtn = document.querySelector('.close-modal-rating-btn');
/*https://energyflow.b.goit.study/api/exercises/64f389465ae26083f39b18ef/rating*/

/**
 * Встановлюємо прослуховувач кліку по кнопці "Give rating"
 */
export function addGiveRatingListener(){
    giveRatingBtn = document.querySelector(".give-rating-btn");
    giveRatingBtn.addEventListener('click', handleGiveRatingClick);
    closeRatingBtn.addEventListener('click', closeRatingModal);
}

/**
 * Знімаємо прослуховувач кліку по кнопці "Give rating"
 */
export function removeGiveRatingListener(){
    giveRatingBtn.removeEventListener('click', handleGiveRatingClick);    
    closeRatingBtn.removeEventListener('click', closeRatingModal);
}

/**
 * Обробляємо клік по кнопці: 
 * відкриваємо модальне вікно для рейтингу, 
 * ховаємо вікно з інформацією про вправу
 * @param {*} event 
 */
function handleGiveRatingClick(event){
    event.preventDefault();
    const id = event.target.dataset.id;
    hideExercisesModal();
    openGiveRatingModal(id);
}

/**
 * Відкриваємо модальне вікно з формою рейтингу
 * @param {*} id - айді вправи, яку оцінюють
 */
function openGiveRatingModal(id){
    modalRating.classList.remove('visually-hidden');
}

/**
 * Закриваємо модальне вікно з формою рейтингу
 * і відновлюємо модальне вікно з інформацією про вправу
 */
function closeRatingModal(){
    modalRating.classList.add('visually-hidden');
    restoreExercisesModal();
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