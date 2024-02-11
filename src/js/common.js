import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

/**
 * 
 * @param {*} msg - Текст повідомлення для відвідувача сайту
 * @param {*} type - Тип повідомлення: OK - успіх (зелений фон), ERROR - помилка (червоний фон), info - інформування (синій фон)
 */
export function showAlert( msg, type = "info" ) {
    if (type === "OK") {
        iziToast.success({
            position: 'topCenter',
            message: msg,
        });
    }else if(type === "ERROR"){
        iziToast.error({
            position: 'topCenter',
            message: msg,
        });
    } else {
        iziToast.info({
            position: 'topCenter',
            message: msg,
        });
    }
}

/**
 * 
 * @param {*} act - show and hide - показати і сховати лоадер
 */
export function getLoader( act = 'show' ){
    const loader = document.querySelector(".loader");
    const overlayRating = document.querySelector('.overlay-rating');
    if(act === 'show'){
        loader.style.display = 'inline-block';
        overlayRating.style.display = "block";
    }else{
        loader.style.display = 'none';
        overlayRating.style.display = "none";
    }
}
/**
 * Встановлює висоту контейнера на момент завантаження нового контенту для запобігання різким ривкам
 * @param {*} selector 
 * @param {*} action - set and unset
 */
export function preserveBlockHeight(selector, action){
    const block = document.querySelector(selector);
    const rect = block.getBoundingClientRect();
    if(rect.height > 100 && action === 'set'){
        block.setAttribute('style', 'height:' + rect.height + 'px');
        block.style.height = rect.height+'px';
    }
    if(action === 'unset'){
        block.removeAttribute('style');
        block.style.height = 'auto';
    }
  }