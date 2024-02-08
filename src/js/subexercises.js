import axios from "axios";
/*import {filter} from "./exercises";*/

let page = 1;
const limit = 12;

const galleryObj = document.querySelector(".gallery");
if(galleryObj){
    galleryObj.addEventListener('click', handleCardClick);
}

function handleCardClick(event){
    event.preventDefault();
    if(event.target.closest('ul').dataset.exercises){
        const filterBtn = document.querySelector(".exercises-button.active");
        const filter = filterBtn.dataset.filter;
        const filterGroup = event.target.closest('ul').dataset.exercises;
        const data = loadExercisesList(filter, filterGroup);
        markupExercisesList(data.results);
        console.log(data.results);
    }
}

async function loadExercisesList(filter, filterGroup){
    const data = await axios.get('/exercises', {
        params: {
          [filter] : filterGroup,
          page,
          limit,
        },
      });
      return data;
}

function markupExercisesList(data){
    const markup = data
    .map(i =>
      `<li class="exercise-item">${i._id}</li>`
    )
    .join('');

  refs.gallery.innerHTML = markup;
}