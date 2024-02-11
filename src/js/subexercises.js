import axios from "axios";
import Pagination from "tui-pagination";
import 'tui-pagination/dist/tui-pagination.css';
import {getLoader, showAlert, preserveBlockHeight} from "./common";
import icons from '../img/icons.svg';

const exParams = {
    page : 1,
    totalPages : 1,
    totalItems : 0,
    keyword : '',
    filter : '',
    filterGroup : '',
    limit : 12,
}

const galleryObj = document.querySelector(".gallery");
if(galleryObj){
    galleryObj.addEventListener('click', handleCardClick);
    galleryObj.classList.add('exercises-card');
}
const searchObj = document.querySelector(".search-btn");
const clearObj = document.querySelector(".search-clear-btn");
const searchInput = document.querySelector(".search-input");
const filterBtns =  document.querySelector('.exercises-btns-div');
const searchFormBlock = document.querySelector(".ex-search");
const sectionHeader = document.querySelector(".exercises-header");
const pagination = document.querySelector("#pagination");
const pager = document.querySelector("#pager");
/*
pager.id = 'pager';
*/

/**
 * обробляємо клік по карточці для групи вправ
 * @param {*} event 
 * @returns 
 */
function handleCardClick(event){
    event.preventDefault();
    if(event.target.closest('ul').dataset.exercises){
            pagination.style.display = 'none';
            pager.style.display = 'block';
            searchObj.addEventListener('click', handleSearchBtnClick);
            clearObj.addEventListener('click', handleClearSearchInput);
            searchInput.addEventListener('input', handleSearchInput);
            filterBtns.addEventListener('click', handleClickOnFilterBtn);
            searchFormBlock.style.display = 'block';
        const filterBtn = document.querySelector(".exercises-button.active");
        exParams.filter = filterBtn.dataset.filter;
        exParams.filterGroup = event.target.closest('ul').dataset.exercises;
        const headContent = `Exercises / <span class="head-small">${exParams.filterGroup.charAt(0).toUpperCase() + exParams.filterGroup.slice(1)}</span>`;
        sectionHeader.innerHTML = headContent;
        updateExercisesList(exParams.filter);
    }
    return;
}

/**
 * обробляємо клік по кнопці пошуку
 * @param {*} event 
 * @returns 
 */
function handleSearchBtnClick(event){
    event.preventDefault();
    if(searchInput.value.length > 3) {
        exParams.page = 1;
        exParams.keyword = searchInput.value.trim().toLowerCase();
        updateExercisesList(exParams.filter, true);
    }
    return;
}

/**
 * Попередня обробка даних, що прийшли з бекенду
 * @param {*} filter 
 * @param {*} filterGroup 
 * @param {*} newPagination 
 */
function updateExercisesList(filter, newPagination = true){
    preserveBlockHeight('.gallery', 'set');
    galleryObj.innerHTML = '';
    loadExercisesList(filter)
    .then(data => {
        exParams.totalPages = data.totalPages;
        exParams.totalItems = exParams.limit * data.totalPages;
        if(data.results.length === 0){
            galleryObj.innerHTML = '<p class="ex-list-no-result">Unfortunately, <span class="accent-text">no results</span> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</p>'
            makePagination();
        }else{
            markupExercisesList(data.results);
            preserveBlockHeight('.gallery', 'unset');
            if(newPagination){
                makePagination();
            }
        }
        getLoader('hide');
        }
    )
    .catch(error => {
        getLoader('hide');
        showAlert(error.message, 'ERROR');
    });
}

/**
 * Відправляємо пощуковий запит на бекенд. Повертає масив даних
 * @param {*} filter 
 * @returns 
 */
async function loadExercisesList(filter){
    getLoader();
    if(searchInput.value.length > 3) {
        exParams.keyword = searchInput.value.trim().toLowerCase();
    }else{
        exParams.keyword = '';  
    }
    const data = await axios.get('/exercises', {
        params: {
          [filter] : exParams.filterGroup,
          keyword : exParams.keyword,
          page : exParams.page,
          limit : exParams.limit,
        },
      });
  return data.data;
}

