import{i as r}from"./assets/scroll-up-c52a9197.js";import"./assets/vendor-e8675f53.js";const t={favoritesContent:document.querySelector(".favorites-card-content")},a="favorites";let o=null;const i=` <div class="favorites-content">
<img
  srcset="./public/favorites.png 1x, ./public/favorites.2x.png 2x"
  src="./public/favorites.png"
  alt="Image favorites"
  width="85"
  height="52"
/>

<p class="favorites-text">
  It appears that you haven't added any exercises to your favorites yet.
  To get started, you can add exercises that you like to your favorites
  for easier access in the future.
</p>
</div>`;try{if(localStorage.getItem(a)){const s=JSON.parse(localStorage.getItem(a));Array.isArray(s)&&s.length===0?(console.log(""),t.favoritesContent.innerHTML=i):t.favoritesContent.innerHTML=`<ul class="favorites-group">${v(s)}</ul> 

    `,o=document.querySelectorAll(".favorites-delete")}else t.favoritesContent.innerHTML=i}catch(s){console.log(s)}o&&o.forEach(s=>{s.addEventListener("click",e=>{let l=localStorage.getItem(a),p=JSON.parse(l);const n=e.target.closest(".favorites-item"),f=n.dataset.id;localStorage.setItem(a,JSON.stringify(p.filter(({_id:d})=>d!==f)));const c=document.querySelector(".favorites-group");c.removeChild(n),c.children.length===0&&(t.favoritesContent.innerHTML=i)})});function v(s){return s.map(e=>`
        <li class="favorites-item" data-id="${e._id}" id="card-${e._id}">
           <p class="favorites-item-head">
              <span class="favorites-item-head-wrapper">
                <span class="favorites-item-workout">WORKOUT</span>
                  <button class="favorites-delete">
                    <svg class="delete-icon" width="12" height="13">
                      <use href="${r}#icon-trash"></use>
                    </svg>
                  </button>
                  <a class="ex-item-start" href="" data-id="${e._id}">
                    <span>Start</span>
                     <svg class="favorites-arrow-icon" width="14" height="14">
                      <use href="${r}#icon-arrow-start"></use>
                    </svg>
                  </a>
             </p>
              <span class="favorites-card-title">
                <span class="favorites-run-men"><svg class="ex-icon-run" width="14" height="14">
                  <use href="${r}#icon-running_man"></use>
                </svg>
              </span>
            <h3 class="favorites-item-name">${e.name.charAt(0).toUpperCase()+e.name.slice(1)}</h3>
            </span>
            </span>
            <p class="favorites-item-info">
             <span class="ex-info-group"><span class="favorites-item-desc">Burned calories:</span> <span
                class="favorites-item-value">${e.burnedCalories} / ${e.time} min</span>
        </span>
        <span class="favorites-info-group"><span class="favorites-item-desc">Body part:</span> <span
                class="favorites-item-value">${e.bodyPart.charAt(0).toUpperCase()+e.bodyPart.slice(1)}</span>
        </span>
        <span class="favorites-info-group"><span class="favorites-item-desc">Target:</span> <span
                class="favorites-item-value">${e.target.charAt(0).toUpperCase()+e.target.slice(1)}</span>
        </span>
    </p>
</li>
        `).join("")}
//# sourceMappingURL=commonHelpers.js.map
