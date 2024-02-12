import{i as x,a as D}from"./vendor-ecc6328a.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function g(e,t="info"){t==="OK"?x.success({position:"topCenter",message:e}):t==="ERROR"?x.error({position:"topCenter",message:e}):x.info({position:"topCenter",message:e})}function h(e="show"){const t=document.querySelector(".loader"),n=document.querySelector(".overlay-rating");e==="show"?(t.style.display="inline-block",n.style.display="block"):(t.style.display="none",n.style.display="none")}function me(e,t){const n=document.querySelector(e),s=n.getBoundingClientRect();s.height>100&&t==="set"&&(n.setAttribute("style","height:"+s.height+"px"),n.style.height=s.height+"px"),t==="unset"&&(n.removeAttribute("style"),n.style.height="auto")}const O=location.pathname.split("/").pop(),l=document.querySelector(".page-home a"),d=document.querySelector(".page-favorites a"),u=document.querySelector(".home-mob-menu"),m=document.querySelector(".favorites-mob-menu"),I={openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]")};I.openMenuBtn.addEventListener("click",H);I.closeMenuBtn.addEventListener("click",H);function H(){I.menu.classList.toggle("is-hidden")}function y(e,t,n,s){e.parentElement.classList.add("active"),n.classList.add("home-mob-menu"),t.parentElement.classList.remove("active"),s.classList.remove("home-mob-menu")}O==="index.html"||O===""?y(l,d,u,m):O==="favorites.html"&&y(d,l,m,u);l.addEventListener("click",e=>{y(l,d,u,m)});d.addEventListener("click",e=>{y(d,l,m,u)});u.addEventListener("click",e=>{y(l,d,u,m)});m.addEventListener("click",e=>{y(d,l,m,u)});const W=document.querySelector(".generated-quote-container");function X(){const e=localStorage.getItem("quoteData"),t=localStorage.getItem("quoteDate"),n=new Date().getDate();if(e&&t&&parseInt(t)===n){const{author:s,quote:o}=JSON.parse(e);A(s,o)}else Z()}function Z(){fetch("https://energyflow.b.goit.study/api/quote",{method:"GET",headers:{Accept:"application/json"}}).then(e=>e.json()).then(e=>{localStorage.setItem("quoteData",JSON.stringify(e)),localStorage.setItem("quoteDate",new Date().getDate());const{author:t,quote:n}=e;A(t,n)}).catch(e=>{console.error("Error:",e)})}function A(e,t){const n=`
    <h2 class="quote-header">Quote of the day</h2>
    <p class="quote-text">${t}</p>
    <h3 class="quote-author">${e}</h3>`;W.innerHTML=n}X();const b="/fson97-group-10/assets/icons-7e6267de.svg";let M,P;const q=document.querySelector(".overlay-rating"),F=document.querySelector(".backdrop"),J=document.querySelector(".modal-rating"),G=document.querySelector(".close-modal-rating-btn"),U=document.querySelector(".star-container"),K=document.querySelector(".send-rating-btn");function ee(){M=document.querySelector(".give-rating-btn"),M.addEventListener("click",Q),G.addEventListener("click",w),q.addEventListener("click",V),U.addEventListener("click",j),K.addEventListener("click",z)}function N(){M.removeEventListener("click",Q),G.removeEventListener("click",w),q.removeEventListener("click",V),U.removeEventListener("click",j),K.removeEventListener("click",z)}function Q(e){e.preventDefault(),document.removeEventListener("keydown",L),P=e.target.dataset.id,oe(),te()}function te(){J.classList.remove("visually-hidden"),q.style.display="block",F.style.display="none"}function j(e){if(e.target.tagName==="INPUT"){const t=e.target.value,n=document.querySelector(".rating-value");n.textContent=Number(t).toFixed(1)}}function z(e){e.preventDefault(),h();const t=document.querySelector(".rating-form"),n=t.elements.star.value,s=t.elements.email.value.trim().toLowerCase(),o=t.elements.review.value.trim(),i=/\S+@\S+\.\S+/;if(n===""){g("Please set your estimation!","ERROR"),h("hide");return}if(s===""||!i.test(s)){g("Please enter your email!","ERROR"),h("hide");return}ne(n,s,o).then(function(r){g("Thank you! Your rating has been sent!","OK");const S=document.querySelector(".rating-value");S.textContent="0.0",t.reset(),w()}).catch(function(r){r.response.status===409?g("Such email already exists!"):r.response.status===404?g("Such exercise not found!"):g(r.message,"ERROR")}),h("hide")}async function ne(e,t,n){const s="https://energyflow.b.goit.study/api",o="exercises";return e=Number(e),await D.patch(`${s}/${o}/${P}/rating/`,{rate:e,email:t,review:n})}function w(){J.classList.add("visually-hidden"),q.style.display="none",F.style.display="block",se(),document.addEventListener("keydown",L)}function oe(){document.querySelector(".modal").classList.add("visually-hidden")}function se(){document.querySelector(".modal").classList.remove("visually-hidden")}function V(e){e.target.classList.contains("overlay-rating")&&w()}const ie=document.querySelector(".gallery, .favorites-card-content"),c=document.querySelector(".backdrop"),a=document.querySelector(".modal");ie.addEventListener("click",re);async function re(e){if(e.preventDefault(),e.target===e.curentTarget)return;const t=e.target.closest(".ex-item-start");if(t===null)return;h();const n=t.dataset.id,s=await ce(n);c.classList.remove("visually-hidden"),a.innerHTML="";const o=le(s);a.innerHTML=o,ee(),h("none"),document.querySelector(".star-inner").style.width=s.rating/5*100+"%",a.classList.remove("visually-hidden"),document.querySelector(".add-favorite-btn").addEventListener("click",S),document.querySelector(".close-modal-btn").addEventListener("click",ae),c.addEventListener("click",C),document.addEventListener("keydown",L);function S(R){const v=R.target.closest(".add-favorite-btn"),E=v.dataset.id,k=localStorage.getItem("favorites");if(k){const f=JSON.parse(k);if(f.some(({_id:p})=>p===E)){localStorage.setItem("favorites",JSON.stringify(f.filter(({_id:_})=>_!==E))),v.innerHTML=$();const p=document.getElementById("card-"+E);p&&p.remove()}else localStorage.setItem("favorites",JSON.stringify([...f,s])),v.innerHTML=$("remove")}else localStorage.setItem("favorites",JSON.stringify([s])),v.innerHTML=$("remove")}}function ae(){a.classList.add("visually-hidden"),c.classList.add("visually-hidden"),a.innerHTML="",N(),document.removeEventListener("keydown",L),c.removeEventListener("click",C)}function C(e){e.target.closest(".modal")||(a.classList.add("visually-hidden"),c.classList.add("visually-hidden"),a.innerHTML="",N(),document.removeEventListener("keydown",L),c.removeEventListener("click",C))}function L(e){e.preventDefault(),e.key==="Escape"&&(a.classList.add("visually-hidden"),c.classList.add("visually-hidden"),a.innerHTML="",N(),document.removeEventListener("keydown",L),c.removeEventListener("click",C))}async function ce(e){try{const t="https://energyflow.b.goit.study/api",n="exercises",{data:s}=await D.get(`${t}/${n}/${e}`);return s}catch(t){console.error(t)}}function $(e="add"){return e==="add"?`Add to favorites
        <svg class="icon-heart" width="18" height="18">
          <use href="${b}#icon-heart"></use>
        </svg>`:`Remove from
        <svg class="icon-heart" width="18" height="18">
          <use href="${b}#icon-heart"></use>
        </svg>`}function B(e){return e.charAt(0).toUpperCase()+e.slice(1)}function le({_id:e,bodyPart:t,equipment:n,gifUrl:s,name:o,target:i,description:r,rating:S,burnedCalories:R,time:v,popularity:E}){let k=!1;const f=localStorage.getItem("favorites");return f&&(k=JSON.parse(f).some(p=>p._id===e)),`<div class="modal-description-container">
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
            src="${s}"
            alt="${o}"
            width="295"
            height="258"
          />
        </picture>
      </div>
      <div class="text-container">
        <h4 class="modal-title">${o}</h4>
        <div class="rating-container">
          <p class="modal-exercises-rating">${S.toFixed(1)}</p>
          <div class="star-outer"><div class="star-inner"></div></div>
        </div>
        <ul class="description-list">
          <li class="description-item">
            <p>Target</p>
            <span>${B(i)}</span>
          </li>
          <li class="description-item">
            <p>Body Part</p>
            <span>${B(t)}</span>
          </li>
          <li class="description-item">
            <p>Equipment</p>
            <span>${B(n)}</span>
          </li>
          <li class="description-item">
            <p>Popular</p>
            <span>${E}</span>
          </li>
          <li class="description-item">
            <p>Burned Calories</p>
            <span>${R}/${v} min</span>
          </li>
        </ul>
        <p class="modal-description-text">${r}</p>
        <div class="modal-buttons-container">
          <button data-id="${e}" class="add-favorite-btn">
            ${k?"Remove from":"Add to favorites"}
            <svg class="icon-heart" width="18" height="18">
              <use href="${b}#icon-heart"></use>
            </svg>
          </button>
          <button data-id="${e}" class="give-rating-btn">
            Give a rating
          </button>
        </div>
      </div>
    </div>`}const T=document.querySelector(".scroll-up-btn");window.addEventListener("scroll",de);function de(){window.scrollY>200?T.classList.add("scroll-up-btn--show"):T.classList.remove("scroll-up-btn--show")}T.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});export{h as g,b as i,me as p,g as s};
//# sourceMappingURL=scroll-up-7187ccab.js.map
