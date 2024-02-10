import"./assets/styles-fc0d7991.js";import{i as w,a as h,P as de}from"./assets/vendor-e8675f53.js";function l(e,t="info"){t==="OK"?w.success({position:"topCenter",message:e}):t==="ERROR"?w.error({position:"topCenter",message:e}):w.info({position:"topCenter",message:e})}function o(e="show"){const t=document.querySelector(".loader");e==="show"?t.style.display="inline-block":t.style.display="none"}const i={gallery:document.querySelector(".gallery"),buttons:document.querySelector(".exercises-btns-div"),pagination:document.getElementById("pagination"),musclesBtn:document.querySelector('[data-filter="muscles"]'),bodypartsBtn:document.querySelector('[data-filter="bodypart"]'),equipBtn:document.querySelector('[data-filter="equipment"]')};h.defaults.baseURL="https://energyflow.b.goit.study/api";const m={perPage:12,page:1,filter:"Muscles",totalPages:1,totalItems:0};async function H(){return o(),(await h.get("/filters",{params:{filter:m.filter,page:m.page,limit:m.perPage}})).data}function N(e){i.gallery.innerHTML="";const t=e.map(({name:s,filter:n,imgUrl:r})=>`<li class="gallery-item">
        <a href="">
        <img class="gallery-image" src="${r}" alt="Galllery Image">
            <ul class="gallery-item-description" data-exercises="${s}">
                <li class="name">${s}</li>
                <li class="filter">${n}</li>
            </ul>
        </a>
    </li>`).join("");i.gallery.innerHTML=t,o("hide")}function U(){m.page=1,H().then(e=>{const{results:t,totalPages:s,page:n}=e;if(N(t),s>1){const r=pe(n,s);i.pagination.innerHTML=r}else i.pagination.innerHTML=""}).catch(e=>{o("hide"),l(e.message,"ERROR")})}U();i.musclesBtn.classList.add("active");i.musclesBtn.disabled=!0;i.buttons.addEventListener("click",e=>{ue(e);const t=e.target;t!==e.currentTarget&&(t===i.musclesBtn?(i.musclesBtn.disabled=!0,i.bodypartsBtn.disabled=!1,i.equipBtn.disabled=!1,m.filter="Muscles"):t===i.bodypartsBtn?(i.musclesBtn.disabled=!1,i.bodypartsBtn.disabled=!0,i.equipBtn.disabled=!1,m.filter="Body parts"):t===i.equipBtn&&(i.musclesBtn.disabled=!1,i.bodypartsBtn.disabled=!1,i.equipBtn.disabled=!0,m.filter="Equipment"),U())});let y=null;function ue(e){const t=e.target.nodeName==="BUTTON";i.musclesBtn.classList.remove("active"),t&&(e.target.classList.add("active"),y!==null&&y.classList.remove("active"),y=e.target,y===y&&y.classList.add("active"))}i.pagination.addEventListener("click",me);function pe(e,t){let s="";for(;e<=t;e++)s+=`<button class="pagination-btn" type="button">${e}</button>`;return s}async function me(e){m.page=e.target.textContent,i.gallery.innerHTML="";try{const{results:t}=await H();N(t)}catch(t){console.log(t)}}const g="/fson97-group-10/assets/icons-7beb2351.svg",a={page:1,totalPages:1,totalItems:0,keyword:"",filter:"",filterGroup:"",limit:12},f=document.querySelector(".gallery");f&&(f.addEventListener("click",ge),f.classList.add("exercises-card"));const G=document.querySelector(".search-btn"),L=document.querySelector(".search-clear-btn"),p=document.querySelector(".search-input"),$=document.querySelector(".exercises-btns-div"),A=document.querySelector(".ex-search"),D=document.querySelector(".exercises-header"),F=document.querySelector("#pagination"),j=document.querySelector("#pager");function ge(e){if(e.preventDefault(),e.target.closest("ul").dataset.exercises){F.style.display="none",j.style.display="block",G.addEventListener("click",J),L.addEventListener("click",K),p.addEventListener("input",_),$.addEventListener("click",z),A.style.display="block";const t=document.querySelector(".exercises-button.active");a.filter=t.dataset.filter,a.filterGroup=e.target.closest("ul").dataset.exercises;const s=`Exercises / <span class="head-small">${a.filterGroup.charAt(0).toUpperCase()+a.filterGroup.slice(1)}</span>`;D.innerHTML=s,b(a.filter)}}function J(e){e.preventDefault(),p.value.length>3&&(a.page=1,a.keyword=p.value.trim().toLowerCase(),b(a.filter,!0))}function b(e,t=!0){f.innerHTML="",fe(e).then(s=>{a.totalPages=s.totalPages,a.totalItems=a.limit*s.totalPages,s.results.length===0?(f.innerHTML='<p class="ex-list-no-result">Unfortunately, <span class="accent-text">no results</span> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</p>',P()):(ve(s.results),t&&P()),o("hide")}).catch(s=>{o("hide"),l(s.message,"ERROR")})}async function fe(e){return o(),p.value.length>3?a.keyword=p.value.trim().toLowerCase():a.keyword="",(await h.get("/exercises",{params:{[e]:a.filterGroup,keyword:a.keyword,page:a.page,limit:a.limit}})).data}function ve(e){let t=e.map(n=>`<li class="exercise-item" data-id="${n._id}">
      <p class="ex-item-head">
      <span class="ex-item-head-group">
      <span class="ex-item-workout">WORKOUT</span>
      <span class="ex-rating-group">
      <span class="ex-item-rating">${Number(n.rating).toFixed(1)}</span>
      <svg class="ex-star-icon" width="18" height="18"><use href="${g}#icon-star"></use></svg>
      </span>
      </span>
      <a class="ex-item-start" href="#" data-id="${n._id}"><span>Start</span> <svg class="ex-arrow-icon" width="14" height="14"><use href="${g}#icon-arrow-start"></use></svg></a>
      </p>
      <span class="ex-title">
      <span class="ex-run-men"><svg class="ex-icon-run" width="14" height="14"><use href="${g}#icon-running_man"></use></svg></span>
      <h3 class="ex-item-name">${n.name.charAt(0).toUpperCase()+n.name.slice(1)}</h3>
      </span>
      <p class="ex-item-info">
      <span class="ex-info-group"><span class="ex-item-desc">Burned calories:</span> <span class="ex-item-value">${n.burnedCalories} / ${n.time} min</span></span>
      <span class="ex-info-group"><span class="ex-item-desc">Body part:</span> <span class="ex-item-value">${n.bodyPart.charAt(0).toUpperCase()+n.bodyPart.slice(1)}</span></span>
      <span class="ex-info-group"><span class="ex-item-desc">Target:</span> <span class="ex-item-value">${n.target.charAt(0).toUpperCase()+n.target.slice(1)}</span></span>
      </p>
      </li>`).join("");f.innerHTML=t;const s=$.getBoundingClientRect();window.scrollBy({top:s.y+s.height,left:0,behavior:"smooth"})}function P(){if(a.totalItems>a.limit)new de("pager",{totalItems:a.totalItems,itemsPerPage:a.limit,visiblePages:3}).on("afterMove",function(t){a.page=t.page,b(a.filter,!1)});else{const e=document.querySelector("#pager");e.innerHTML=""}o("hide")}function K(){p.value="",L.style.visibility="hidden",a.page=1,b(a.filter,a.filterGroup)}function _(){p.value.length>0?L.style.visibility="visible":L.style.visibility="hidden"}function z(e){e.target.tagName==="BUTTON"&&(p.value="",A.style.display="none",f.innerHTML="",f.classList.remove("exercises-card"),G.removeEventListener("click",J),L.removeEventListener("click",K),p.removeEventListener("input",_),$.removeEventListener("click",z),j.style.display="none",F.style.display="block",a.page=1,D.innerHTML="Exercises")}const V=document.querySelector(".footer-form");async function ye(e){return h.post("https://energyflow.b.goit.study/api/subscription",e)}V.addEventListener("submit",he);function he(e){e.preventDefault();const t=e.currentTarget.email.value.trim().toLowerCase();if(t===""){l("The email field is empty!","ERROR");return}const s={email:t};o("show"),ye(s).then(({data:n,status:r})=>{r===201&&(o("hide"),l(n.message,"OK"))}).catch(n=>{n.response.status===409?(o("hide"),l("Subscription already exists!")):(l(n.message,"ERROR"),o("hide"))}).finally(V.reset())}let q,Y;const k=document.querySelector(".overlay-rating"),W=document.querySelector(".backdrop"),Q=document.querySelector(".modal-rating"),X=document.querySelector(".close-modal-rating-btn"),Z=document.querySelector(".star-container"),ee=document.querySelector(".send-rating-btn");function Le(){q=document.querySelector(".give-rating-btn"),q.addEventListener("click",te),X.addEventListener("click",M),k.addEventListener("click",ae),Z.addEventListener("click",se),ee.addEventListener("click",ne)}function T(){q.removeEventListener("click",te),X.removeEventListener("click",M),k.removeEventListener("click",ae),Z.removeEventListener("click",se),ee.removeEventListener("click",ne)}function te(e){e.preventDefault(),Y=e.target.dataset.id,xe(),be()}function be(){Q.classList.remove("visually-hidden"),k.style.display="block",W.style.display="none"}function se(e){if(e.target.tagName==="INPUT"){const t=e.target.value,s=document.querySelector(".rating-value");s.textContent=Number(t).toFixed(1)}}function ne(e){e.preventDefault(),o();const t=document.querySelector(".rating-form"),s=t.elements.star.value,n=t.elements.email.value.trim().toLowerCase(),r=t.elements.review.value.trim();if(s===""){l("Please set your estimation!","ERROR"),o("hide");return}if(n===""){l("Please enter your email!","ERROR"),o("hide");return}ke(s,n,r).then(function(d){console.log(d),l("Thank you! Your rating has been sent!","OK");const c=document.querySelector(".rating-value");c.textContent="0.0"}).catch(function(d){d.response.status===409?l("Such email already exists!"):d.response.status===404?l("Such exercise not found!"):l(d.message,"ERROR")}).finally(()=>{o("hide"),t.reset()})}async function ke(e,t,s){const n="https://energyflow.b.goit.study/api",r="exercises";return e=Number(e),await h.patch(`${n}/${r}/${Y}/rating/`,{rate:e,email:t,review:s})}function M(){Q.classList.add("visually-hidden"),k.style.display="none",W.style.display="block",Ee()}function xe(){document.querySelector(".modal").classList.add("visually-hidden")}function Ee(){document.querySelector(".modal").classList.remove("visually-hidden")}function ae(e){e.target.classList.contains("overlay-rating")&&M()}const Se=document.querySelector(".gallery"),v=document.querySelector(".backdrop"),u=document.querySelector(".modal");Se.addEventListener("click",we);async function we(e){if(e.target===e.curentTarget)return;const t=e.target.closest(".ex-item-start");if(t===null)return;o();const s=t.dataset.id,n=await R(s);v.classList.remove("visually-hidden"),u.innerHTML="";const r=Ce(n);u.innerHTML=r,Le(),o("none"),u.classList.remove("visually-hidden"),document.querySelector(".add-favorite-btn").addEventListener("click",Be),document.querySelector(".close-modal-btn").addEventListener("click",x),v.addEventListener("click",E),document.addEventListener("keydown",S)}async function Be(e){const t=e.target.closest(".add-favorite-btn"),s=t.dataset.id,n=localStorage.getItem("favorites");if(n){const r=JSON.parse(n);if(r.some(({_id:c})=>c===s))localStorage.setItem("favorites",JSON.stringify(r.filter(({_id:c})=>c!==s))),t.innerHTML=B();else{const c=await R(s);localStorage.setItem("favorites",JSON.stringify([...r,c])),t.innerHTML=B("remove")}}else{const r=await R(s);localStorage.setItem("favorites",JSON.stringify([r])),t.innerHTML=B("remove")}}function x(){u.classList.add("visually-hidden"),v.classList.add("visually-hidden"),u.innerHTML="",document.removeEventListener("keydown",S),T(),closeBtn.removeEventListener("click",x),v.removeEventListener("click",E)}function E(e){e.target.closest(".modal")||(u.classList.add("visually-hidden"),v.classList.add("visually-hidden"),u.innerHTML="",document.removeEventListener("keydown",S),T(),closeBtn.removeEventListener("click",x),v.removeEventListener("click",E))}function S(e){e.preventDefault(),e.key==="Escape"&&(u.classList.add("visually-hidden"),v.classList.add("visually-hidden"),u.innerHTML="",document.removeEventListener("keydown",S),T(),closeBtn.removeEventListener("click",x),v.removeEventListener("click",E))}async function R(e){try{const t="https://energyflow.b.goit.study/api",s="exercises",{data:n}=await h.get(`${t}/${s}/${e}`);return n}catch(t){console.error(t)}}function B(e="add"){return e==="add"?`Add to favorites
        <svg class="icon-heart" width="18" height="18">
          <use href="${g}#icon-heart"></use>
        </svg>`:`Remove from
        <svg class="icon-heart" width="18" height="18">
          <use href="${g}#icon-heart"></use>
        </svg>`}function C(e){return e.charAt(0).toUpperCase()+e.slice(1)}function Ce({_id:e,bodyPart:t,equipment:s,gifUrl:n,name:r,target:d,description:c,rating:ie,burnedCalories:re,time:oe,popularity:le}){let O=!1;const I=localStorage.getItem("favorites");return I&&(O=JSON.parse(I).some(ce=>ce._id===e)),`<div class="modal-description-container">
      <button class="close-modal-btn">
        <svg class="close-modal-icon" width="24" height="24">
          <use href="${g}#icon-cross"></use>
        </svg>
      </button>
      <img
        class="modal-gif"
        src="${n}"
        alt="${r}"
        width="295"
        height="258"
      />
      <div class="text-container">
        <h4 class="modal-title">${r}</h4>
        <div class="rating-container">
          <p class="modal-exercises-rating">${ie}</p>
          <svg class="star" width="18" height="18">
            <use href="${g}#icon-star"></use>
          </svg>
        </div>
        <ul class="description-list">
          <li class="description-item">
            <p>Target</p>
            <span>${C(d)}</span>
          </li>
          <li class="description-item">
            <p>Body Part</p>
            <span>${C(t)}</span>
          </li>
          <li class="description-item">
            <p>Equipment</p>
            <span>${C(s)}</span>
          </li>
          <li class="description-item">
            <p>Popular</p>
            <span>${le}</span>
          </li>
          <li class="description-item">
            <p>Burned Calories</p>
            <span>${re}/${oe} min</span>
          </li>
        </ul>
        <p class="modal-description-text">${c}</p>
        <div class="modal-buttons-container">
          <button data-id="${e}" class="add-favorite-btn">
            ${O?"Remove from":"Add to favorites"}
            <svg class="icon-heart" width="18" height="18">
              <use href="${g}#icon-heart"></use>
            </svg>
          </button>
          <button data-id="${e}" class="give-rating-btn">
            Give a rating
          </button>
        </div>
      </div>
    </div>`}
//# sourceMappingURL=commonHelpers2.js.map
