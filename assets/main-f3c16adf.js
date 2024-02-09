import{i as x,a as v,P as I}from"./vendor-e8675f53.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const g of r.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&n(g)}).observe(document,{childList:!0,subtree:!0});function s(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(a){if(a.ep)return;a.ep=!0;const r=s(a);fetch(a.href,r)}})();function p(e,t="info"){t==="OK"?x.success({position:"topCenter",message:e}):t==="ERROR"?x.error({position:"topCenter",message:e}):x.info({position:"topCenter",message:e})}function l(e="show"){const t=document.querySelector(".loader");e==="show"?t.style.display="inline-block":t.style.display="none"}const d={gallery:document.querySelector(".gallery"),buttons:document.querySelector(".exercises-btns-div"),musclesBtn:document.querySelector('[data-filter="muscles"]'),bodypartsBtn:document.querySelector('[data-filter="bodypart"]'),equipBtn:document.querySelector('[data-filter="equipment"]')};v.defaults.baseURL="https://energyflow.b.goit.study/api";const m={perPage:12,page:1,filter:"Muscles"};async function H(){return l(),await v.get("/filters",{params:{filter:m.filter,page:m.page,limit:m.perPage}})}function N(e){d.gallery.innerHTML="";const t=e.map(({name:s,filter:n,imgUrl:a})=>`<li class="gallery-item">
        <a href="">
        <img class="gallery-image" src="${a}" alt="Galllery Image">
            <ul class="gallery-item-description" data-exercises="${s}">
                <li class="name">${s}</li>
                <li class="filter">${n}</li>
            </ul>
        </a>
    </li>`).join("");d.gallery.innerHTML=t,l("hide")}function E(){H().then(({data:{results:e}})=>N(e)).catch(e=>{l("hide"),p(e.message,"ERROR")})}E();d.musclesBtn.classList.add("active");d.buttons.addEventListener("click",e=>{U(e);const t=e.target;t!==e.currentTarget&&(t===d.musclesBtn?m.filter="Muscles":t===d.bodypartsBtn?m.filter="Body parts":t===d.equipBtn&&(m.filter="Equipment"),E())});let u=null;function U(e){const t=e.target.nodeName==="BUTTON";d.musclesBtn.classList.remove("active"),t&&(e.target.classList.add("active"),u!==null&&u.classList.remove("active"),u=e.target,u===u&&u.classList.add("active"))}const i={page:1,totalPages:1,totalItems:0,keyword:"",filter:"",filterGroup:"",limit:12},f=document.querySelector(".gallery");f&&f.addEventListener("click",A);const k=document.querySelector(".search-btn"),y=document.querySelector(".search-clear-btn"),c=document.querySelector(".search-input"),w=document.querySelector(".exercises-btns-div"),S=document.querySelector(".ex-search");function A(e){if(e.preventDefault(),e.target.closest("ul").dataset.exercises){k.addEventListener("click",$),y.addEventListener("click",q),c.addEventListener("input",T),w.addEventListener("click",B),S.classList.remove("visually-hidden");const t=document.querySelector(".exercises-button.active");i.filter=t.dataset.filter,i.filterGroup=e.target.closest("ul").dataset.exercises,L(i.filter)}}function $(e){e.preventDefault(),c.value.length>3&&(i.page=1,i.keyword=c.value.trim().toLowerCase(),L(i.filter,!0))}function L(e,t=!0){f.innerHTML="",D(e).then(s=>{i.totalPages=s.totalPages,i.totalItems=i.limit*s.totalPages,s.results.length===0?f.innerHTML='<p class="ex-list-no-result">Unfortunately, <span class="accent-text">no results</span> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</p>':(G(s.results),t&&j()),l("hide")}).catch(s=>{l("hide"),p(s.message,"ERROR")})}async function D(e){return l(),c.value.length>3?i.keyword=c.value.trim().toLowerCase():i.keyword="",(await v.get("/exercises",{params:{[e]:i.filterGroup,keyword:i.keyword,page:i.page,limit:i.limit}})).data}function G(e){let t=e.map(s=>`<li class="exercise-item" data-id="${s._id}">
      <p class="ex-item-head">
      <span class="ex-item-workout">WORKOUT</span>
      <span class="ex-item-rating">${s.rating}</span>
      <a class="ex-item-start" href="#" data-id="${s._id}">Start</a>
      </p>
      <h3 class="ex-item-name">${s.name.charAt(0).toUpperCase()+s.name.slice(1)}</h3>
      <p class="ex-item-info">
      <span class="ex-item-desc">Burned calories:</span> <span class="ex-item-value">${s.burnedCalories}/${s.time} min</span>
      <span class="ex-item-desc">Body part:</span> <span class="ex-item-value">${s.bodyPart.charAt(0).toUpperCase()+s.bodyPart.slice(1)}</span>
      <span class="ex-item-desc">Target:</span> <span class="ex-item-value">${s.target.charAt(0).toUpperCase()+s.target.slice(1)}</span>
      </p>
      </li>`).join("");f.innerHTML=t}function j(){if(i.totalItems>i.limit)new I("pagination",{totalItems:i.totalItems,itemsPerPage:i.limit,visiblePages:3}).on("afterMove",function(t){i.page=t.page,L(i.filter,!1)});else{const e=document.querySelector("#pagination");e.innerHTML=""}l("hide")}function q(){c.value="",y.style.visibility="hidden",i.page=1,L(i.filter,i.filterGroup)}function T(){c.value.length>0?y.style.visibility="visible":y.style.visibility="hidden"}function B(e){if(e.target.tagName==="BUTTON"){c.value="",S.classList.add("visually-hidden"),f.innerHTML="",k.removeEventListener("click",$),y.removeEventListener("click",q),c.removeEventListener("input",T),w.removeEventListener("click",B);const t=document.querySelector("#pagination");t.innerHTML="",i.page=1}}const C=document.querySelector(".footer-form");async function K(e){return v.post("https://energyflow.b.goit.study/api/subscription",e)}C.addEventListener("submit",F);function F(e){e.preventDefault();const t=e.currentTarget.email.value.trim().toLowerCase();if(t===""){p("The email field is empty!","ERROR");return}const s={email:t};l("show"),K(s).then(({data:n,status:a})=>{a===201&&(l("hide"),p(n.message,"OK"))}).catch(n=>{n.response.status===409?(l("hide"),p("Subscription already exists!")):(p(n.message,"ERROR"),l("hide"))}).finally(C.reset())}const _=document.querySelector(".gallery"),h=document.querySelector(".backdrop"),o=document.querySelector(".modal");_.addEventListener("click",z);async function z(e){if(e.target===e.curentTarget)return;const t=e.target.closest(".exercise-item");if(t===null)return;l();const s=t.dataset.id,n=await J(s);h.classList.remove("visually-hidden"),o.innerHTML="";const a=Q(n);o.innerHTML=a,l("none"),o.classList.remove("visually-hidden"),document.querySelector(".close-modal-btn").addEventListener("click",W),h.addEventListener("click",Y),document.addEventListener("keydown",b)}function W(){o.classList.add("visually-hidden"),h.classList.add("visually-hidden"),o.innerHTML="",document.removeEventListener("keydown",b)}function Y(e){e.target.closest(".modal")||(o.classList.add("visually-hidden"),h.classList.add("visually-hidden"),o.innerHTML="",document.removeEventListener("keydown",b))}function b(e){e.preventDefault(),e.key==="Escape"&&(o.classList.add("visually-hidden"),h.classList.add("visually-hidden"),o.innerHTML="",document.removeEventListener("keydown",b))}async function J(e){try{const t="https://energyflow.b.goit.study/api",s="exercises",{data:n}=await v.get(`${t}/${s}/${e}`);return n}catch(t){console.error(t)}}function Q({_id:e,bodyPart:t,equipment:s,gifUrl:n,name:a,target:r,description:g,rating:O,burnedCalories:P,time:M,popularity:R}){return`    <div class="modal-description-container">
      <button class="close-modal-btn">
        <svg class="close-modal-icon" width="24" height="24">
          <use href="../img/icons.svg#icon-cross"></use>
        </svg>
      </button>
      <img
        class="modal-gif"
        src="${n}"
        alt="${a}"
        width="295"
        height="258"
      />

      <h4 class="modal-title">${a}</h4>
      <div class="rating-container">
        <p class="modal-exercises-rating">${O}</p>
        <svg class="star" width="18" height="18">
          <use href="../img/icons.svg#icon-star"></use>
        </svg>
      </div>
      <ul class="description-list">
        <li class="description-item">
          <p>Target</p>
          <span>${r}</span>
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
          <span>${R}</span>
        </li>
        <li class="description-item">
          <p>Burned Calories</p>
          <span>${P}/${M} min</span>
        </li>
      </ul>
      <p class="modal-description-text">${g}</p>
    </div>
    <div class="modal-buttons-container">
      <button data-id="${e}" class="add-favorite-btn">Add to favorite</button>
      <button data-id="${e}" class="give-rating-btn">Give a rating</button>
    </div>
  </div>`}
//# sourceMappingURL=main-f3c16adf.js.map
