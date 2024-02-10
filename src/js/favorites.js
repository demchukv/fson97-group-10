const data = [
  {
    _id: '64f389465ae26083f39b17a2',
    bodyPart: 'waist',
    equipment: 'body weight',
    gifUrl: 'https://ftp.goit.study/img/power-pulse/gifs/0001.gif',
    name: '3/4 sit-up',
    target: 'abs',
    description:
      "This refers to your core muscles, which include the rectus abdominis, obliques, and transverse abdominis. They're essential for maintaining posture, stability, and generating force in many movements. Exercises that target the abs include crunches, leg raises, and planks.",
    rating: 3.39,
    burnedCalories: 220,
    time: 3,
    popularity: 9804,
  },
  {
    _id: '64f389465ae26083f39b17a5',
    bodyPart: 'waist',
    equipment: 'body weight',
    gifUrl: 'https://ftp.goit.study/img/power-pulse/gifs/0006.gif',
    name: 'alternate heel touchers',
    target: 'abs',
    description:
      "This refers to your core muscles, which include the rectus abdominis, obliques, and transverse abdominis. They're essential for maintaining posture, stability, and generating force in many movements. Exercises that target the abs include crunches, leg raises, and planks.",
    rating: 4.09,
    burnedCalories: 116,
    time: 3,
    popularity: 7686,
  },
  {
    _id: '64f389465ae26083f39b1886',
    bodyPart: 'waist',
    equipment: 'body weight',
    gifUrl: 'https://ftp.goit.study/img/power-pulse/gifs/0274.gif',
    name: 'crunch floor',
    target: 'abs',
    description:
      "This refers to your core muscles, which include the rectus abdominis, obliques, and transverse abdominis. They're essential for maintaining posture, stability, and generating force in many movements. Exercises that target the abs include crunches, leg raises, and planks.",
    rating: 3.13,
    burnedCalories: 210,
    time: 3,
    popularity: 218,
  },
  {
    _id: '64f389465ae26083f39b1888',
    bodyPart: 'waist',
    equipment: 'body weight',
    gifUrl: 'https://ftp.goit.study/img/power-pulse/gifs/0277.gif',
    name: 'decline crunch',
    target: 'abs',
    description:
      "This refers to your core muscles, which include the rectus abdominis, obliques, and transverse abdominis. They're essential for maintaining posture, stability, and generating force in many movements. Exercises that target the abs include crunches, leg raises, and planks.",
    rating: 2.76,
    burnedCalories: 336,
    time: 3,
    popularity: 188,
  },
  {
    _id: '64f389465ae26083f39b181e',
    bodyPart: 'waist',
    equipment: 'body weight',
    gifUrl: 'https://ftp.goit.study/img/power-pulse/gifs/0138.gif',
    name: 'bottoms-up',
    target: 'abs',
    description:
      "This refers to your core muscles, which include the rectus abdominis, obliques, and transverse abdominis. They're essential for maintaining posture, stability, and generating force in many movements. Exercises that target the abs include crunches, leg raises, and planks.",
    rating: 2.83,
    burnedCalories: 234,
    time: 3,
    popularity: 236,
  },
  {
    _id: '64f389465ae26083f39b1a12',
    bodyPart: 'waist',
    equipment: 'body weight',
    gifUrl: 'https://ftp.goit.study/img/power-pulse/gifs/0807.gif',
    name: 'suspended reverse crunch',
    target: 'abs',
    description:
      "This refers to your core muscles, which include the rectus abdominis, obliques, and transverse abdominis. They're essential for maintaining posture, stability, and generating force in many movements. Exercises that target the abs include crunches, leg raises, and planks.",
    rating: 3.5,
    burnedCalories: 263,
    time: 3,
    popularity: 211,
  },
  {
    _id: '64f389465ae26083f39b1935',
    bodyPart: 'waist',
    equipment: 'body weight',
    gifUrl: 'https://ftp.goit.study/img/power-pulse/gifs/0464.gif',
    name: 'front plank with twist',
    target: 'abs',
    description:
      "This refers to your core muscles, which include the rectus abdominis, obliques, and transverse abdominis. They're essential for maintaining posture, stability, and generating force in many movements. Exercises that target the abs include crunches, leg raises, and planks.",
    rating: 4,
    burnedCalories: 174,
    time: 3,
    popularity: 131,
  },
  {
    _id: '64f389465ae26083f39b193d',
    bodyPart: 'waist',
    equipment: 'body weight',
    gifUrl: 'https://ftp.goit.study/img/power-pulse/gifs/0475.gif',
    name: 'hanging straight leg raise',
    target: 'abs',
    description:
      "This refers to your core muscles, which include the rectus abdominis, obliques, and transverse abdominis. They're essential for maintaining posture, stability, and generating force in many movements. Exercises that target the abs include crunches, leg raises, and planks.",
    rating: 3,
    burnedCalories: 342,
    time: 3,
    popularity: 2,
  },
  {
    _id: '64f389465ae26083f39b188a',
    bodyPart: 'waist',
    equipment: 'body weight',
    gifUrl: 'https://ftp.goit.study/img/power-pulse/gifs/0282.gif',
    name: 'decline sit-up',
    target: 'abs',
    description:
      "This refers to your core muscles, which include the rectus abdominis, obliques, and transverse abdominis. They're essential for maintaining posture, stability, and generating force in many movements. Exercises that target the abs include crunches, leg raises, and planks.",
    rating: 3,
    burnedCalories: 150,
    time: 3,
    popularity: 20,
  },
  {
    _id: '64f389465ae26083f39b1937',
    bodyPart: 'waist',
    equipment: 'body weight',
    gifUrl: 'https://ftp.goit.study/img/power-pulse/gifs/0467.gif',
    name: 'gorilla chin',
    target: 'abs',
    description:
      "This refers to your core muscles, which include the rectus abdominis, obliques, and transverse abdominis. They're essential for maintaining posture, stability, and generating force in many movements. Exercises that target the abs include crunches, leg raises, and planks.",
    rating: 4,
    burnedCalories: 105,
    time: 3,
    popularity: 94,
  },
];
localStorage.setItem('DATA', JSON.stringify(data));
const refs = {
  favoritesContent: document.querySelector('.favorites-section'),
};

