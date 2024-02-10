import{i as w,a as L,P as Q}from"./vendor-e8675f53.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function s(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(n){if(n.ep)return;n.ep=!0;const o=s(n);fetch(n.href,o)}})();function y(e,t="info"){t==="OK"?w.success({position:"topCenter",message:e}):t==="ERROR"?w.error({position:"topCenter",message:e}):w.info({position:"topCenter",message:e})}function l(e="show"){const t=document.querySelector(".loader");e==="show"?t.style.display="inline-block":t.style.display="none"}const r={gallery:document.querySelector(".gallery"),buttons:document.querySelector(".exercises-btns-div"),pagination:document.getElementById("pagination"),musclesBtn:document.querySelector('[data-filter="muscles"]'),bodypartsBtn:document.querySelector('[data-filter="bodypart"]'),equipBtn:document.querySelector('[data-filter="equipment"]')};L.defaults.baseURL="https://energyflow.b.goit.study/api";const p={perPage:12,page:1,filter:"Muscles",totalPages:1,totalItems:0};async function M(){return l(),(await L.get("/filters",{params:{filter:p.filter,page:p.page,limit:p.perPage}})).data}function I(e){r.gallery.innerHTML="";const t=e.map(({name:s,filter:a,imgUrl:n})=>`<li class="gallery-item">
        <a href="">
        <img class="gallery-image" src="${n}" alt="Galllery Image">
            <ul class="gallery-item-description" data-exercises="${s}">
                <li class="name">${s}</li>
                <li class="filter">${a}</li>
            </ul>
        </a>
    </li>`).join("");r.gallery.innerHTML=t,l("hide")}function P(){p.page=1,M().then(e=>{const{results:t,totalPages:s,page:a}=e;if(I(t),s>1){const n=X(a,s);r.pagination.innerHTML=n}else r.pagination.innerHTML=""}).catch(e=>{l("hide"),y(e.message,"ERROR")})}P();r.musclesBtn.classList.add("active");r.musclesBtn.disabled=!0;r.buttons.addEventListener("click",e=>{V(e);const t=e.target;t!==e.currentTarget&&(t===r.musclesBtn?(r.musclesBtn.disabled=!0,r.bodypartsBtn.disabled=!1,r.equipBtn.disabled=!1,p.filter="Muscles"):t===r.bodypartsBtn?(r.musclesBtn.disabled=!1,r.bodypartsBtn.disabled=!0,r.equipBtn.disabled=!1,p.filter="Body parts"):t===r.equipBtn&&(r.musclesBtn.disabled=!1,r.bodypartsBtn.disabled=!1,r.equipBtn.disabled=!0,p.filter="Equipment"),P())});let h=null;function V(e){const t=e.target.nodeName==="BUTTON";r.musclesBtn.classList.remove("active"),t&&(e.target.classList.add("active"),h!==null&&h.classList.remove("active"),h=e.target,h===h&&h.classList.add("active"))}r.pagination.addEventListener("click",Z);function X(e,t){let s="";for(;e<=t;e++)s+=`<button class="pagination-btn" type="button">${e}</button>`;return s}async function Z(e){p.page=e.target.textContent,r.gallery.innerHTML="";try{const{results:t}=await M();I(t)}catch(t){console.log(t)}}const f="/fson97-group-10/assets/icons-7beb2351.svg",i={page:1,totalPages:1,totalItems:0,keyword:"",filter:"",filterGroup:"",limit:12},m=document.querySelector(".gallery");m&&(m.addEventListener("click",ee),m.classList.add("exercises-card"));const H=document.querySelector(".search-btn"),v=document.querySelector(".search-clear-btn"),u=document.querySelector(".search-input"),$=document.querySelector(".exercises-btns-div"),R=document.querySelector(".ex-search"),N=document.querySelector(".exercises-header"),A=document.querySelector("#pagination"),U=document.querySelector("#pager");function ee(e){if(e.preventDefault(),e.target.closest("ul").dataset.exercises){A.style.display="none",U.style.display="block",H.addEventListener("click",G),v.addEventListener("click",F),u.addEventListener("input",D),$.addEventListener("click",j),R.style.display="block";const t=document.querySelector(".exercises-button.active");i.filter=t.dataset.filter,i.filterGroup=e.target.closest("ul").dataset.exercises;const s=`Exercises / <span class="head-small">${i.filterGroup.charAt(0).toUpperCase()+i.filterGroup.slice(1)}</span>`;N.innerHTML=s,b(i.filter)}}function G(e){e.preventDefault(),u.value.length>3&&(i.page=1,i.keyword=u.value.trim().toLowerCase(),b(i.filter,!0))}function b(e,t=!0){m.innerHTML="",te(e).then(s=>{i.totalPages=s.totalPages,i.totalItems=i.limit*s.totalPages,s.results.length===0?(m.innerHTML='<p class="ex-list-no-result">Unfortunately, <span class="accent-text">no results</span> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</p>',O()):(se(s.results),t&&O()),l("hide")}).catch(s=>{l("hide"),y(s.message,"ERROR")})}async function te(e){return l(),u.value.length>3?i.keyword=u.value.trim().toLowerCase():i.keyword="",(await L.get("/exercises",{params:{[e]:i.filterGroup,keyword:i.keyword,page:i.page,limit:i.limit}})).data}function se(e){let t=e.map(a=>`<li class="exercise-item" data-id="${a._id}">
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
      </li>`).join("");m.innerHTML=t;const s=$.getBoundingClientRect();window.scrollBy({top:s.y+s.height,left:0,behavior:"smooth"})}function O(){if(i.totalItems>i.limit)new Q("pager",{totalItems:i.totalItems,itemsPerPage:i.limit,visiblePages:3}).on("afterMove",function(t){i.page=t.page,b(i.filter,!1)});else{const e=document.querySelector("#pager");e.innerHTML=""}l("hide")}function F(){u.value="",v.style.visibility="hidden",i.page=1,b(i.filter,i.filterGroup)}function D(){u.value.length>0?v.style.visibility="visible":v.style.visibility="hidden"}function j(e){e.target.tagName==="BUTTON"&&(u.value="",R.style.display="none",m.innerHTML="",m.classList.remove("exercises-card"),H.removeEventListener("click",G),v.removeEventListener("click",F),u.removeEventListener("input",D),$.removeEventListener("click",j),U.style.display="none",A.style.display="block",i.page=1,N.innerHTML="Exercises")}const J=document.querySelector(".footer-form");async function ae(e){return L.post("https://energyflow.b.goit.study/api/subscription",e)}J.addEventListener("submit",ne);function ne(e){e.preventDefault();const t=e.currentTarget.email.value.trim().toLowerCase();if(t===""){y("The email field is empty!","ERROR");return}const s={email:t};l("show"),ae(s).then(({data:a,status:n})=>{n===201&&(l("hide"),y(a.message,"OK"))}).catch(a=>{a.response.status===409?(l("hide"),y("Subscription already exists!")):(y(a.message,"ERROR"),l("hide"))}).finally(J.reset())}const ie=document.querySelector(".gallery"),g=document.querySelector(".backdrop"),d=document.querySelector(".modal");ie.addEventListener("click",re);async function re(e){if(e.target===e.curentTarget)return;const t=e.target.closest(".ex-item-start");if(t===null)return;l();const s=t.dataset.id,a=await T(s);g.classList.remove("visually-hidden"),d.innerHTML="";const n=le(a);d.innerHTML=n,l("none"),d.classList.remove("visually-hidden"),document.querySelector(".add-favorite-btn").addEventListener("click",oe),document.querySelector(".close-modal-btn").addEventListener("click",x),g.addEventListener("click",E),document.addEventListener("keydown",k)}async function oe(e){const t=e.target.closest(".add-favorite-btn"),s=t.dataset.id,a=localStorage.getItem("favorites");if(a){const n=JSON.parse(a);if(n.some(({_id:c})=>c===s))localStorage.setItem("favorites",JSON.stringify(n.filter(({_id:c})=>c!==s))),t.innerHTML=B();else{const c=await T(s);localStorage.setItem("favorites",JSON.stringify([...n,c])),t.innerHTML=B("remove")}}else{const n=await T(s);localStorage.setItem("favorites",JSON.stringify([n])),t.innerHTML=B("remove")}}function x(){d.classList.add("visually-hidden"),g.classList.add("visually-hidden"),d.innerHTML="",document.removeEventListener("keydown",k),closeBtn.removeEventListener("click",x),g.removeEventListener("click",E)}function E(e){e.target.closest(".modal")||(d.classList.add("visually-hidden"),g.classList.add("visually-hidden"),d.innerHTML="",document.removeEventListener("keydown",k),closeBtn.removeEventListener("click",x),g.removeEventListener("click",E))}function k(e){e.preventDefault(),e.key==="Escape"&&(d.classList.add("visually-hidden"),g.classList.add("visually-hidden"),d.innerHTML="",document.removeEventListener("keydown",k),closeBtn.removeEventListener("click",x),g.removeEventListener("click",E))}async function T(e){try{const t="https://energyflow.b.goit.study/api",s="exercises",{data:a}=await L.get(`${t}/${s}/${e}`);return a}catch(t){console.error(t)}}function B(e="add"){return e==="add"?`Add to favorites
        <svg class="icon-heart" width="18" height="18">
          <use href="${f}#icon-heart"></use>
        </svg>`:`Remove from
        <svg class="icon-heart" width="18" height="18">
          <use href="${f}#icon-heart"></use>
        </svg>`}function S(e){return e.charAt(0).toUpperCase()+e.slice(1)}function le({_id:e,bodyPart:t,equipment:s,gifUrl:a,name:n,target:o,description:c,rating:_,burnedCalories:K,time:z,popularity:W}){let C=!1;const q=localStorage.getItem("favorites");return q&&(C=JSON.parse(q).some(Y=>Y._id===e)),`<div class="modal-description-container">
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
          <p class="modal-exercises-rating">${_}</p>
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
            <span>${W}</span>
          </li>
          <li class="description-item">
            <p>Burned Calories</p>
            <span>${K}/${z} min</span>
          </li>
        </ul>
        <p class="modal-description-text">${c}</p>
        <div class="modal-buttons-container">
          <button data-id="64f389465ae26083f39b17a4" class="add-favorite-btn">
            ${C?"Remove from":"Add to favorites"}
            <svg class="icon-heart" width="18" height="18">
              <use href="${f}#icon-heart"></use>
            </svg>
          </button>
          <button data-id="64f389465ae26083f39b17a4" class="give-rating-btn">
            Give a rating
          </button>
        </div>
      </div>
    </div>`}
//# sourceMappingURL=main-6efcf45e.js.map
