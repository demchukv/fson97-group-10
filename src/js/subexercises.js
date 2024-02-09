import axios from "axios";
import Pagination from "tui-pagination";
import 'tui-pagination/dist/tui-pagination.css';
import {getLoader, showAlert} from "./common";

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
}

function handleCardClick(event){
    event.preventDefault();
    if(event.target.closest('ul').dataset.exercises){
        const filterBtn = document.querySelector(".exercises-button.active");
        exParams.filter = filterBtn.dataset.filter;
        exParams.filterGroup = event.target.closest('ul').dataset.exercises;
        updateExercisesList(exParams.filter, exParams.filterGroup);
    }
    return;
}

function updateExercisesList(filter, filterGroup, newPagination = true){
    galleryObj.innerHTML = '';
    loadExercisesList(filter, filterGroup)
    .then(data => {
        exParams.totalPages = data.totalPages;
        exParams.totalItems = exParams.limit * data.totalPages;
        if(data.results.length === 0){
            galleryObj.innerHTML = '<p class="ex-list-no-result">Unfortunately, <span class="accent-text">no results</span> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</p>'
        }else{
            markupExercisesList(data.results);
            if(newPagination){
                makePagination();
            }else{
                getLoader('hide');
            }
        }
        }
    )
    .catch(error => {
        getLoader('hide');
        showAlert(error.message, 'ERROR');
    });
}

async function loadExercisesList(filter, filterGroup){
    getLoader();
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

function markupExercisesList(data){
    let markup = data
    .map(i =>
      `<li class="exercise-item" data-id="${i._id}">
      <p class="ex-item-head">
      <span class="ex-item-workout">WORKOUT</span>
      <span class="ex-item-rating">${i.rating}</span>
      <span class="ex-item=start">Start</span>
      </p>
      <p class="ex-item-name">${i.name.charAt(0).toUpperCase() + i.name.slice(1)}</p>
      <p class="ex-item-info">
      <span class="ex-item-desc">Burned calories:</span> <span class="ex-item-value">${i.burnedCalories}/${i.time} min</span>
      <span class="ex-item-desc">Body part:</span> <span class="ex-item-value">${i.bodyPart.charAt(0).toUpperCase() + i.bodyPart.slice(1)}</span>
      <span class="ex-item-desc">Target:</span> <span class="ex-item-value">${i.target.charAt(0).toUpperCase() + i.target.slice(1)}</span>
      </p>
      </li>`
    )
    .join('');
    
    galleryObj.innerHTML = markup;
}

function makePagination(){
    const pagination = new Pagination('pagination', {
        totalItems : exParams.totalItems,
        itemsPerPage: exParams.limit,
        visiblePages: 3
    });
    pagination.on('afterMove', function(eventData) {
        exParams.page = eventData.page;
        updateExercisesList(exParams.filter, exParams.filterGroup, false);
    });
    getLoader('hide');
}