// function createMarkup(resp) {
//   return resp
//     .map(data => {
//       return `<li id=${data._id}>
//       <div>
//         <button>WORKOUT</button>
//         <button>DELETE</button>
//         <button>START</button>
//       </div>
//       <h2>${data.name}</h2>
//       <p>Burned calories:<span>${data.burnedCalories}</span></p>
//       <p>Body part:<span>${data.bodyPart}</span></p>
//       <p>Target: <span>${data.target}</span></p>
//     </li>`;
//     })
//     .join('');
// }

const getLocalStorage = localStorage.getItem('DATA');
console.log(JSON.parse(getLocalStorage));
// if (getLocalStorage) {
//   const result = JSON.parse(getLocalStorage);
//   refs.favoritesContent.innerHTML = `<ul>${createMarkup(result)}</ul>`;
// } else {
//   console.log('hello');
//   //   ul.insertAdjacentHTML('beforeend', '<li>hello</li>');
// }

// function createMarkup(data) {
//   return data
//     .map(
//       i =>
//         `<li class="exercise-item" data-id="${i._id}">
//       <p class="ex-item-head">
//       <span class="ex-item-head-group">
//       <span class="ex-item-workout">WORKOUT</span>
//       <h3 class="ex-item-name">${
//         i.name.charAt(0).toUpperCase() + i.name.slice(1)
//       }</h3>
//       </span>
//       <p class="ex-item-info">
//       <span class="ex-info-group"><span class="ex-item-desc">Burned calories:</span> <span class="ex-item-value">${
//         i.burnedCalories
//       } / ${i.time} min</span></span>
//       <span class="ex-info-group"><span class="ex-item-desc">Body part:</span> <span class="ex-item-value">${
//         i.bodyPart.charAt(0).toUpperCase() + i.bodyPart.slice(1)
//       }</span></span>
//       <span class="ex-info-group"><span class="ex-item-desc">Target:</span> <span class="ex-item-value">${
//         i.target.charAt(0).toUpperCase() + i.target.slice(1)
//       }</span></span>
//       </p>
//       </li>`
//     )
//     .join('');

//   //   galleryObj.innerHTML = markup;

//   //   const rect = filterBtns.getBoundingClientRect();
//   //   window.scrollBy({
//   //     top: rect.y + rect.height,
//   //     left: 0,
//   //     behavior: 'smooth',
//   //   });
// }
