import{i as k,a as T}from"./vendor-ecc6328a.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function s(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(n){if(n.ep)return;n.ep=!0;const i=s(n);fetch(n.href,i)}})();function v(e,t="info"){t==="OK"?k.success({position:"topCenter",message:e}):t==="ERROR"?k.error({position:"topCenter",message:e}):k.info({position:"topCenter",message:e})}function f(e="show"){const t=document.querySelector(".loader");e==="show"?t.style.display="inline-block":t.style.display="none"}const b=location.pathname.split("/").pop(),l=document.querySelector(".page-home a"),d=document.querySelector(".page-favorites a"),u=document.querySelector(".home-mob-menu"),m=document.querySelector(".favorites-mob-menu"),O={openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]")};O.openMenuBtn.addEventListener("click",I);O.closeMenuBtn.addEventListener("click",I);function I(){O.menu.classList.toggle("is-hidden")}function p(e,t,s,o){e.parentElement.classList.add("active"),s.classList.add("home-mob-menu"),t.parentElement.classList.remove("active"),o.classList.remove("home-mob-menu")}b==="index.html"||b===""?p(l,d,u,m):b==="favorites.html"&&p(d,l,m,u);l.addEventListener("click",e=>{p(l,d,u,m)});d.addEventListener("click",e=>{p(d,l,m,u)});u.addEventListener("click",e=>{p(l,d,u,m)});m.addEventListener("click",e=>{p(d,l,m,u)});const y="/fson97-group-10/assets/icons-7e6267de.svg";let C,N;const h=document.querySelector(".overlay-rating"),P=document.querySelector(".backdrop"),H=document.querySelector(".modal-rating"),A=document.querySelector(".close-modal-rating-btn"),D=document.querySelector(".star-container"),F=document.querySelector(".send-rating-btn");function j(){C=document.querySelector(".give-rating-btn"),C.addEventListener("click",G),A.addEventListener("click",L),h.addEventListener("click",K),D.addEventListener("click",J),F.addEventListener("click",U)}function x(){C.removeEventListener("click",G),A.removeEventListener("click",L),h.removeEventListener("click",K),D.removeEventListener("click",J),F.removeEventListener("click",U)}function G(e){e.preventDefault(),document.removeEventListener("keydown",g),N=e.target.dataset.id,X(),Q()}function Q(){H.classList.remove("visually-hidden"),h.style.display="block",P.style.display="none"}function J(e){if(e.target.tagName==="INPUT"){const t=e.target.value,s=document.querySelector(".rating-value");s.textContent=Number(t).toFixed(1)}}function U(e){e.preventDefault(),f();const t=document.querySelector(".rating-form"),s=t.elements.star.value,o=t.elements.email.value.trim().toLowerCase(),n=t.elements.review.value.trim(),i=/\S+@\S+\.\S+/;if(s===""){v("Please set your estimation!","ERROR"),f("hide");return}if(o===""||!i.test(o)){v("Please enter your email!","ERROR"),f("hide");return}W(s,o,n).then(function(r){v("Thank you! Your rating has been sent!","OK");const S=document.querySelector(".rating-value");S.textContent="0.0",t.reset(),L()}).catch(function(r){r.response.status===409?v("Such email already exists!"):r.response.status===404?v("Such exercise not found!"):v(r.message,"ERROR")}),f("hide")}async function W(e,t,s){const o="https://energyflow.b.goit.study/api",n="exercises";return e=Number(e),await T.patch(`${o}/${n}/${N}/rating/`,{rate:e,email:t,review:s})}function L(){H.classList.add("visually-hidden"),h.style.display="none",P.style.display="block",Z(),document.addEventListener("keydown",g)}function X(){document.querySelector(".modal").classList.add("visually-hidden")}function Z(){document.querySelector(".modal").classList.remove("visually-hidden")}function K(e){e.target.classList.contains("overlay-rating")&&L()}const ee=document.querySelector(".gallery, .favorites-card-content"),c=document.querySelector(".backdrop"),a=document.querySelector(".modal");ee.addEventListener("click",te);async function te(e){if(e.target===e.curentTarget)return;const t=e.target.closest(".ex-item-start");if(t===null)return;f();const s=t.dataset.id,o=await R(s);c.classList.remove("visually-hidden"),a.innerHTML="";const n=oe(o);a.innerHTML=n,j(),f("none"),document.querySelector(".star-inner").style.width=o.rating/5*100+"%",a.classList.remove("visually-hidden"),document.querySelector(".add-favorite-btn").addEventListener("click",ne),document.querySelector(".close-modal-btn").addEventListener("click",se),c.addEventListener("click",E),document.addEventListener("keydown",g)}async function ne(e){const t=e.target.closest(".add-favorite-btn"),s=t.dataset.id,o=localStorage.getItem("favorites");if(o){const n=JSON.parse(o);if(n.some(({_id:r})=>r===s))localStorage.setItem("favorites",JSON.stringify(n.filter(({_id:r})=>r!==s))),t.innerHTML=w();else{const r=await R(s);localStorage.setItem("favorites",JSON.stringify([...n,r])),t.innerHTML=w("remove")}}else{const n=await R(s);localStorage.setItem("favorites",JSON.stringify([n])),t.innerHTML=w("remove")}}function se(){a.classList.add("visually-hidden"),c.classList.add("visually-hidden"),a.innerHTML="",x(),document.removeEventListener("keydown",g),c.removeEventListener("click",E)}function E(e){e.target.closest(".modal")||(a.classList.add("visually-hidden"),c.classList.add("visually-hidden"),a.innerHTML="",x(),document.removeEventListener("keydown",g),c.removeEventListener("click",E))}function g(e){e.preventDefault(),e.key==="Escape"&&(a.classList.add("visually-hidden"),c.classList.add("visually-hidden"),a.innerHTML="",x(),document.removeEventListener("keydown",g),c.removeEventListener("click",E))}async function R(e){try{const t="https://energyflow.b.goit.study/api",s="exercises",{data:o}=await T.get(`${t}/${s}/${e}`);return o}catch(t){console.error(t)}}function w(e="add"){return e==="add"?`Add to favorites
        <svg class="icon-heart" width="18" height="18">
          <use href="${y}#icon-heart"></use>
        </svg>`:`Remove from
        <svg class="icon-heart" width="18" height="18">
          <use href="${y}#icon-heart"></use>
        </svg>`}function q(e){return e.charAt(0).toUpperCase()+e.slice(1)}function oe({_id:e,bodyPart:t,equipment:s,gifUrl:o,name:n,target:i,description:r,rating:S,burnedCalories:z,time:V,popularity:Y}){let M=!1;const B=localStorage.getItem("favorites");return B&&(M=JSON.parse(B).some(_=>_._id===e)),`<div class="modal-description-container">
      <button class="close-modal-btn">
        <svg class="close-modal-icon" width="24" height="24">
          <use href="${y}#icon-cross"></use>
        </svg>
      </button>
      <img
        class="modal-gif"
        src="${o}"
        alt="${n}"
        width="295"
        height="258"
      />
      <div class="text-container">
        <h4 class="modal-title">${n}</h4>
        <div class="rating-container">
          <p class="modal-exercises-rating">${S.toFixed(1)}</p>
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
            <span>${q(s)}</span>
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
            ${M?"Remove from":"Add to favorites"}
            <svg class="icon-heart" width="18" height="18">
              <use href="${y}#icon-heart"></use>
            </svg>
          </button>
          <button data-id="${e}" class="give-rating-btn">
            Give a rating
          </button>
        </div>
      </div>
    </div>`}const $=document.querySelector(".scroll-up-btn");window.addEventListener("scroll",ie);function ie(){window.scrollY>200?$.classList.add("scroll-up-btn--show"):$.classList.remove("scroll-up-btn--show")}$.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});export{f as g,y as i,v as s};
//# sourceMappingURL=scroll-up-7b2982ee.js.map
