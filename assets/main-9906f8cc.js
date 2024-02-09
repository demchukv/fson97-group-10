import{i as w,a as L,P as j}from"./vendor-e8675f53.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function s(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(a){if(a.ep)return;a.ep=!0;const o=s(a);fetch(a.href,o)}})();function g(e,t="info"){t==="OK"?w.success({position:"topCenter",message:e}):t==="ERROR"?w.error({position:"topCenter",message:e}):w.info({position:"topCenter",message:e})}function l(e="show"){const t=document.querySelector(".loader");e==="show"?t.style.display="inline-block":t.style.display="none"}const n={gallery:document.querySelector(".gallery"),buttons:document.querySelector(".exercises-btns-div"),pagination:document.getElementById("pagination"),musclesBtn:document.querySelector('[data-filter="muscles"]'),bodypartsBtn:document.querySelector('[data-filter="bodypart"]'),equipBtn:document.querySelector('[data-filter="equipment"]')};L.defaults.baseURL="https://energyflow.b.goit.study/api";const p={perPage:12,page:1,filter:"Muscles",totalPages:1,totalItems:0};async function T(){return l(),(await L.get("/filters",{params:{filter:p.filter,page:p.page,limit:p.perPage}})).data}function $(e){n.gallery.innerHTML="";const t=e.map(({name:s,filter:r,imgUrl:a})=>`<li class="gallery-item">
        <a href="">
        <img class="gallery-image" src="${a}" alt="Galllery Image">
            <ul class="gallery-item-description" data-exercises="${s}">
                <li class="name">${s}</li>
                <li class="filter">${r}</li>
            </ul>
        </a>
    </li>`).join("");n.gallery.innerHTML=t,l("hide")}function q(){p.page=1,T().then(e=>{const{results:t,totalPages:s,page:r}=e;if($(t),s>1){const a=K(r,s);n.pagination.innerHTML=a}else n.pagination.innerHTML=""}).catch(e=>{l("hide"),g(e.message,"ERROR")})}q();n.musclesBtn.classList.add("active");n.musclesBtn.disabled=!0;n.buttons.addEventListener("click",e=>{J(e);const t=e.target;t!==e.currentTarget&&(t===n.musclesBtn?(n.musclesBtn.disabled=!0,n.bodypartsBtn.disabled=!1,n.equipBtn.disabled=!1,p.filter="Muscles"):t===n.bodypartsBtn?(n.musclesBtn.disabled=!1,n.bodypartsBtn.disabled=!0,n.equipBtn.disabled=!1,p.filter="Body parts"):t===n.equipBtn&&(n.musclesBtn.disabled=!1,n.bodypartsBtn.disabled=!1,n.equipBtn.disabled=!0,p.filter="Equipment"),q())});let m=null;function J(e){const t=e.target.nodeName==="BUTTON";n.musclesBtn.classList.remove("active"),t&&(e.target.classList.add("active"),m!==null&&m.classList.remove("active"),m=e.target,m===m&&m.classList.add("active"))}n.pagination.addEventListener("click",_);function K(e,t){let s="";for(;e<=t;e++)s+=`<button class="pagination-btn" type="button">${e}</button>`;return s}async function _(e){p.page=e.target.textContent,n.gallery.innerHTML="";try{const{results:t}=await T();$(t)}catch(t){console.log(t)}}const h="/fson97-group-10/assets/icons-7beb2351.svg",i={page:1,totalPages:1,totalItems:0,keyword:"",filter:"",filterGroup:"",limit:12},f=document.querySelector(".gallery");f&&(f.addEventListener("click",z),f.classList.add("exercises-card"));const O=document.querySelector(".search-btn"),v=document.querySelector(".search-clear-btn"),u=document.querySelector(".search-input"),C=document.querySelector(".exercises-btns-div"),M=document.querySelector(".ex-search");function z(e){if(e.preventDefault(),e.target.closest("ul").dataset.exercises){O.addEventListener("click",I),v.addEventListener("click",P),u.addEventListener("input",H),C.addEventListener("click",R),M.classList.remove("visually-hidden");const t=document.querySelector(".exercises-button.active");i.filter=t.dataset.filter,i.filterGroup=e.target.closest("ul").dataset.exercises,b(i.filter)}}function I(e){e.preventDefault(),u.value.length>3&&(i.page=1,i.keyword=u.value.trim().toLowerCase(),b(i.filter,!0))}function b(e,t=!0){f.innerHTML="",W(e).then(s=>{i.totalPages=s.totalPages,i.totalItems=i.limit*s.totalPages,s.results.length===0?f.innerHTML='<p class="ex-list-no-result">Unfortunately, <span class="accent-text">no results</span> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</p>':(Y(s.results),t&&Q()),l("hide")}).catch(s=>{l("hide"),g(s.message,"ERROR")})}async function W(e){return l(),u.value.length>3?i.keyword=u.value.trim().toLowerCase():i.keyword="",(await L.get("/exercises",{params:{[e]:i.filterGroup,keyword:i.keyword,page:i.page,limit:i.limit}})).data}function Y(e){let t=e.map(s=>`<li class="exercise-item" data-id="${s._id}">
      <p class="ex-item-head">
      <span class="ex-item-head-group">
      <span class="ex-item-workout">WORKOUT</span>
      <span class="ex-rating-group">
      <span class="ex-item-rating">${Number(s.rating).toFixed(1)}</span>
      <svg class="ex-star-icon" width="18" height="18"><use href="${h}#icon-star"></use></svg>
      </span>
      </span>
      <a class="ex-item-start" href="#" data-id="${s._id}"><span>Start</span> <svg class="ex-arrow-icon" width="14" height="14"><use href="${h}#icon-arrow-start"></use></svg></a>
      </p>
      <span class="ex-title">
      <span class="ex-run-men"><svg class="ex-icon-run" width="14" height="14"><use href="${h}#icon-running_man"></use></svg></span>
      <h3 class="ex-item-name">${s.name.charAt(0).toUpperCase()+s.name.slice(1)}</h3>
      </span>
      <p class="ex-item-info">
      <span class="ex-info-group"><span class="ex-item-desc">Burned calories:</span> <span class="ex-item-value">${s.burnedCalories} / ${s.time} min</span></span>
      <span class="ex-info-group"><span class="ex-item-desc">Body part:</span> <span class="ex-item-value">${s.bodyPart.charAt(0).toUpperCase()+s.bodyPart.slice(1)}</span></span>
      <span class="ex-info-group"><span class="ex-item-desc">Target:</span> <span class="ex-item-value">${s.target.charAt(0).toUpperCase()+s.target.slice(1)}</span></span>
      </p>
      </li>`).join("");f.innerHTML=t}function Q(){if(i.totalItems>i.limit)new j("pagination",{totalItems:i.totalItems,itemsPerPage:i.limit,visiblePages:3}).on("afterMove",function(t){i.page=t.page,b(i.filter,!1)});else{const e=document.querySelector("#pagination");e.innerHTML=""}l("hide")}function P(){u.value="",v.style.visibility="hidden",i.page=1,b(i.filter,i.filterGroup)}function H(){u.value.length>0?v.style.visibility="visible":v.style.visibility="hidden"}function R(e){if(e.target.tagName==="BUTTON"){u.value="",M.classList.add("visually-hidden"),f.innerHTML="",f.classList.remove("exercises-card"),O.removeEventListener("click",I),v.removeEventListener("click",P),u.removeEventListener("input",H),C.removeEventListener("click",R);const t=document.querySelector("#pagination");t.innerHTML="",i.page=1}}const N=document.querySelector(".footer-form");async function V(e){return L.post("https://energyflow.b.goit.study/api/subscription",e)}N.addEventListener("submit",X);function X(e){e.preventDefault();const t=e.currentTarget.email.value.trim().toLowerCase();if(t===""){g("The email field is empty!","ERROR");return}const s={email:t};l("show"),V(s).then(({data:r,status:a})=>{a===201&&(l("hide"),g(r.message,"OK"))}).catch(r=>{r.response.status===409?(l("hide"),g("Subscription already exists!")):(g(r.message,"ERROR"),l("hide"))}).finally(N.reset())}const Z=document.querySelector(".gallery"),y=document.querySelector(".backdrop"),d=document.querySelector(".modal");Z.addEventListener("click",ee);async function ee(e){if(e.target===e.curentTarget)return;const t=e.target.closest(".ex-item-start");if(t===null)return;l();const s=t.dataset.id,r=await k(s);y.classList.remove("visually-hidden"),d.innerHTML="";const a=ie(r);d.innerHTML=a,l("none"),d.classList.remove("visually-hidden"),document.querySelector(".add-favorite-btn").addEventListener("click",te),document.querySelector(".close-modal-btn").addEventListener("click",se),y.addEventListener("click",ae),document.addEventListener("keydown",x)}async function te(e){const t=e.target.closest(".add-favorite-btn"),s=t.dataset.id,r=localStorage.getItem("favorites");if(r){const a=JSON.parse(r);if(a.some(({_id:c})=>c===s))localStorage.setItem("favorites",JSON.stringify(a.filter(({_id:c})=>c!==s))),t.innerHTML=E();else{const c=await k(s);localStorage.setItem("favorites",JSON.stringify([...a,c])),t.innerHTML=E("remove")}}else{const a=await k(s);localStorage.setItem("favorites",JSON.stringify([a])),t.innerHTML=E("remove")}}function se(){d.classList.add("visually-hidden"),y.classList.add("visually-hidden"),d.innerHTML="",document.removeEventListener("keydown",x)}function ae(e){e.target.closest(".modal")||(d.classList.add("visually-hidden"),y.classList.add("visually-hidden"),d.innerHTML="",document.removeEventListener("keydown",x))}function x(e){e.preventDefault(),e.key==="Escape"&&(d.classList.add("visually-hidden"),y.classList.add("visually-hidden"),d.innerHTML="",document.removeEventListener("keydown",x))}async function k(e){try{const t="https://energyflow.b.goit.study/api",s="exercises",{data:r}=await L.get(`${t}/${s}/${e}`);return r}catch(t){console.error(t)}}function E(e="add"){return e==="add"?`Add to favorites
        <svg class="icon-heart" width="18" height="18">
          <use href="./img/icons.svg#icon-heart"></use>
        </svg>`:`Remove from
        <svg class="icon-heart" width="18" height="18">
          <use href="./img/icons.svg#icon-heart"></use>
        </svg>`}function ie({_id:e,bodyPart:t,equipment:s,gifUrl:r,name:a,target:o,description:c,rating:A,burnedCalories:U,time:F,popularity:D}){let S=!1;const B=localStorage.getItem("favorites");return B&&(S=JSON.parse(B).some(G=>G._id===e)),`    <div class="modal-description-container">
      <button class="close-modal-btn">
        <svg class="close-modal-icon" width="24" height="24">
          <use href="${h}#icon-cross"></use>
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
        <p class="modal-exercises-rating">${A}</p>
        <svg class="star" width="18" height="18">
          <use href="${h}#icon-star"></use>
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
          <span>${D}</span>
        </li>
        <li class="description-item">
          <p>Burned Calories</p>
          <span>${U}/${F} min</span>
        </li>
      </ul>
      <p class="modal-description-text">${c}</p>
    </div>
    <div class="modal-buttons-container">
      <button data-id="${e}" class="add-favorite-btn">${S?"Remove from":"Add to favorites"}        
      <svg class="icon-heart" width="18" height="18">
          <use href="${h}#icon-heart"></use>
        </svg></button>
      <button data-id="${e}" class="give-rating-btn">Give a rating</button>
    </div>
  </div>`}
//# sourceMappingURL=main-9906f8cc.js.map
