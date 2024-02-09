import{i as x,a as v,P as N}from"./vendor-e8675f53.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const f of o.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function s(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(a){if(a.ep)return;a.ep=!0;const o=s(a);fetch(a.href,o)}})();function m(e,t="info"){t==="OK"?x.success({position:"topCenter",message:e}):t==="ERROR"?x.error({position:"topCenter",message:e}):x.info({position:"topCenter",message:e})}function l(e="show"){const t=document.querySelector(".loader");e==="show"?t.style.display="inline-block":t.style.display="none"}const i={gallery:document.querySelector(".gallery"),buttons:document.querySelector(".exercises-btns-div"),pagination:document.getElementById("pagination"),musclesBtn:document.querySelector('[data-filter="muscles"]'),bodypartsBtn:document.querySelector('[data-filter="bodypart"]'),equipBtn:document.querySelector('[data-filter="equipment"]')};v.defaults.baseURL="https://energyflow.b.goit.study/api";const u={perPage:12,page:1,filter:"Muscles",totalPages:1,totalItems:0};async function E(){return l(),(await v.get("/filters",{params:{filter:u.filter,page:u.page,limit:u.perPage}})).data}function w(e){i.gallery.innerHTML="";const t=e.map(({name:s,filter:r,imgUrl:a})=>`<li class="gallery-item">
        <a href="">
        <img class="gallery-image" src="${a}" alt="Galllery Image">
            <ul class="gallery-item-description" data-exercises="${s}">
                <li class="name">${s}</li>
                <li class="filter">${r}</li>
            </ul>
        </a>
    </li>`).join("");i.gallery.innerHTML=t,l("hide")}function k(){u.page=1,E().then(e=>{const{results:t,totalPages:s,page:r}=e;if(w(t),s>1){const a=A(r,s);i.pagination.innerHTML=a}else i.pagination.innerHTML=""}).catch(e=>{l("hide"),m(e.message,"ERROR")})}k();i.musclesBtn.classList.add("active");i.musclesBtn.disabled=!0;i.buttons.addEventListener("click",e=>{U(e);const t=e.target;t!==e.currentTarget&&(t===i.musclesBtn?(i.musclesBtn.disabled=!0,i.bodypartsBtn.disabled=!1,i.equipBtn.disabled=!1,u.filter="Muscles"):t===i.bodypartsBtn?(i.musclesBtn.disabled=!1,i.bodypartsBtn.disabled=!0,i.equipBtn.disabled=!1,u.filter="Body parts"):t===i.equipBtn&&(i.musclesBtn.disabled=!1,i.bodypartsBtn.disabled=!1,i.equipBtn.disabled=!0,u.filter="Equipment"),k())});let p=null;function U(e){const t=e.target.nodeName==="BUTTON";i.musclesBtn.classList.remove("active"),t&&(e.target.classList.add("active"),p!==null&&p.classList.remove("active"),p=e.target,p===p&&p.classList.add("active"))}i.pagination.addEventListener("click",D);function A(e,t){let s="";for(;e<=t;e++)s+=`<button class="pagination-btn" type="button">${e}</button>`;return s}async function D(e){u.page=e.target.textContent,i.gallery.innerHTML="";try{const{results:t}=await E();w(t)}catch(t){console.log(t)}}const n={page:1,totalPages:1,totalItems:0,keyword:"",filter:"",filterGroup:"",limit:12},g=document.querySelector(".gallery");g&&g.addEventListener("click",G);const B=document.querySelector(".search-btn"),y=document.querySelector(".search-clear-btn"),d=document.querySelector(".search-input"),q=document.querySelector(".exercises-btns-div"),S=document.querySelector(".ex-search");function G(e){if(e.preventDefault(),e.target.closest("ul").dataset.exercises){B.addEventListener("click",T),y.addEventListener("click",$),d.addEventListener("input",C),q.addEventListener("click",P),S.classList.remove("visually-hidden");const t=document.querySelector(".exercises-button.active");n.filter=t.dataset.filter,n.filterGroup=e.target.closest("ul").dataset.exercises,b(n.filter)}}function T(e){e.preventDefault(),d.value.length>3&&(n.page=1,n.keyword=d.value.trim().toLowerCase(),b(n.filter,!0))}function b(e,t=!0){g.innerHTML="",j(e).then(s=>{n.totalPages=s.totalPages,n.totalItems=n.limit*s.totalPages,s.results.length===0?g.innerHTML='<p class="ex-list-no-result">Unfortunately, <span class="accent-text">no results</span> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</p>':(F(s.results),t&&K()),l("hide")}).catch(s=>{l("hide"),m(s.message,"ERROR")})}async function j(e){return l(),d.value.length>3?n.keyword=d.value.trim().toLowerCase():n.keyword="",(await v.get("/exercises",{params:{[e]:n.filterGroup,keyword:n.keyword,page:n.page,limit:n.limit}})).data}function F(e){let t=e.map(s=>`<li class="exercise-item" data-id="${s._id}">
      <p class="ex-item-head">
      <span class="ex-item-head-group">
      <span class="ex-item-workout">WORKOUT</span>
      <span class="ex-rating-group">
      <span class="ex-item-rating">${Number(s.rating).toFixed(1)}</span>
      <svg class="ex-star-icon" width="18" height="18"><use href="./img/icons.svg#icon-star"></use></svg>
      </span>
      </span>
      <a class="ex-item-start" href="#" data-id="${s._id}"><span>Start</span> <svg class="ex-arrow-icon" width="14" height="14"><use href="./img/icons.svg#icon-arrow-start"></use></svg></a>
      </p>
      <span class="ex-title">
      <span class="ex-run-men"><svg class="ex-icon-run" width="14" height="14"><use href="./img/icons.svg#icon-running_man"></use></svg></span>
      <h3 class="ex-item-name">${s.name.charAt(0).toUpperCase()+s.name.slice(1)}</h3>
      </span>
      <p class="ex-item-info">
      <span class="ex-info-group"><span class="ex-item-desc">Burned calories:</span> <span class="ex-item-value">${s.burnedCalories} / ${s.time} min</span></span>
      <span class="ex-info-group"><span class="ex-item-desc">Body part:</span> <span class="ex-item-value">${s.bodyPart.charAt(0).toUpperCase()+s.bodyPart.slice(1)}</span></span>
      <span class="ex-info-group"><span class="ex-item-desc">Target:</span> <span class="ex-item-value">${s.target.charAt(0).toUpperCase()+s.target.slice(1)}</span></span>
      </p>
      </li>`).join("");g.innerHTML=t}function K(){if(n.totalItems>n.limit)new N("pagination",{totalItems:n.totalItems,itemsPerPage:n.limit,visiblePages:3}).on("afterMove",function(t){n.page=t.page,b(n.filter,!1)});else{const e=document.querySelector("#pagination");e.innerHTML=""}l("hide")}function $(){d.value="",y.style.visibility="hidden",n.page=1,b(n.filter,n.filterGroup)}function C(){d.value.length>0?y.style.visibility="visible":y.style.visibility="hidden"}function P(e){if(e.target.tagName==="BUTTON"){d.value="",S.classList.add("visually-hidden"),g.innerHTML="",B.removeEventListener("click",T),y.removeEventListener("click",$),d.removeEventListener("input",C),q.removeEventListener("click",P);const t=document.querySelector("#pagination");t.innerHTML="",n.page=1}}const M=document.querySelector(".footer-form");async function _(e){return v.post("https://energyflow.b.goit.study/api/subscription",e)}M.addEventListener("submit",z);function z(e){e.preventDefault();const t=e.currentTarget.email.value.trim().toLowerCase();if(t===""){m("The email field is empty!","ERROR");return}const s={email:t};l("show"),_(s).then(({data:r,status:a})=>{a===201&&(l("hide"),m(r.message,"OK"))}).catch(r=>{r.response.status===409?(l("hide"),m("Subscription already exists!")):(m(r.message,"ERROR"),l("hide"))}).finally(M.reset())}const W=document.querySelector(".gallery"),h=document.querySelector(".backdrop"),c=document.querySelector(".modal");W.addEventListener("click",Y);async function Y(e){if(e.target===e.curentTarget)return;const t=e.target.closest(".exercise-item");if(t===null)return;l();const s=t.dataset.id,r=await V(s);h.classList.remove("visually-hidden"),c.innerHTML="";const a=X(r);c.innerHTML=a,l("none"),c.classList.remove("visually-hidden"),document.querySelector(".close-modal-btn").addEventListener("click",J),h.addEventListener("click",Q),document.addEventListener("keydown",L)}function J(){c.classList.add("visually-hidden"),h.classList.add("visually-hidden"),c.innerHTML="",document.removeEventListener("keydown",L)}function Q(e){e.target.closest(".modal")||(c.classList.add("visually-hidden"),h.classList.add("visually-hidden"),c.innerHTML="",document.removeEventListener("keydown",L))}function L(e){e.preventDefault(),e.key==="Escape"&&(c.classList.add("visually-hidden"),h.classList.add("visually-hidden"),c.innerHTML="",document.removeEventListener("keydown",L))}async function V(e){try{const t="https://energyflow.b.goit.study/api",s="exercises",{data:r}=await v.get(`${t}/${s}/${e}`);return r}catch(t){console.error(t)}}function X({_id:e,bodyPart:t,equipment:s,gifUrl:r,name:a,target:o,description:f,rating:O,burnedCalories:R,time:H,popularity:I}){return`    <div class="modal-description-container">
      <button class="close-modal-btn">
        <svg class="close-modal-icon" width="24" height="24">
          <use href="./img/icons.svg#icon-cross"></use>
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
        <p class="modal-exercises-rating">${O}</p>
        <svg class="star" width="18" height="18">
          <use href="./img/icons.svg#icon-star"></use>
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
          <span>${I}</span>
        </li>
        <li class="description-item">
          <p>Burned Calories</p>
          <span>${R}/${H} min</span>
        </li>
      </ul>
      <p class="modal-description-text">${f}</p>
    </div>
    <div class="modal-buttons-container">
      <button data-id="${e}" class="add-favorite-btn">Add to favorite</button>
      <button data-id="${e}" class="give-rating-btn">Give a rating</button>
    </div>
  </div>`}
//# sourceMappingURL=main-6e036559.js.map
