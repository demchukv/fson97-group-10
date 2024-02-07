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
    if(act === 'show'){
        loader.style.display = 'inline-block';
    }else{
        loader.style.display = 'none';
    }
}