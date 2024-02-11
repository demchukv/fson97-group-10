import{i as s}from"./assets/scroll-up-1c695d03.js";import"./assets/vendor-ecc6328a.js";const p={favoritesContent:document.querySelector(".favorites-card-content")},t="favorites";let r=null;try{let e=localStorage.getItem(t),a=JSON.parse(e);p.favoritesContent.innerHTML=`<ul class="favorites-group">${d(a)}</ul>`,r=document.querySelectorAll(".favorites-delete")}catch(e){console.log(e)}r&&r.forEach(e=>{e.addEventListener("click",a=>{let i=localStorage.getItem(t),n=JSON.parse(i);const o=a.target.closest(".favorites-item"),c=o.dataset.id;localStorage.setItem(t,JSON.stringify(n.filter(({_id:l})=>l!==c))),document.querySelector(".favorites-group").removeChild(o)})});function d(e){return e.map(a=>`
        <li class="favorites-item" data-id="${a._id}">
           <p class="favorites-item-head">
              <span class="favorites-item-head-wrapper">
                <span class="favorites-item-workout">WORKOUT</span>
                  <button class="favorites-delete">
                    <svg class="delete-icon" width="12" height="13">
                      <use href="${s}#icon-trash"></use>
                    </svg>
                  </button>
                  <a class="ex-item-start" href="#" data-id="${a._id}">
                    <span>Start</span>
                     <svg class="favorites-arrow-icon" width="14" height="14">
                      <use href="${s}#icon-arrow-start"></use>
                    </svg>
                  </a>
             </p>
              <span class="favorites-card-title">
                <span class="favorites-run-men"><svg class="ex-icon-run" width="14" height="14">
                  <use href="${s}#icon-running_man"></use>
                </svg>
              </span>
            <h3 class="favorites-item-name">${a.name.charAt(0).toUpperCase()+a.name.slice(1)}</h3>
            </span>
            </span>
            <p class="favorites-item-info">
             <span class="ex-info-group"><span class="favorites-item-desc">Burned calories:</span> <span
                class="favorites-item-value">${a.burnedCalories} / ${a.time} min</span>
        </span>
        <span class="favorites-info-group"><span class="favorites-item-desc">Body part:</span> <span
                class="favorites-item-value">${a.bodyPart.charAt(0).toUpperCase()+a.bodyPart.slice(1)}</span>
        </span>
        <span class="favorites-info-group"><span class="favorites-item-desc">Target:</span> <span
                class="favorites-item-value">${a.target.charAt(0).toUpperCase()+a.target.slice(1)}</span>
        </span>
    </p>
</li>
        `).join("")}
//# sourceMappingURL=commonHelpers.js.map
