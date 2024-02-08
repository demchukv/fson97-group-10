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
        loadExercisesList(filter, filterGroup).then(
            data => markupExercisesList(data.results)
        );
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
  return data.data;
}

function markupExercisesList(data){
    const markup = data
    .map(i =>
      `<li class="exercise-item" data-id="${i._id}">
      <span>WORKOUT</span>
      <span>${i.rating}</span>
      <span>Start</span>
      <span>${i.name.charAt(0).toUpperCase() + i.name.slice(1)}</span>
      <span>Burned calories: ${i.burnedCalories}/${i.time} min</span>
      <span>Body part: ${i.bodyPart.charAt(0).toUpperCase() + i.bodyPart.slice(1)}</span>
      <span>Target: ${i.target.charAt(0).toUpperCase() + i.target.slice(1)}</span>
      </li>`
    )
    .join('');

    galleryObj.innerHTML = markup;
}