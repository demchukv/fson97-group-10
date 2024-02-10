import{i as k,a as L,P as Y}from"./vendor-e8675f53.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function s(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(a){if(a.ep)return;a.ep=!0;const o=s(a);fetch(a.href,o)}})();function y(e,t="info"){t==="OK"?k.success({position:"topCenter",message:e}):t==="ERROR"?k.error({position:"topCenter",message:e}):k.info({position:"topCenter",message:e})}function c(e="show"){const t=document.querySelector(".loader");e==="show"?t.style.display="inline-block":t.style.display="none"}const r={gallery:document.querySelector(".gallery"),buttons:document.querySelector(".exercises-btns-div"),pagination:document.getElementById("pagination"),musclesBtn:document.querySelector('[data-filter="muscles"]'),bodypartsBtn:document.querySelector('[data-filter="bodypart"]'),equipBtn:document.querySelector('[data-filter="equipment"]')};L.defaults.baseURL="https://energyflow.b.goit.study/api";const p={perPage:12,page:1,filter:"Muscles",totalPages:1,totalItems:0};async function O(){return c(),(await L.get("/filters",{params:{filter:p.filter,page:p.page,limit:p.perPage}})).data}function M(e){r.gallery.innerHTML="";const t=e.map(({name:s,filter:n,imgUrl:a})=>`<li class="gallery-item">
        <a href="">
        <img class="gallery-image" src="${a}" alt="Galllery Image">
            <ul class="gallery-item-description" data-exercises="${s}">
                <li class="name">${s}</li>
                <li class="filter">${n}</li>
            </ul>
        </a>
    </li>`).join("");r.gallery.innerHTML=t,c("hide")}function I(){p.page=1,O().then(e=>{const{results:t,totalPages:s,page:n}=e;if(M(t),s>1){const a=V(n,s);r.pagination.innerHTML=a}else r.pagination.innerHTML=""}).catch(e=>{c("hide"),y(e.message,"ERROR")})}I();r.musclesBtn.classList.add("active");r.musclesBtn.disabled=!0;r.buttons.addEventListener("click",e=>{Q(e);const t=e.target;t!==e.currentTarget&&(t===r.musclesBtn?(r.musclesBtn.disabled=!0,r.bodypartsBtn.disabled=!1,r.equipBtn.disabled=!1,p.filter="Muscles"):t===r.bodypartsBtn?(r.musclesBtn.disabled=!1,r.bodypartsBtn.disabled=!0,r.equipBtn.disabled=!1,p.filter="Body parts"):t===r.equipBtn&&(r.musclesBtn.disabled=!1,r.bodypartsBtn.disabled=!1,r.equipBtn.disabled=!0,p.filter="Equipment"),I())});let h=null;function Q(e){const t=e.target.nodeName==="BUTTON";r.musclesBtn.classList.remove("active"),t&&(e.target.classList.add("active"),h!==null&&h.classList.remove("active"),h=e.target,h===h&&h.classList.add("active"))}r.pagination.addEventListener("click",X);function V(e,t){let s="";for(;e<=t;e++)s+=`<button class="pagination-btn" type="button">${e}</button>`;return s}async function X(e){p.page=e.target.textContent,r.gallery.innerHTML="";try{const{results:t}=await O();M(t)}catch(t){console.log(t)}}const f="/fson97-group-10/assets/icons-7beb2351.svg",i={page:1,totalPages:1,totalItems:0,keyword:"",filter:"",filterGroup:"",limit:12},m=document.querySelector(".gallery");m&&(m.addEventListener("click",Z),m.classList.add("exercises-card"));const P=document.querySelector(".search-btn"),v=document.querySelector(".search-clear-btn"),u=document.querySelector(".search-input"),$=document.querySelector(".exercises-btns-div"),H=document.querySelector(".ex-search"),R=document.querySelector(".exercises-header"),N=document.querySelector("#pagination"),A=document.querySelector("#pager");function Z(e){if(e.preventDefault(),e.target.closest("ul").dataset.exercises){N.style.display="none",A.style.display="block",P.addEventListener("click",U),v.addEventListener("click",G),u.addEventListener("input",F),$.addEventListener("click",D),H.style.display="block";const t=document.querySelector(".exercises-button.active");i.filter=t.dataset.filter,i.filterGroup=e.target.closest("ul").dataset.exercises;const s=`Exercises / <span class="head-small">${i.filterGroup.charAt(0).toUpperCase()+i.filterGroup.slice(1)}</span>`;R.innerHTML=s,b(i.filter)}}function U(e){e.preventDefault(),u.value.length>3&&(i.page=1,i.keyword=u.value.trim().toLowerCase(),b(i.filter,!0))}function b(e,t=!0){m.innerHTML="",ee(e).then(s=>{i.totalPages=s.totalPages,i.totalItems=i.limit*s.totalPages,s.results.length===0?(m.innerHTML='<p class="ex-list-no-result">Unfortunately, <span class="accent-text">no results</span> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</p>',q()):(te(s.results),t&&q()),c("hide")}).catch(s=>{c("hide"),y(s.message,"ERROR")})}async function ee(e){return c(),u.value.length>3?i.keyword=u.value.trim().toLowerCase():i.keyword="",(await L.get("/exercises",{params:{[e]:i.filterGroup,keyword:i.keyword,page:i.page,limit:i.limit}})).data}function te(e){let t=e.map(n=>`<li class="exercise-item" data-id="${n._id}">
      <p class="ex-item-head">
      <span class="ex-item-head-group">
      <span class="ex-item-workout">WORKOUT</span>
      <span class="ex-rating-group">
      <span class="ex-item-rating">${Number(n.rating).toFixed(1)}</span>
      <svg class="ex-star-icon" width="18" height="18"><use href="${f}#icon-star"></use></svg>
      </span>
      </span>
      <a class="ex-item-start" href="#" data-id="${n._id}"><span>Start</span> <svg class="ex-arrow-icon" width="14" height="14"><use href="${f}#icon-arrow-start"></use></svg></a>
      </p>
      <span class="ex-title">
      <span class="ex-run-men"><svg class="ex-icon-run" width="14" height="14"><use href="${f}#icon-running_man"></use></svg></span>
      <h3 class="ex-item-name">${n.name.charAt(0).toUpperCase()+n.name.slice(1)}</h3>
      </span>
      <p class="ex-item-info">
      <span class="ex-info-group"><span class="ex-item-desc">Burned calories:</span> <span class="ex-item-value">${n.burnedCalories} / ${n.time} min</span></span>
      <span class="ex-info-group"><span class="ex-item-desc">Body part:</span> <span class="ex-item-value">${n.bodyPart.charAt(0).toUpperCase()+n.bodyPart.slice(1)}</span></span>
      <span class="ex-info-group"><span class="ex-item-desc">Target:</span> <span class="ex-item-value">${n.target.charAt(0).toUpperCase()+n.target.slice(1)}</span></span>
      </p>
      </li>`).join("");m.innerHTML=t;const s=$.getBoundingClientRect();window.scrollBy({top:s.y+s.height,left:0,behavior:"smooth"})}function q(){if(i.totalItems>i.limit)new Y("pager",{totalItems:i.totalItems,itemsPerPage:i.limit,visiblePages:3}).on("afterMove",function(t){i.page=t.page,b(i.filter,!1)});else{const e=document.querySelector("#pager");e.innerHTML=""}c("hide")}function G(){u.value="",v.style.visibility="hidden",i.page=1,b(i.filter,i.filterGroup)}function F(){u.value.length>0?v.style.visibility="visible":v.style.visibility="hidden"}function D(e){e.target.tagName==="BUTTON"&&(u.value="",H.style.display="none",m.innerHTML="",m.classList.remove("exercises-card"),P.removeEventListener("click",U),v.removeEventListener("click",G),u.removeEventListener("input",F),$.removeEventListener("click",D),A.style.display="none",N.style.display="block",i.page=1,R.innerHTML="Exercises")}const j=document.querySelector(".footer-form");async function se(e){return L.post("https://energyflow.b.goit.study/api/subscription",e)}j.addEventListener("submit",ae);function ae(e){e.preventDefault();const t=e.currentTarget.email.value.trim().toLowerCase();if(t===""){y("The email field is empty!","ERROR");return}const s={email:t};c("show"),se(s).then(({data:n,status:a})=>{a===201&&(c("hide"),y(n.message,"OK"))}).catch(n=>{n.response.status===409?(c("hide"),y("Subscription already exists!")):(y(n.message,"ERROR"),c("hide"))}).finally(j.reset())}const ne=document.querySelector(".gallery"),g=document.querySelector(".backdrop"),d=document.querySelector(".modal");ne.addEventListener("click",ie);async function ie(e){if(e.target===e.curentTarget)return;const t=e.target.closest(".ex-item-start");if(t===null)return;c();const s=t.dataset.id,n=await B(s);g.classList.remove("visually-hidden"),d.innerHTML="";const a=le(n);d.innerHTML=a,c("none"),d.classList.remove("visually-hidden"),document.querySelector(".add-favorite-btn").addEventListener("click",re),document.querySelector(".close-modal-btn").addEventListener("click",oe),g.addEventListener("click",x),document.addEventListener("keydown",E)}async function re(e){const t=e.target.closest(".add-favorite-btn"),s=t.dataset.id,n=localStorage.getItem("favorites");if(n){const a=JSON.parse(n);if(a.some(({_id:l})=>l===s))localStorage.setItem("favorites",JSON.stringify(a.filter(({_id:l})=>l!==s))),t.innerHTML=w();else try{const l=await B(s);localStorage.setItem("favorites",JSON.stringify([...a,l])),t.innerHTML=w("remove")}catch(l){console.error("Error fetching exercises card info:",l)}}else try{const a=await B(s);localStorage.setItem("favorites",JSON.stringify([a])),t.innerHTML=w("remove")}catch(a){console.error("Error fetching exercises card info:",a)}}function oe(){d.classList.add("visually-hidden"),g.classList.add("visually-hidden"),d.innerHTML="",document.removeEventListener("keydown",E),g.removeEventListener("click",x)}function x(e){e.target.closest(".modal")||(d.classList.add("visually-hidden"),g.classList.add("visually-hidden"),d.innerHTML="",document.removeEventListener("keydown",E),g.removeEventListener("click",x))}function E(e){e.preventDefault(),e.key==="Escape"&&(d.classList.add("visually-hidden"),g.classList.add("visually-hidden"),d.innerHTML="",document.removeEventListener("keydown",E),g.removeEventListener("click",x))}async function B(e){try{const t="https://energyflow.b.goit.study/api",s="exercises",{data:n}=await L.get(`${t}/${s}/${e}`);return n}catch(t){console.error(t)}}function w(e="add"){return e==="add"?`Add to favorites
        <svg class="icon-heart" width="18" height="18">
          <use href="${f}#icon-heart"></use>
        </svg>`:`Remove from
        <svg class="icon-heart" width="18" height="18">
          <use href="${f}#icon-heart"></use>
        </svg>`}function S(e){return e.charAt(0).toUpperCase()+e.slice(1)}function le({_id:e,bodyPart:t,equipment:s,gifUrl:n,name:a,target:o,description:l,rating:J,burnedCalories:K,time:_,popularity:z}){let T=!1;const C=localStorage.getItem("favorites");return C&&(T=JSON.parse(C).some(W=>W._id===e)),`<div class="modal-description-container">
      <button class="close-modal-btn">
        <svg class="close-modal-icon" width="24" height="24">
          <use href="${f}#icon-cross"></use>
        </svg>
      </button>
      <img
        class="modal-gif"
        src="${n}"
        alt="${a}"
        width="295"
        height="258"
      />
      <div class="text-container">
        <h4 class="modal-title">${a}</h4>
        <div class="rating-container">
          <p class="modal-exercises-rating">${J}</p>
          <svg class="star" width="15" height="15">
            <use href="${f}#icon-star"></use>
          </svg>
        </div>
        <ul class="description-list">
          <li class="description-item">
            <p>Target</p>
            <span>${S(o)}</span>
          </li>
          <li class="description-item">
            <p>Body Part</p>
            <span>${S(t)}</span>
          </li>
          <li class="description-item">
            <p>Equipment</p>
            <span>${S(s)}</span>
          </li>
          <li class="description-item">
            <p>Popular</p>
            <span>${z}</span>
          </li>
          <li class="description-item">
            <p>Burned Calories</p>
            <span>${K}/${_} min</span>
          </li>
        </ul>
        <p class="modal-description-text">${l}</p>
        <div class="modal-buttons-container">
          <button data-id="${e}" class="add-favorite-btn">
            ${T?"Remove from":"Add to favorites"}
            <svg class="icon-heart" width="18" height="18">
              <use href="${f}#icon-heart"></use>
            </svg>
          </button>
          <button data-id="${e}" class="give-rating-btn">
            Give a rating
          </button>
        </div>
      </div>
    </div>`}
//# sourceMappingURL=main-43257222.js.map
