import{i as o}from"./assets/scroll-up-ada418b2.js";import"./assets/vendor-ecc6328a.js";const p={favoritesContent:document.querySelector(".favorites-card-content")},e="favorites";let t=null;try{let s=localStorage.getItem(e),a=JSON.parse(s);p.favoritesContent.innerHTML=`<ul class="favorites-group">${d(a)}</ul>`,t=document.querySelectorAll(".favorites-delete")}catch(s){console.log(s)}t&&t.forEach(s=>{s.addEventListener("click",a=>{let i=localStorage.getItem(e),n=JSON.parse(i);const r=a.target.closest(".favorites-item"),c=r.dataset.id;localStorage.setItem(e,JSON.stringify(n.filter(({_id:l})=>l!==c))),document.querySelector(".favorites-group").removeChild(r)})});function d(s){return s.map(a=>`
        <li class="favorites-item" data-id="${a._id}">
           <p class="favorites-item-head">
              <span class="favorites-item-head-wrapper">
                <span class="favorites-item-workout">WORKOUT</span>
                  <button class="favorites-delete">
                    <svg class="delete-icon" width="12" height="13">
                      <use href="./img/icons.svg#icon-trash"></use>
                    </svg>
                  </button>
                  <a class="ex-item-start" href="#" data-id="${a._id}">
                    <span>Start</span>
                     <svg class="favorites-arrow-icon" width="14" height="14">
                      <use href="${o}#icon-arrow-start"></use>
                    </svg>
                  </a>
             </p>
              <span class="favorites-card-title">
                <span class="favorites-run-men"><svg class="ex-icon-run" width="14" height="14">
                  <use href="${o}#icon-running_man"></use>
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
