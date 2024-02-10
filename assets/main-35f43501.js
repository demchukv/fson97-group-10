import{i as w,a as h,P as de}from"./vendor-e8675f53.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function s(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(n){if(n.ep)return;n.ep=!0;const o=s(n);fetch(n.href,o)}})();function d(e,t="info"){t==="OK"?w.success({position:"topCenter",message:e}):t==="ERROR"?w.error({position:"topCenter",message:e}):w.info({position:"topCenter",message:e})}function l(e="show"){const t=document.querySelector(".loader");e==="show"?t.style.display="inline-block":t.style.display="none"}const r={gallery:document.querySelector(".gallery"),buttons:document.querySelector(".exercises-btns-div"),pagination:document.getElementById("pagination"),musclesBtn:document.querySelector('[data-filter="muscles"]'),bodypartsBtn:document.querySelector('[data-filter="bodypart"]'),equipBtn:document.querySelector('[data-filter="equipment"]')};h.defaults.baseURL="https://energyflow.b.goit.study/api";const m={perPage:12,page:1,filter:"Muscles",totalPages:1,totalItems:0};async function H(){return l(),(await h.get("/filters",{params:{filter:m.filter,page:m.page,limit:m.perPage}})).data}function N(e){r.gallery.innerHTML="";const t=e.map(({name:s,filter:a,imgUrl:n})=>`<li class="gallery-item">
        <a href="">
        <img class="gallery-image" src="${n}" alt="Galllery Image">
            <ul class="gallery-item-description" data-exercises="${s}">
                <li class="name">${s}</li>
                <li class="filter">${a}</li>
            </ul>
        </a>
    </li>`).join("");r.gallery.innerHTML=t,l("hide")}function U(){m.page=1,H().then(e=>{const{results:t,totalPages:s,page:a}=e;if(N(t),s>1){const n=pe(a,s);r.pagination.innerHTML=n}else r.pagination.innerHTML=""}).catch(e=>{l("hide"),d(e.message,"ERROR")})}U();r.musclesBtn.classList.add("active");r.musclesBtn.disabled=!0;r.buttons.addEventListener("click",e=>{ue(e);const t=e.target;t!==e.currentTarget&&(t===r.musclesBtn?(r.musclesBtn.disabled=!0,r.bodypartsBtn.disabled=!1,r.equipBtn.disabled=!1,m.filter="Muscles"):t===r.bodypartsBtn?(r.musclesBtn.disabled=!1,r.bodypartsBtn.disabled=!0,r.equipBtn.disabled=!1,m.filter="Body parts"):t===r.equipBtn&&(r.musclesBtn.disabled=!1,r.bodypartsBtn.disabled=!1,r.equipBtn.disabled=!0,m.filter="Equipment"),U())});let y=null;function ue(e){const t=e.target.nodeName==="BUTTON";r.musclesBtn.classList.remove("active"),t&&(e.target.classList.add("active"),y!==null&&y.classList.remove("active"),y=e.target,y===y&&y.classList.add("active"))}r.pagination.addEventListener("click",me);function pe(e,t){let s="";for(;e<=t;e++)s+=`<button class="pagination-btn" type="button">${e}</button>`;return s}async function me(e){m.page=e.target.textContent,r.gallery.innerHTML="";try{const{results:t}=await H();N(t)}catch(t){console.log(t)}}const f="/fson97-group-10/assets/icons-7beb2351.svg",i={page:1,totalPages:1,totalItems:0,keyword:"",filter:"",filterGroup:"",limit:12},g=document.querySelector(".gallery");g&&(g.addEventListener("click",fe),g.classList.add("exercises-card"));const A=document.querySelector(".search-btn"),L=document.querySelector(".search-clear-btn"),p=document.querySelector(".search-input"),$=document.querySelector(".exercises-btns-div"),G=document.querySelector(".ex-search"),D=document.querySelector(".exercises-header"),F=document.querySelector("#pagination"),j=document.querySelector("#pager");function fe(e){if(e.preventDefault(),e.target.closest("ul").dataset.exercises){F.style.display="none",j.style.display="block",A.addEventListener("click",J),L.addEventListener("click",K),p.addEventListener("input",_),$.addEventListener("click",z),G.style.display="block";const t=document.querySelector(".exercises-button.active");i.filter=t.dataset.filter,i.filterGroup=e.target.closest("ul").dataset.exercises;const s=`Exercises / <span class="head-small">${i.filterGroup.charAt(0).toUpperCase()+i.filterGroup.slice(1)}</span>`;D.innerHTML=s,b(i.filter)}}function J(e){e.preventDefault(),p.value.length>3&&(i.page=1,i.keyword=p.value.trim().toLowerCase(),b(i.filter,!0))}function b(e,t=!0){g.innerHTML="",ge(e).then(s=>{i.totalPages=s.totalPages,i.totalItems=i.limit*s.totalPages,s.results.length===0?(g.innerHTML='<p class="ex-list-no-result">Unfortunately, <span class="accent-text">no results</span> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</p>',I()):(ve(s.results),t&&I()),l("hide")}).catch(s=>{l("hide"),d(s.message,"ERROR")})}async function ge(e){return l(),p.value.length>3?i.keyword=p.value.trim().toLowerCase():i.keyword="",(await h.get("/exercises",{params:{[e]:i.filterGroup,keyword:i.keyword,page:i.page,limit:i.limit}})).data}function ve(e){let t=e.map(a=>`<li class="exercise-item" data-id="${a._id}">
      <p class="ex-item-head">
      <span class="ex-item-head-group">
      <span class="ex-item-workout">WORKOUT</span>
      <span class="ex-rating-group">
      <span class="ex-item-rating">${Number(a.rating).toFixed(1)}</span>
      <svg class="ex-star-icon" width="18" height="18"><use href="${f}#icon-star"></use></svg>
      </span>
      </span>
      <a class="ex-item-start" href="#" data-id="${a._id}"><span>Start</span> <svg class="ex-arrow-icon" width="14" height="14"><use href="${f}#icon-arrow-start"></use></svg></a>
      </p>
      <span class="ex-title">
      <span class="ex-run-men"><svg class="ex-icon-run" width="14" height="14"><use href="${f}#icon-running_man"></use></svg></span>
      <h3 class="ex-item-name">${a.name.charAt(0).toUpperCase()+a.name.slice(1)}</h3>
      </span>
      <p class="ex-item-info">
      <span class="ex-info-group"><span class="ex-item-desc">Burned calories:</span> <span class="ex-item-value">${a.burnedCalories} / ${a.time} min</span></span>
      <span class="ex-info-group"><span class="ex-item-desc">Body part:</span> <span class="ex-item-value">${a.bodyPart.charAt(0).toUpperCase()+a.bodyPart.slice(1)}</span></span>
      <span class="ex-info-group"><span class="ex-item-desc">Target:</span> <span class="ex-item-value">${a.target.charAt(0).toUpperCase()+a.target.slice(1)}</span></span>
      </p>
      </li>`).join("");g.innerHTML=t;const s=$.getBoundingClientRect();window.scrollBy({top:s.y+s.height,left:0,behavior:"smooth"})}function I(){if(i.totalItems>i.limit)new de("pager",{totalItems:i.totalItems,itemsPerPage:i.limit,visiblePages:3}).on("afterMove",function(t){i.page=t.page,b(i.filter,!1)});else{const e=document.querySelector("#pager");e.innerHTML=""}l("hide")}function K(){p.value="",L.style.visibility="hidden",i.page=1,b(i.filter,i.filterGroup)}function _(){p.value.length>0?L.style.visibility="visible":L.style.visibility="hidden"}function z(e){e.target.tagName==="BUTTON"&&(p.value="",G.style.display="none",g.innerHTML="",g.classList.remove("exercises-card"),A.removeEventListener("click",J),L.removeEventListener("click",K),p.removeEventListener("input",_),$.removeEventListener("click",z),j.style.display="none",F.style.display="block",i.page=1,D.innerHTML="Exercises")}const V=document.querySelector(".footer-form");async function ye(e){return h.post("https://energyflow.b.goit.study/api/subscription",e)}V.addEventListener("submit",he);function he(e){e.preventDefault();const t=e.currentTarget.email.value.trim().toLowerCase();if(t===""){d("The email field is empty!","ERROR");return}const s={email:t};l("show"),ye(s).then(({data:a,status:n})=>{n===201&&(l("hide"),d(a.message,"OK"))}).catch(a=>{a.response.status===409?(l("hide"),d("Subscription already exists!")):(d(a.message,"ERROR"),l("hide"))}).finally(V.reset())}let q,Y;const E=document.querySelector(".overlay-rating"),W=document.querySelector(".backdrop"),Q=document.querySelector(".modal-rating"),X=document.querySelector(".close-modal-rating-btn"),Z=document.querySelector(".star-container"),ee=document.querySelector(".send-rating-btn");function Le(){q=document.querySelector(".give-rating-btn"),q.addEventListener("click",te),X.addEventListener("click",O),E.addEventListener("click",ae),Z.addEventListener("click",se),ee.addEventListener("click",ne)}function T(){q.removeEventListener("click",te),X.removeEventListener("click",O),E.removeEventListener("click",ae),Z.removeEventListener("click",se),ee.removeEventListener("click",ne)}function te(e){e.preventDefault(),Y=e.target.dataset.id,ke(),be()}function be(){Q.classList.remove("visually-hidden"),E.style.display="block",W.style.display="none"}function se(e){if(e.target.tagName==="INPUT"){const t=e.target.value,s=document.querySelector(".rating-value");s.textContent=Number(t).toFixed(1)}}function ne(e){e.preventDefault(),l();const t=document.querySelector(".rating-form"),s=t.elements.star.value,a=t.elements.email.value.trim().toLowerCase(),n=t.elements.review.value.trim();if(s===""){d("Please set your estimation!","ERROR"),l("hide");return}if(a===""){d("Please enter your email!","ERROR"),l("hide");return}Ee(s,a,n).then(function(o){console.log(o),d("Thank you! Your rating has been sent!","OK");const c=document.querySelector(".rating-value");c.textContent="0.0"}).catch(function(o){o.response.status===409?d("Such email already exists!"):o.response.status===404?d("Such exercise not found!"):d(o.message,"ERROR")}).finally(()=>{l("hide"),t.reset()})}async function Ee(e,t,s){const a="https://energyflow.b.goit.study/api",n="exercises";return e=Number(e),await h.patch(`${a}/${n}/${Y}/rating/`,{rate:e,email:t,review:s})}function O(){Q.classList.add("visually-hidden"),E.style.display="none",W.style.display="block",xe()}function ke(){document.querySelector(".modal").classList.add("visually-hidden")}function xe(){document.querySelector(".modal").classList.remove("visually-hidden")}function ae(e){e.target.classList.contains("overlay-rating")&&O()}const Se=document.querySelector(".gallery"),v=document.querySelector(".backdrop"),u=document.querySelector(".modal");Se.addEventListener("click",we);async function we(e){if(e.target===e.curentTarget)return;const t=e.target.closest(".ex-item-start");if(t===null)return;l();const s=t.dataset.id,a=await R(s);v.classList.remove("visually-hidden"),u.innerHTML="";const n=Ce(a);u.innerHTML=n,Le(),l("none"),u.classList.remove("visually-hidden"),document.querySelector(".add-favorite-btn").addEventListener("click",Be),document.querySelector(".close-modal-btn").addEventListener("click",k),v.addEventListener("click",x),document.addEventListener("keydown",S)}async function Be(e){const t=e.target.closest(".add-favorite-btn"),s=t.dataset.id,a=localStorage.getItem("favorites");if(a){const n=JSON.parse(a);if(n.some(({_id:c})=>c===s))localStorage.setItem("favorites",JSON.stringify(n.filter(({_id:c})=>c!==s))),t.innerHTML=B();else try{const c=await R(s);localStorage.setItem("favorites",JSON.stringify([...n,c])),t.innerHTML=B("remove")}catch(c){console.error("Error fetching exercises card info:",c)}}else try{const n=await R(s);localStorage.setItem("favorites",JSON.stringify([n])),t.innerHTML=B("remove")}catch(n){console.error("Error fetching exercises card info:",n)}}function k(){u.classList.add("visually-hidden"),v.classList.add("visually-hidden"),u.innerHTML="",document.removeEventListener("keydown",S),T(),closeBtn.removeEventListener("click",k),v.removeEventListener("click",x)}function x(e){e.target.closest(".modal")||(u.classList.add("visually-hidden"),v.classList.add("visually-hidden"),u.innerHTML="",document.removeEventListener("keydown",S),T(),closeBtn.removeEventListener("click",k),v.removeEventListener("click",x))}function S(e){e.preventDefault(),e.key==="Escape"&&(u.classList.add("visually-hidden"),v.classList.add("visually-hidden"),u.innerHTML="",document.removeEventListener("keydown",S),T(),closeBtn.removeEventListener("click",k),v.removeEventListener("click",x))}async function R(e){try{const t="https://energyflow.b.goit.study/api",s="exercises",{data:a}=await h.get(`${t}/${s}/${e}`);return a}catch(t){console.error(t)}}function B(e="add"){return e==="add"?`Add to favorites
        <svg class="icon-heart" width="18" height="18">
          <use href="${f}#icon-heart"></use>
        </svg>`:`Remove from
        <svg class="icon-heart" width="18" height="18">
          <use href="${f}#icon-heart"></use>
        </svg>`}function C(e){return e.charAt(0).toUpperCase()+e.slice(1)}function Ce({_id:e,bodyPart:t,equipment:s,gifUrl:a,name:n,target:o,description:c,rating:ie,burnedCalories:re,time:oe,popularity:le}){let M=!1;const P=localStorage.getItem("favorites");return P&&(M=JSON.parse(P).some(ce=>ce._id===e)),`<div class="modal-description-container">
      <button class="close-modal-btn">
        <svg class="close-modal-icon" width="24" height="24">
          <use href="${f}#icon-cross"></use>
        </svg>
      </button>
      <img
        class="modal-gif"
        src="${a}"
        alt="${n}"
        width="295"
        height="258"
      />
      <div class="text-container">
        <h4 class="modal-title">${n}</h4>
        <div class="rating-container">
          <p class="modal-exercises-rating">${ie}</p>
          <svg class="star" width="15" height="15">
            <use href="${f}#icon-star"></use>
          </svg>
        </div>
        <ul class="description-list">
          <li class="description-item">
            <p>Target</p>
            <span>${C(o)}</span>
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
            ${M?"Remove from":"Add to favorites"}
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
//# sourceMappingURL=main-35f43501.js.map
