import{i as E,a as b,P as U}from"./vendor-e8675f53.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const h of o.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function s(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(a){if(a.ep)return;a.ep=!0;const o=s(a);fetch(a.href,o)}})();function m(e,t="info"){t==="OK"?E.success({position:"topCenter",message:e}):t==="ERROR"?E.error({position:"topCenter",message:e}):E.info({position:"topCenter",message:e})}function l(e="show"){const t=document.querySelector(".loader");e==="show"?t.style.display="inline-block":t.style.display="none"}const i={gallery:document.querySelector(".gallery"),buttons:document.querySelector(".exercises-btns-div"),pagination:document.getElementById("pagination"),musclesBtn:document.querySelector('[data-filter="muscles"]'),bodypartsBtn:document.querySelector('[data-filter="bodypart"]'),equipBtn:document.querySelector('[data-filter="equipment"]')};b.defaults.baseURL="https://energyflow.b.goit.study/api";const u={perPage:12,page:1,filter:"Muscles",totalPages:1,totalItems:0};async function w(){return l(),(await b.get("/filters",{params:{filter:u.filter,page:u.page,limit:u.perPage}})).data}function k(e){i.gallery.innerHTML="";const t=e.map(({name:s,filter:r,imgUrl:a})=>`<li class="gallery-item">
        <a href="">
        <img class="gallery-image" src="${a}" alt="Galllery Image">
            <ul class="gallery-item-description" data-exercises="${s}">
                <li class="name">${s}</li>
                <li class="filter">${r}</li>
            </ul>
        </a>
    </li>`).join("");i.gallery.innerHTML=t,l("hide")}function B(){u.page=1,w().then(e=>{const{results:t,totalPages:s,page:r}=e;if(k(t),s>1){const a=D(r,s);i.pagination.innerHTML=a}else i.pagination.innerHTML=""}).catch(e=>{l("hide"),m(e.message,"ERROR")})}B();i.musclesBtn.classList.add("active");i.musclesBtn.disabled=!0;i.buttons.addEventListener("click",e=>{A(e);const t=e.target;t!==e.currentTarget&&(t===i.musclesBtn?(i.musclesBtn.disabled=!0,i.bodypartsBtn.disabled=!1,i.equipBtn.disabled=!1,u.filter="Muscles"):t===i.bodypartsBtn?(i.musclesBtn.disabled=!1,i.bodypartsBtn.disabled=!0,i.equipBtn.disabled=!1,u.filter="Body parts"):t===i.equipBtn&&(i.musclesBtn.disabled=!1,i.bodypartsBtn.disabled=!1,i.equipBtn.disabled=!0,u.filter="Equipment"),B())});let p=null;function A(e){const t=e.target.nodeName==="BUTTON";i.musclesBtn.classList.remove("active"),t&&(e.target.classList.add("active"),p!==null&&p.classList.remove("active"),p=e.target,p===p&&p.classList.add("active"))}i.pagination.addEventListener("click",G);function D(e,t){let s="";for(;e<=t;e++)s+=`<button class="pagination-btn" type="button">${e}</button>`;return s}async function G(e){u.page=e.target.textContent,i.gallery.innerHTML="";try{const{results:t}=await w();k(t)}catch(t){console.log(t)}}const f="/fson97-group-10/assets/icons-7beb2351.svg",n={page:1,totalPages:1,totalItems:0,keyword:"",filter:"",filterGroup:"",limit:12},g=document.querySelector(".gallery");g&&g.addEventListener("click",j);const $=document.querySelector(".search-btn"),y=document.querySelector(".search-clear-btn"),d=document.querySelector(".search-input"),q=document.querySelector(".exercises-btns-div"),S=document.querySelector(".ex-search");function j(e){if(e.preventDefault(),e.target.closest("ul").dataset.exercises){$.addEventListener("click",T),y.addEventListener("click",C),d.addEventListener("input",P),q.addEventListener("click",M),S.classList.remove("visually-hidden");const t=document.querySelector(".exercises-button.active");n.filter=t.dataset.filter,n.filterGroup=e.target.closest("ul").dataset.exercises,L(n.filter)}}function T(e){e.preventDefault(),d.value.length>3&&(n.page=1,n.keyword=d.value.trim().toLowerCase(),L(n.filter,!0))}function L(e,t=!0){g.innerHTML="",F(e).then(s=>{n.totalPages=s.totalPages,n.totalItems=n.limit*s.totalPages,s.results.length===0?g.innerHTML='<p class="ex-list-no-result">Unfortunately, <span class="accent-text">no results</span> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</p>':(K(s.results),t&&_()),l("hide")}).catch(s=>{l("hide"),m(s.message,"ERROR")})}async function F(e){return l(),d.value.length>3?n.keyword=d.value.trim().toLowerCase():n.keyword="",(await b.get("/exercises",{params:{[e]:n.filterGroup,keyword:n.keyword,page:n.page,limit:n.limit}})).data}function K(e){let t=e.map(s=>`<li class="exercise-item" data-id="${s._id}">
      <p class="ex-item-head">
      <span class="ex-item-head-group">
      <span class="ex-item-workout">WORKOUT</span>
      <span class="ex-rating-group">
      <span class="ex-item-rating">${Number(s.rating).toFixed(1)}</span>
      <svg class="ex-star-icon" width="18" height="18"><use href="${f}#icon-star"></use></svg>
      </span>
      </span>
      <a class="ex-item-start" href="#" data-id="${s._id}"><span>Start</span> <svg class="ex-arrow-icon" width="14" height="14"><use href="${f}#icon-arrow-start"></use></svg></a>
      </p>
      <span class="ex-title">
      <span class="ex-run-men"><svg class="ex-icon-run" width="14" height="14"><use href="${f}#icon-running_man"></use></svg></span>
      <h3 class="ex-item-name">${s.name.charAt(0).toUpperCase()+s.name.slice(1)}</h3>
      </span>
      <p class="ex-item-info">
      <span class="ex-info-group"><span class="ex-item-desc">Burned calories:</span> <span class="ex-item-value">${s.burnedCalories} / ${s.time} min</span></span>
      <span class="ex-info-group"><span class="ex-item-desc">Body part:</span> <span class="ex-item-value">${s.bodyPart.charAt(0).toUpperCase()+s.bodyPart.slice(1)}</span></span>
      <span class="ex-info-group"><span class="ex-item-desc">Target:</span> <span class="ex-item-value">${s.target.charAt(0).toUpperCase()+s.target.slice(1)}</span></span>
      </p>
      </li>`).join("");g.innerHTML=t}function _(){if(n.totalItems>n.limit)new U("pagination",{totalItems:n.totalItems,itemsPerPage:n.limit,visiblePages:3}).on("afterMove",function(t){n.page=t.page,L(n.filter,!1)});else{const e=document.querySelector("#pagination");e.innerHTML=""}l("hide")}function C(){d.value="",y.style.visibility="hidden",n.page=1,L(n.filter,n.filterGroup)}function P(){d.value.length>0?y.style.visibility="visible":y.style.visibility="hidden"}function M(e){if(e.target.tagName==="BUTTON"){d.value="",S.classList.add("visually-hidden"),g.innerHTML="",$.removeEventListener("click",T),y.removeEventListener("click",C),d.removeEventListener("input",P),q.removeEventListener("click",M);const t=document.querySelector("#pagination");t.innerHTML="",n.page=1}}const O=document.querySelector(".footer-form");async function z(e){return b.post("https://energyflow.b.goit.study/api/subscription",e)}O.addEventListener("submit",W);function W(e){e.preventDefault();const t=e.currentTarget.email.value.trim().toLowerCase();if(t===""){m("The email field is empty!","ERROR");return}const s={email:t};l("show"),z(s).then(({data:r,status:a})=>{a===201&&(l("hide"),m(r.message,"OK"))}).catch(r=>{r.response.status===409?(l("hide"),m("Subscription already exists!")):(m(r.message,"ERROR"),l("hide"))}).finally(O.reset())}const Y=document.querySelector(".gallery"),v=document.querySelector(".backdrop"),c=document.querySelector(".modal");Y.addEventListener("click",J);async function J(e){if(e.target===e.curentTarget)return;const t=e.target.closest(".exercise-item");if(t===null)return;l();const s=t.dataset.id,r=await X(s);v.classList.remove("visually-hidden"),c.innerHTML="";const a=Z(r);c.innerHTML=a,l("none"),c.classList.remove("visually-hidden"),document.querySelector(".close-modal-btn").addEventListener("click",Q),v.addEventListener("click",V),document.addEventListener("keydown",x)}function Q(){c.classList.add("visually-hidden"),v.classList.add("visually-hidden"),c.innerHTML="",document.removeEventListener("keydown",x)}function V(e){e.target.closest(".modal")||(c.classList.add("visually-hidden"),v.classList.add("visually-hidden"),c.innerHTML="",document.removeEventListener("keydown",x))}function x(e){e.preventDefault(),e.key==="Escape"&&(c.classList.add("visually-hidden"),v.classList.add("visually-hidden"),c.innerHTML="",document.removeEventListener("keydown",x))}async function X(e){try{const t="https://energyflow.b.goit.study/api",s="exercises",{data:r}=await b.get(`${t}/${s}/${e}`);return r}catch(t){console.error(t)}}function Z({_id:e,bodyPart:t,equipment:s,gifUrl:r,name:a,target:o,description:h,rating:R,burnedCalories:H,time:I,popularity:N}){return`    <div class="modal-description-container">
      <button class="close-modal-btn">
        <svg class="close-modal-icon" width="24" height="24">
          <use href="${f}#icon-cross"></use>
        </svg>
      </button>
      <img
        class="modal-gif"
        src="${r}"
        alt="${a}"
        width="295"
        height="258"
      />

      <h4 class="modal-title">${a}</h4>
      <div class="rating-container">
        <p class="modal-exercises-rating">${R}</p>
        <svg class="star" width="18" height="18">
          <use href="${f}.svg#icon-star"></use>
        </svg>
      </div>
      <ul class="description-list">
        <li class="description-item">
          <p>Target</p>
          <span>${o}</span>
        </li>
        <li class="description-item">
          <p>Body Part</p>
          <span>${t}</span>
        </li>
        <li class="description-item">
          <p>Equipment</p>
          <span>${s}</span>
        </li>
        <li class="description-item">
          <p>Popular</p>
          <span>${N}</span>
        </li>
        <li class="description-item">
          <p>Burned Calories</p>
          <span>${H}/${I} min</span>
        </li>
      </ul>
      <p class="modal-description-text">${h}</p>
    </div>
    <div class="modal-buttons-container">
      <button data-id="${e}" class="add-favorite-btn">Add to favorite        
      <svg class="icon-heart" width="18" height="18">
          <use href="${f}#icon-heart"></use>
        </svg></button>
      <button data-id="${e}" class="give-rating-btn">Give a rating</button>
    </div>
  </div>`}
//# sourceMappingURL=main-152d799b.js.map
