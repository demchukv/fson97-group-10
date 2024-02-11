import{i as S,a as T}from"./vendor-ecc6328a.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function v(e,t="info"){t==="OK"?S.success({position:"topCenter",message:e}):t==="ERROR"?S.error({position:"topCenter",message:e}):S.info({position:"topCenter",message:e})}function f(e="show"){const t=document.querySelector(".loader"),n=document.querySelector(".overlay-rating");e==="show"?(t.style.display="inline-block",n.style.display="block"):(t.style.display="none",n.style.display="none")}function ce(e,t){const n=document.querySelector(e),o=n.getBoundingClientRect();o.height>100&&t==="set"&&(n.setAttribute("style","height:"+o.height+"px"),n.style.height=o.height+"px"),t==="unset"&&(n.removeAttribute("style"),n.style.height="auto")}const b=location.pathname.split("/").pop(),l=document.querySelector(".page-home a"),d=document.querySelector(".page-favorites a"),u=document.querySelector(".home-mob-menu"),m=document.querySelector(".favorites-mob-menu"),$={openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]")};$.openMenuBtn.addEventListener("click",I);$.closeMenuBtn.addEventListener("click",I);function I(){$.menu.classList.toggle("is-hidden")}function p(e,t,n,o){e.parentElement.classList.add("active"),n.classList.add("home-mob-menu"),t.parentElement.classList.remove("active"),o.classList.remove("home-mob-menu")}b==="index.html"||b===""?p(l,d,u,m):b==="favorites.html"&&p(d,l,m,u);l.addEventListener("click",e=>{p(l,d,u,m)});d.addEventListener("click",e=>{p(d,l,m,u)});u.addEventListener("click",e=>{p(l,d,u,m)});m.addEventListener("click",e=>{p(d,l,m,u)});const y="/fson97-group-10/assets/icons-7e6267de.svg";let C,N;const h=document.querySelector(".overlay-rating"),H=document.querySelector(".backdrop"),P=document.querySelector(".modal-rating"),A=document.querySelector(".close-modal-rating-btn"),D=document.querySelector(".star-container"),F=document.querySelector(".send-rating-btn");function j(){C=document.querySelector(".give-rating-btn"),C.addEventListener("click",G),A.addEventListener("click",L),h.addEventListener("click",K),D.addEventListener("click",J),F.addEventListener("click",U)}function B(){C.removeEventListener("click",G),A.removeEventListener("click",L),h.removeEventListener("click",K),D.removeEventListener("click",J),F.removeEventListener("click",U)}function G(e){e.preventDefault(),document.removeEventListener("keydown",g),N=e.target.dataset.id,X(),Q()}function Q(){P.classList.remove("visually-hidden"),h.style.display="block",H.style.display="none"}function J(e){if(e.target.tagName==="INPUT"){const t=e.target.value,n=document.querySelector(".rating-value");n.textContent=Number(t).toFixed(1)}}function U(e){e.preventDefault(),f();const t=document.querySelector(".rating-form"),n=t.elements.star.value,o=t.elements.email.value.trim().toLowerCase(),s=t.elements.review.value.trim(),i=/\S+@\S+\.\S+/;if(n===""){v("Please set your estimation!","ERROR"),f("hide");return}if(o===""||!i.test(o)){v("Please enter your email!","ERROR"),f("hide");return}W(n,o,s).then(function(r){v("Thank you! Your rating has been sent!","OK");const k=document.querySelector(".rating-value");k.textContent="0.0",t.reset(),L()}).catch(function(r){r.response.status===409?v("Such email already exists!"):r.response.status===404?v("Such exercise not found!"):v(r.message,"ERROR")}),f("hide")}async function W(e,t,n){const o="https://energyflow.b.goit.study/api",s="exercises";return e=Number(e),await T.patch(`${o}/${s}/${N}/rating/`,{rate:e,email:t,review:n})}function L(){P.classList.add("visually-hidden"),h.style.display="none",H.style.display="block",Z(),document.addEventListener("keydown",g)}function X(){document.querySelector(".modal").classList.add("visually-hidden")}function Z(){document.querySelector(".modal").classList.remove("visually-hidden")}function K(e){e.target.classList.contains("overlay-rating")&&L()}const ee=document.querySelector(".gallery, .favorites-card-content"),c=document.querySelector(".backdrop"),a=document.querySelector(".modal");ee.addEventListener("click",te);async function te(e){if(e.target===e.curentTarget)return;const t=e.target.closest(".ex-item-start");if(t===null)return;f();const n=t.dataset.id,o=await R(n);c.classList.remove("visually-hidden"),a.innerHTML="";const s=oe(o);a.innerHTML=s,j(),f("none"),document.querySelector(".star-inner").style.width=o.rating/5*100+"%",a.classList.remove("visually-hidden"),document.querySelector(".add-favorite-btn").addEventListener("click",ne),document.querySelector(".close-modal-btn").addEventListener("click",se),c.addEventListener("click",E),document.addEventListener("keydown",g)}async function ne(e){const t=e.target.closest(".add-favorite-btn"),n=t.dataset.id,o=localStorage.getItem("favorites");if(o){const s=JSON.parse(o);if(s.some(({_id:r})=>r===n))localStorage.setItem("favorites",JSON.stringify(s.filter(({_id:r})=>r!==n))),t.innerHTML=w();else{const r=await R(n);localStorage.setItem("favorites",JSON.stringify([...s,r])),t.innerHTML=w("remove")}}else{const s=await R(n);localStorage.setItem("favorites",JSON.stringify([s])),t.innerHTML=w("remove")}}function se(){a.classList.add("visually-hidden"),c.classList.add("visually-hidden"),a.innerHTML="",B(),document.removeEventListener("keydown",g),c.removeEventListener("click",E)}function E(e){e.target.closest(".modal")||(a.classList.add("visually-hidden"),c.classList.add("visually-hidden"),a.innerHTML="",B(),document.removeEventListener("keydown",g),c.removeEventListener("click",E))}function g(e){e.preventDefault(),e.key==="Escape"&&(a.classList.add("visually-hidden"),c.classList.add("visually-hidden"),a.innerHTML="",B(),document.removeEventListener("keydown",g),c.removeEventListener("click",E))}async function R(e){try{const t="https://energyflow.b.goit.study/api",n="exercises",{data:o}=await T.get(`${t}/${n}/${e}`);return o}catch(t){console.error(t)}}function w(e="add"){return e==="add"?`Add to favorites
        <svg class="icon-heart" width="18" height="18">
          <use href="${y}#icon-heart"></use>
        </svg>`:`Remove from
        <svg class="icon-heart" width="18" height="18">
          <use href="${y}#icon-heart"></use>
        </svg>`}function q(e){return e.charAt(0).toUpperCase()+e.slice(1)}function oe({_id:e,bodyPart:t,equipment:n,gifUrl:o,name:s,target:i,description:r,rating:k,burnedCalories:z,time:V,popularity:Y}){let O=!1;const M=localStorage.getItem("favorites");return M&&(O=JSON.parse(M).some(_=>_._id===e)),`<div class="modal-description-container">
      <button class="close-modal-btn" title="Close window">
        <svg class="close-modal-icon" width="24" height="24">
          <use href="${y}#icon-cross"></use>
        </svg>
      </button>
      <img
        class="modal-gif"
        src="${o}"
        alt="${s}"
        width="295"
        height="258"
      />
      <div class="text-container">
        <h4 class="modal-title">${s}</h4>
        <div class="rating-container">
          <p class="modal-exercises-rating">${k.toFixed(1)}</p>
          <div class="star-outer"><div class="star-inner"></div></div>
        </div>
        <ul class="description-list">
          <li class="description-item">
            <p>Target</p>
            <span>${q(i)}</span>
          </li>
          <li class="description-item">
            <p>Body Part</p>
            <span>${q(t)}</span>
          </li>
          <li class="description-item">
            <p>Equipment</p>
            <span>${q(n)}</span>
          </li>
          <li class="description-item">
            <p>Popular</p>
            <span>${Y}</span>
          </li>
          <li class="description-item">
            <p>Burned Calories</p>
            <span>${z}/${V} min</span>
          </li>
        </ul>
        <p class="modal-description-text">${r}</p>
        <div class="modal-buttons-container">
          <button data-id="${e}" class="add-favorite-btn">
            ${O?"Remove from":"Add to favorites"}
            <svg class="icon-heart" width="18" height="18">
              <use href="${y}#icon-heart"></use>
            </svg>
          </button>
          <button data-id="${e}" class="give-rating-btn">
            Give a rating
          </button>
        </div>
      </div>
    </div>`}const x=document.querySelector(".scroll-up-btn");window.addEventListener("scroll",ie);function ie(){window.scrollY>200?x.classList.add("scroll-up-btn--show"):x.classList.remove("scroll-up-btn--show")}x.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});export{f as g,y as i,ce as p,v as s};
//# sourceMappingURL=scroll-up-0df70787.js.map