/**
 * Створюємо html-розмітку на основі отиманих даних
 * @param {*} data 
 */
function markupExercisesList(data){
    let markup = data
    .map(i =>
      `<li class="exercise-item" data-id="${i._id}">
      <p class="ex-item-head">
      <span class="ex-item-head-group">
      <span class="ex-item-workout">WORKOUT</span>
      <span class="ex-rating-group">
      <span class="ex-item-rating">${Number(i.rating).toFixed(1)}</span>
      <svg class="ex-star-icon" width="18" height="18"><use href="${icons}#icon-star"></use></svg>
      </span>
      </span>
      <a class="ex-item-start" href="#" data-id="${i._id}"><span>Start</span> <svg class="ex-arrow-icon" width="14" height="14"><use href="${icons}#icon-arrow-start"></use></svg></a>
      </p>
      <span class="ex-title">
      <span class="ex-run-men"><svg class="ex-icon-run" width="14" height="14"><use href="${icons}#icon-running_man"></use></svg></span>
      <h3 class="ex-item-name">${i.name.charAt(0).toUpperCase() + i.name.slice(1)}</h3>
      </span>
      <p class="ex-item-info">
      <span class="ex-info-group"><span class="ex-item-desc">Burned calories:</span> <span class="ex-item-value">${i.burnedCalories} / ${i.time} min</span></span>
      <span class="ex-info-group"><span class="ex-item-desc">Body part:</span> <span class="ex-item-value">${i.bodyPart.charAt(0).toUpperCase() + i.bodyPart.slice(1)}</span></span>
      <span class="ex-info-group"><span class="ex-item-desc">Target:</span> <span class="ex-item-value">${i.target.charAt(0).toUpperCase() + i.target.slice(1)}</span></span>
      </p>
      </li>`
    )
    .join('');
    
    galleryObj.innerHTML = markup;

    const rect = filterBtns.getBoundingClientRect();
    window.scrollBy({
        top: rect.y + rect.height,
        left: 0,
        behavior: "smooth",
      });
}

/**
 * Створюємо блок з рагінацією
 */
function makePagination(){
    if(exParams.totalItems > exParams.limit){
        const pagination = new Pagination('pager', {
            totalItems : exParams.totalItems,
            itemsPerPage: exParams.limit,
            visiblePages: 3
        });
        pagination.on('afterMove', function(eventData) {
            exParams.page = eventData.page;
            updateExercisesList(exParams.filter, false);
        });
    }else{
        const paginationContainer = document.querySelector("#pager");
        paginationContainer.innerHTML = '';
    }
    getLoader('hide');
}

/**
 * Очищаємо поле пошуку при натисканні на кнопку
 */
function handleClearSearchInput(){
    searchInput.value = '';
    clearObj.style.visibility = 'hidden';
    exParams.page = 1;
    updateExercisesList(exParams.filter, exParams.filterGroup);
}

/**
 * Обробка пошукового тексту в полі пошуку
 */
function handleSearchInput(){
    if(searchInput.value.length > 0){
        clearObj.style.visibility = 'visible';
    }else{
        clearObj.style.visibility = 'hidden';
    }
}

/**
 * Обробляємо клік по одній з трьох кнопок. Видаляємо слухачі подій. Очищаємо поле пошуку.
 * @param {*} event 
 */
function handleClickOnFilterBtn(event){
    if(event.target.tagName === "BUTTON"){
        searchInput.value = '';
        searchFormBlock.style.display = 'none';
        galleryObj.innerHTML = '';
        galleryObj.classList.remove('exercises-card');
        searchObj.removeEventListener('click', handleSearchBtnClick);
        clearObj.removeEventListener('click', handleClearSearchInput);
        searchInput.removeEventListener('input', handleSearchInput);
        filterBtns.removeEventListener('click', handleClickOnFilterBtn);
        pager.style.display = 'none';
        pagination.style.display = 'block';
        exParams.page = 1;
        sectionHeader.innerHTML = 'Exercises';
    }
}