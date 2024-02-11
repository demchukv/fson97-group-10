import{i as x,a as H}from"./vendor-ecc6328a.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();function g(e,t="info"){t==="OK"?x.success({position:"topCenter",message:e}):t==="ERROR"?x.error({position:"topCenter",message:e}):x.info({position:"topCenter",message:e})}function y(e="show"){const t=document.querySelector(".loader"),n=document.querySelector(".overlay-rating");e==="show"?(t.style.display="inline-block",n.style.display="block"):(t.style.display="none",n.style.display="none")}function ce(e,t){const n=document.querySelector(e),i=n.getBoundingClientRect();i.height>100&&t==="set"&&(n.setAttribute("style","height:"+i.height+"px"),n.style.height=i.height+"px"),t==="unset"&&(n.removeAttribute("style"),n.style.height="auto")}const B=location.pathname.split("/").pop(),l=document.querySelector(".page-home a"),d=document.querySelector(".page-favorites a"),u=document.querySelector(".home-mob-menu"),m=document.querySelector(".favorites-mob-menu"),N={openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]")};N.openMenuBtn.addEventListener("click",P);N.closeMenuBtn.addEventListener("click",P);function P(){N.menu.classList.toggle("is-hidden")}function h(e,t,n,i){e.parentElement.classList.add("active"),n.classList.add("home-mob-menu"),t.parentElement.classList.remove("active"),i.classList.remove("home-mob-menu")}B==="index.html"||B===""?h(l,d,u,m):B==="favorites.html"&&h(d,l,m,u);l.addEventListener("click",e=>{h(l,d,u,m)});d.addEventListener("click",e=>{h(d,l,m,u)});u.addEventListener("click",e=>{h(l,d,u,m)});m.addEventListener("click",e=>{h(d,l,m,u)});const b="/fson97-group-10/assets/icons-7e6267de.svg";let M,A;const w=document.querySelector(".overlay-rating"),D=document.querySelector(".backdrop"),F=document.querySelector(".modal-rating"),G=document.querySelector(".close-modal-rating-btn"),J=document.querySelector(".star-container"),U=document.querySelector(".send-rating-btn");function Q(){M=document.querySelector(".give-rating-btn"),M.addEventListener("click",K),G.addEventListener("click",q),w.addEventListener("click",Y),J.addEventListener("click",z),U.addEventListener("click",V)}function I(){M.removeEventListener("click",K),G.removeEventListener("click",q),w.removeEventListener("click",Y),J.removeEventListener("click",z),U.removeEventListener("click",V)}function K(e){e.preventDefault(),document.removeEventListener("keydown",L),A=e.target.dataset.id,Z(),W()}function W(){F.classList.remove("visually-hidden"),w.style.display="block",D.style.display="none"}function z(e){if(e.target.tagName==="INPUT"){const t=e.target.value,n=document.querySelector(".rating-value");n.textContent=Number(t).toFixed(1)}}function V(e){e.preventDefault(),y();const t=document.querySelector(".rating-form"),n=t.elements.star.value,i=t.elements.email.value.trim().toLowerCase(),s=t.elements.review.value.trim(),o=/\S+@\S+\.\S+/;if(n===""){g("Please set your estimation!","ERROR"),y("hide");return}if(i===""||!o.test(i)){g("Please enter your email!","ERROR"),y("hide");return}X(n,i,s).then(function(r){g("Thank you! Your rating has been sent!","OK");const E=document.querySelector(".rating-value");E.textContent="0.0",t.reset(),q()}).catch(function(r){r.response.status===409?g("Such email already exists!"):r.response.status===404?g("Such exercise not found!"):g(r.message,"ERROR")}),y("hide")}async function X(e,t,n){const i="https://energyflow.b.goit.study/api",s="exercises";return e=Number(e),await H.patch(`${i}/${s}/${A}/rating/`,{rate:e,email:t,review:n})}function q(){F.classList.add("visually-hidden"),w.style.display="none",D.style.display="block",ee(),document.addEventListener("keydown",L)}function Z(){document.querySelector(".modal").classList.add("visually-hidden")}function ee(){document.querySelector(".modal").classList.remove("visually-hidden")}function Y(e){e.target.classList.contains("overlay-rating")&&q()}const te=document.querySelector(".gallery, .favorites-card-content"),c=document.querySelector(".backdrop"),a=document.querySelector(".modal");te.addEventListener("click",ne);async function ne(e){if(e.preventDefault(),e.target===e.curentTarget)return;const t=e.target.closest(".ex-item-start");if(t===null)return;y();const n=t.dataset.id,i=await ie(n);c.classList.remove("visually-hidden"),a.innerHTML="";const s=oe(i);a.innerHTML=s,Q(),y("none"),document.querySelector(".star-inner").style.width=i.rating/5*100+"%",a.classList.remove("visually-hidden"),document.querySelector(".add-favorite-btn").addEventListener("click",E),document.querySelector(".close-modal-btn").addEventListener("click",se),c.addEventListener("click",R),document.addEventListener("keydown",L);function E(C){const v=C.target.closest(".add-favorite-btn"),k=v.dataset.id,S=localStorage.getItem("favorites");if(S){const f=JSON.parse(S);if(f.some(({_id:p})=>p===k)){localStorage.setItem("favorites",JSON.stringify(f.filter(({_id:j})=>j!==k))),v.innerHTML=$();const p=document.getElementById("card-"+k);p&&p.remove()}else localStorage.setItem("favorites",JSON.stringify([...f,i])),v.innerHTML=$("remove")}else localStorage.setItem("favorites",JSON.stringify([i])),v.innerHTML=$("remove")}}function se(){a.classList.add("visually-hidden"),c.classList.add("visually-hidden"),a.innerHTML="",I(),document.removeEventListener("keydown",L),c.removeEventListener("click",R)}function R(e){e.target.closest(".modal")||(a.classList.add("visually-hidden"),c.classList.add("visually-hidden"),a.innerHTML="",I(),document.removeEventListener("keydown",L),c.removeEventListener("click",R))}function L(e){e.preventDefault(),e.key==="Escape"&&(a.classList.add("visually-hidden"),c.classList.add("visually-hidden"),a.innerHTML="",I(),document.removeEventListener("keydown",L),c.removeEventListener("click",R))}async function ie(e){try{const t="https://energyflow.b.goit.study/api",n="exercises",{data:i}=await H.get(`${t}/${n}/${e}`);return i}catch(t){console.error(t)}}function $(e="add"){return e==="add"?`Add to favorites
        <svg class="icon-heart" width="18" height="18">
          <use href="${b}#icon-heart"></use>
        </svg>`:`Remove from
        <svg class="icon-heart" width="18" height="18">
          <use href="${b}#icon-heart"></use>
        </svg>`}function O(e){return e.charAt(0).toUpperCase()+e.slice(1)}function oe({_id:e,bodyPart:t,equipment:n,gifUrl:i,name:s,target:o,description:r,rating:E,burnedCalories:C,time:v,popularity:k}){let S=!1;const f=localStorage.getItem("favorites");return f&&(S=JSON.parse(f).some(p=>p._id===e)),`<div class="modal-description-container">
      <button class="close-modal-btn" title="Close window">
        <svg class="close-modal-icon" width="24" height="24">
          <use href="${b}#icon-cross"></use>
        </svg>
      </button>
      <div class="modal-gif-container">
        <picture>
          <source
            media="(max-width:767.98px)"
            type="image/gif"
            width="295"
            height="258"
          />
          <source
            media="(min-width:768px)"
            type="image/gif"
            width="270"
            height="259"
          />
          <img
            class="modal-gif"
            src="${i}"
            alt="${s}"
            width="295"
            height="258"
          />
        </picture>
      </div>
      <div class="text-container">
        <h4 class="modal-title">${s}</h4>
        <div class="rating-container">
          <p class="modal-exercises-rating">${E.toFixed(1)}</p>
          <div class="star-outer"><div class="star-inner"></div></div>
        </div>
        <ul class="description-list">
          <li class="description-item">
            <p>Target</p>
            <span>${O(o)}</span>
          </li>
          <li class="description-item">
            <p>Body Part</p>
            <span>${O(t)}</span>
          </li>
          <li class="description-item">
            <p>Equipment</p>
            <span>${O(n)}</span>
          </li>
          <li class="description-item">
            <p>Popular</p>
            <span>${k}</span>
          </li>
          <li class="description-item">
            <p>Burned Calories</p>
            <span>${C}/${v} min</span>
          </li>
        </ul>
        <p class="modal-description-text">${r}</p>
        <div class="modal-buttons-container">
          <button data-id="${e}" class="add-favorite-btn">
            ${S?"Remove from":"Add to favorites"}
            <svg class="icon-heart" width="18" height="18">
              <use href="${b}#icon-heart"></use>
            </svg>
          </button>
          <button data-id="${e}" class="give-rating-btn">
            Give a rating
          </button>
        </div>
      </div>
    </div>`}const T=document.querySelector(".scroll-up-btn");window.addEventListener("scroll",re);function re(){window.scrollY>200?T.classList.add("scroll-up-btn--show"):T.classList.remove("scroll-up-btn--show")}T.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});export{y as g,b as i,ce as p,g as s};
//# sourceMappingURL=scroll-up-0599c843.js.map
