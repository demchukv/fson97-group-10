import{i as w,a as L,P as _}from"./vendor-e8675f53.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function s(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(i){if(i.ep)return;i.ep=!0;const o=s(i);fetch(i.href,o)}})();function g(e,t="info"){t==="OK"?w.success({position:"topCenter",message:e}):t==="ERROR"?w.error({position:"topCenter",message:e}):w.info({position:"topCenter",message:e})}function l(e="show"){const t=document.querySelector(".loader");e==="show"?t.style.display="inline-block":t.style.display="none"}const r={gallery:document.querySelector(".gallery"),buttons:document.querySelector(".exercises-btns-div"),pagination:document.getElementById("pagination"),musclesBtn:document.querySelector('[data-filter="muscles"]'),bodypartsBtn:document.querySelector('[data-filter="bodypart"]'),equipBtn:document.querySelector('[data-filter="equipment"]')};L.defaults.baseURL="https://energyflow.b.goit.study/api";const p={perPage:12,page:1,filter:"Muscles",totalPages:1,totalItems:0};async function $(){return l(),(await L.get("/filters",{params:{filter:p.filter,page:p.page,limit:p.perPage}})).data}function q(e){r.gallery.innerHTML="";const t=e.map(({name:s,filter:a,imgUrl:i})=>`<li class="gallery-item">
        <a href="">
        <img class="gallery-image" src="${i}" alt="Galllery Image">
            <ul class="gallery-item-description" data-exercises="${s}">
                <li class="name">${s}</li>
                <li class="filter">${a}</li>
            </ul>
        </a>
    </li>`).join("");r.gallery.innerHTML=t,l("hide")}function C(){p.page=1,$().then(e=>{const{results:t,totalPages:s,page:a}=e;if(q(t),s>1){const i=W(a,s);r.pagination.innerHTML=i}else r.pagination.innerHTML=""}).catch(e=>{l("hide"),g(e.message,"ERROR")})}C();r.musclesBtn.classList.add("active");r.musclesBtn.disabled=!0;r.buttons.addEventListener("click",e=>{z(e);const t=e.target;t!==e.currentTarget&&(t===r.musclesBtn?(r.musclesBtn.disabled=!0,r.bodypartsBtn.disabled=!1,r.equipBtn.disabled=!1,p.filter="Muscles"):t===r.bodypartsBtn?(r.musclesBtn.disabled=!1,r.bodypartsBtn.disabled=!0,r.equipBtn.disabled=!1,p.filter="Body parts"):t===r.equipBtn&&(r.musclesBtn.disabled=!1,r.bodypartsBtn.disabled=!1,r.equipBtn.disabled=!0,p.filter="Equipment"),C())});let m=null;function z(e){const t=e.target.nodeName==="BUTTON";r.musclesBtn.classList.remove("active"),t&&(e.target.classList.add("active"),m!==null&&m.classList.remove("active"),m=e.target,m===m&&m.classList.add("active"))}r.pagination.addEventListener("click",Y);function W(e,t){let s="";for(;e<=t;e++)s+=`<button class="pagination-btn" type="button">${e}</button>`;return s}async function Y(e){p.page=e.target.textContent,r.gallery.innerHTML="";try{const{results:t}=await $();q(t)}catch(t){console.log(t)}}const h="/fson97-group-10/assets/icons-7beb2351.svg",n={page:1,totalPages:1,totalItems:0,keyword:"",filter:"",filterGroup:"",limit:12},f=document.querySelector(".gallery");f&&(f.addEventListener("click",Q),f.classList.add("exercises-card"));const O=document.querySelector(".search-btn"),y=document.querySelector(".search-clear-btn"),u=document.querySelector(".search-input"),S=document.querySelector(".exercises-btns-div"),M=document.querySelector(".ex-search"),I=document.querySelector(".exercises-header"),P=document.querySelector("#pagination"),H=document.querySelector("#pager");function Q(e){if(e.preventDefault(),e.target.closest("ul").dataset.exercises){P.style.display="none",H.style.display="block",O.addEventListener("click",R),y.addEventListener("click",N),u.addEventListener("input",A),S.addEventListener("click",U),M.classList.remove("visually-hidden");const t=document.querySelector(".exercises-button.active");n.filter=t.dataset.filter,n.filterGroup=e.target.closest("ul").dataset.exercises;const s=`Exercises / <span class="head-small">${n.filterGroup.charAt(0).toUpperCase()+n.filterGroup.slice(1)}</span>`;I.innerHTML=s,b(n.filter)}}function R(e){e.preventDefault(),u.value.length>3&&(n.page=1,n.keyword=u.value.trim().toLowerCase(),b(n.filter,!0))}function b(e,t=!0){f.innerHTML="",V(e).then(s=>{n.totalPages=s.totalPages,n.totalItems=n.limit*s.totalPages,s.results.length===0?f.innerHTML='<p class="ex-list-no-result">Unfortunately, <span class="accent-text">no results</span> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</p>':(X(s.results),t&&Z()),l("hide")}).catch(s=>{l("hide"),g(s.message,"ERROR")})}async function V(e){return l(),u.value.length>3?n.keyword=u.value.trim().toLowerCase():n.keyword="",(await L.get("/exercises",{params:{[e]:n.filterGroup,keyword:n.keyword,page:n.page,limit:n.limit}})).data}function X(e){let t=e.map(a=>`<li class="exercise-item" data-id="${a._id}">
      <p class="ex-item-head">
      <span class="ex-item-head-group">
      <span class="ex-item-workout">WORKOUT</span>
      <span class="ex-rating-group">
      <span class="ex-item-rating">${Number(a.rating).toFixed(1)}</span>
      <svg class="ex-star-icon" width="18" height="18"><use href="${h}#icon-star"></use></svg>
      </span>
      </span>
      <a class="ex-item-start" href="#" data-id="${a._id}"><span>Start</span> <svg class="ex-arrow-icon" width="14" height="14"><use href="${h}#icon-arrow-start"></use></svg></a>
      </p>
      <span class="ex-title">
      <span class="ex-run-men"><svg class="ex-icon-run" width="14" height="14"><use href="${h}#icon-running_man"></use></svg></span>
      <h3 class="ex-item-name">${a.name.charAt(0).toUpperCase()+a.name.slice(1)}</h3>
      </span>
      <p class="ex-item-info">
      <span class="ex-info-group"><span class="ex-item-desc">Burned calories:</span> <span class="ex-item-value">${a.burnedCalories} / ${a.time} min</span></span>
      <span class="ex-info-group"><span class="ex-item-desc">Body part:</span> <span class="ex-item-value">${a.bodyPart.charAt(0).toUpperCase()+a.bodyPart.slice(1)}</span></span>
      <span class="ex-info-group"><span class="ex-item-desc">Target:</span> <span class="ex-item-value">${a.target.charAt(0).toUpperCase()+a.target.slice(1)}</span></span>
      </p>
      </li>`).join("");f.innerHTML=t;const s=S.getBoundingClientRect();window.scrollBy({top:s.y+s.height,left:0,behavior:"smooth"})}function Z(){if(n.totalItems>n.limit)new _("pager",{totalItems:n.totalItems,itemsPerPage:n.limit,visiblePages:3}).on("afterMove",function(t){n.page=t.page,b(n.filter,!1)});else{const e=document.querySelector("#pager");e.innerHTML=""}l("hide")}function N(){u.value="",y.style.visibility="hidden",n.page=1,b(n.filter,n.filterGroup)}function A(){u.value.length>0?y.style.visibility="visible":y.style.visibility="hidden"}function U(e){e.target.tagName==="BUTTON"&&(u.value="",M.classList.add("visually-hidden"),f.innerHTML="",f.classList.remove("exercises-card"),O.removeEventListener("click",R),y.removeEventListener("click",N),u.removeEventListener("input",A),S.removeEventListener("click",U),H.style.display="none",P.style.display="block",n.page=1,I.innerHTML="Exercises")}const G=document.querySelector(".footer-form");async function ee(e){return L.post("https://energyflow.b.goit.study/api/subscription",e)}G.addEventListener("submit",te);function te(e){e.preventDefault();const t=e.currentTarget.email.value.trim().toLowerCase();if(t===""){g("The email field is empty!","ERROR");return}const s={email:t};l("show"),ee(s).then(({data:a,status:i})=>{i===201&&(l("hide"),g(a.message,"OK"))}).catch(a=>{a.response.status===409?(l("hide"),g("Subscription already exists!")):(g(a.message,"ERROR"),l("hide"))}).finally(G.reset())}const se=document.querySelector(".gallery"),v=document.querySelector(".backdrop"),d=document.querySelector(".modal");se.addEventListener("click",ae);async function ae(e){if(e.target===e.curentTarget)return;const t=e.target.closest(".ex-item-start");if(t===null)return;l();const s=t.dataset.id,a=await k(s);v.classList.remove("visually-hidden"),d.innerHTML="";const i=oe(a);d.innerHTML=i,l("none"),d.classList.remove("visually-hidden"),document.querySelector(".add-favorite-btn").addEventListener("click",ie),document.querySelector(".close-modal-btn").addEventListener("click",ne),v.addEventListener("click",re),document.addEventListener("keydown",x)}async function ie(e){const t=e.target.closest(".add-favorite-btn"),s=t.dataset.id,a=localStorage.getItem("favorites");if(a){const i=JSON.parse(a);if(i.some(({_id:c})=>c===s))localStorage.setItem("favorites",JSON.stringify(i.filter(({_id:c})=>c!==s))),t.innerHTML=E();else{const c=await k(s);localStorage.setItem("favorites",JSON.stringify([...i,c])),t.innerHTML=E("remove")}}else{const i=await k(s);localStorage.setItem("favorites",JSON.stringify([i])),t.innerHTML=E("remove")}}function ne(){d.classList.add("visually-hidden"),v.classList.add("visually-hidden"),d.innerHTML="",document.removeEventListener("keydown",x)}function re(e){e.target.closest(".modal")||(d.classList.add("visually-hidden"),v.classList.add("visually-hidden"),d.innerHTML="",document.removeEventListener("keydown",x))}function x(e){e.preventDefault(),e.key==="Escape"&&(d.classList.add("visually-hidden"),v.classList.add("visually-hidden"),d.innerHTML="",document.removeEventListener("keydown",x))}async function k(e){try{const t="https://energyflow.b.goit.study/api",s="exercises",{data:a}=await L.get(`${t}/${s}/${e}`);return a}catch(t){console.error(t)}}function E(e="add"){return e==="add"?`Add to favorites
        <svg class="icon-heart" width="18" height="18">
          <use href="./img/icons.svg#icon-heart"></use>
        </svg>`:`Remove from
        <svg class="icon-heart" width="18" height="18">
          <use href="./img/icons.svg#icon-heart"></use>
        </svg>`}function oe({_id:e,bodyPart:t,equipment:s,gifUrl:a,name:i,target:o,description:c,rating:F,burnedCalories:D,time:j,popularity:J}){let B=!1;const T=localStorage.getItem("favorites");return T&&(B=JSON.parse(T).some(K=>K._id===e)),`    <div class="modal-description-container">
      <button class="close-modal-btn">
        <svg class="close-modal-icon" width="24" height="24">
          <use href="${h}#icon-cross"></use>
        </svg>
      </button>
      <img
        class="modal-gif"
        src="${a}"
        alt="${i}"
        width="295"
        height="258"
      />

      <h4 class="modal-title">${i}</h4>
      <div class="rating-container">
        <p class="modal-exercises-rating">${F}</p>
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
          <span>${J}</span>
        </li>
        <li class="description-item">
          <p>Burned Calories</p>
          <span>${D}/${j} min</span>
        </li>
      </ul>
      <p class="modal-description-text">${c}</p>
    </div>
    <div class="modal-buttons-container">
      <button data-id="${e}" class="add-favorite-btn">${B?"Remove from":"Add to favorites"}        
      <svg class="icon-heart" width="18" height="18">
          <use href="${h}#icon-heart"></use>
        </svg></button>
      <button data-id="${e}" class="give-rating-btn">Give a rating</button>
    </div>
  </div>`}
//# sourceMappingURL=main-94751bcc.js.map
