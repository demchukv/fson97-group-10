import{i as x,a as H}from"./vendor-e8675f53.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function l(e,t="info"){t==="OK"?x.success({position:"topCenter",message:e}):t==="ERROR"?x.error({position:"topCenter",message:e}):x.info({position:"topCenter",message:e})}function h(e="show"){const t=document.querySelector(".loader");e==="show"?t.style.display="inline-block":t.style.display="none"}function me(e,t){const n=document.querySelector(e),s=n.getBoundingClientRect();s.height>100&&t==="set"&&(n.setAttribute("style","height:"+s.height+"px"),n.style.height=s.height+"px"),t==="unset"&&(n.removeAttribute("style"),n.style.height="auto")}const O=location.pathname.split("/").pop(),d=document.querySelector(".page-home a"),u=document.querySelector(".page-favorites a"),m=document.querySelector(".home-mob-menu"),v=document.querySelector(".favorites-mob-menu"),I={openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]")};I.openMenuBtn.addEventListener("click",A);I.closeMenuBtn.addEventListener("click",A);function A(){I.menu.classList.toggle("is-hidden")}function y(e,t,n,s){e.parentElement.classList.add("active"),n.classList.add("home-mob-menu"),t.parentElement.classList.remove("active"),s.classList.remove("home-mob-menu")}O==="index.html"||O===""?y(d,u,m,v):O==="favorites.html"&&y(u,d,v,m);d.addEventListener("click",e=>{y(d,u,m,v)});u.addEventListener("click",e=>{y(u,d,v,m)});m.addEventListener("click",e=>{y(d,u,m,v)});v.addEventListener("click",e=>{y(u,d,v,m)});const X=document.querySelector(".generated-quote-container");function Z(){const e=localStorage.getItem("quoteData"),t=localStorage.getItem("quoteDate"),n=new Date().getDate();if(e&&t&&parseInt(t)===n){const{author:s,quote:o}=JSON.parse(e);P(s,o)}else ee()}function ee(){fetch("https://energyflow.b.goit.study/api/quote",{method:"GET",headers:{Accept:"application/json"}}).then(e=>e.json()).then(e=>{localStorage.setItem("quoteData",JSON.stringify(e)),localStorage.setItem("quoteDate",new Date().getDate());const{author:t,quote:n}=e;P(t,n)}).catch(e=>{console.error("Error:",e)})}function P(e,t){const n=`
    <h2 class="quote-header">Quote of the day</h2>
    <p class="quote-text">${t}</p>
    <h3 class="quote-author">${e}</h3>`;X.innerHTML=n}Z();const b="/fson97-group-10/assets/icons-7e6267de.svg";let M,F;const q=document.querySelector(".overlay-rating"),J=document.querySelector(".backdrop"),G=document.querySelector(".modal-rating"),U=document.querySelector(".close-modal-rating-btn"),K=document.querySelector(".star-container"),Q=document.querySelector(".send-rating-btn");function te(){M=document.querySelector(".give-rating-btn"),M.addEventListener("click",j),U.addEventListener("click",w),q.addEventListener("click",Y),K.addEventListener("click",z),Q.addEventListener("click",V)}function N(){M.removeEventListener("click",j),U.removeEventListener("click",w),q.removeEventListener("click",Y),K.removeEventListener("click",z),Q.removeEventListener("click",V)}function j(e){e.preventDefault(),document.removeEventListener("keydown",L),F=e.target.dataset.id,se(),ne()}function ne(){G.classList.remove("visually-hidden"),q.style.display="block",J.style.display="none"}function z(e){if(e.target.tagName==="INPUT"){const t=e.target.value,n=document.querySelector(".rating-value");n.textContent=Number(t).toFixed(1)}}function V(e){e.preventDefault(),h();const t=document.querySelector(".rating-form"),n=t.elements.star.value,s=t.elements.email.value.trim().toLowerCase(),o=t.elements.review.value.trim(),i=/\S+@\S+\.\S+/;if(n===""){l("Please set your estimation!","ERROR"),h("hide");return}if(s===""||!i.test(s)){l("Please enter your email!","ERROR"),h("hide");return}oe(n,s,o).then(function(r){l("Thank you! Your rating has been sent!","OK");const S=document.querySelector(".rating-value");S.textContent="0.0",t.reset(),w()}).catch(function(r){r.response.status===409?l("Such email already exists!"):r.response.status===404?l("Such exercise not found!"):l(r.message,"ERROR")}),h("hide")}async function oe(e,t,n){const s="https://energyflow.b.goit.study/api",o="exercises";return e=Number(e),await H.patch(`${s}/${o}/${F}/rating/`,{rate:e,email:t,review:n})}function w(){G.classList.add("visually-hidden"),q.style.display="none",J.style.display="block",ie(),document.addEventListener("keydown",L)}function se(){document.querySelector(".modal").classList.add("visually-hidden")}function ie(){document.querySelector(".modal").classList.remove("visually-hidden")}function Y(e){e.target.classList.contains("overlay-rating")&&w()}const re=document.querySelector(".gallery, .favorites-card-content"),c=document.querySelector(".backdrop"),a=document.querySelector(".modal");re.addEventListener("click",ae);async function ae(e){if(e.preventDefault(),e.target===e.curentTarget)return;const t=e.target.closest(".ex-item-start");if(t===null)return;h();const n=t.dataset.id,s=await ce(n);c.classList.remove("visually-hidden"),a.innerHTML="";const o=le(s);a.innerHTML=o,te(),h("none"),document.querySelector(".star-inner").style.width=s.rating/5*100+"%",a.classList.remove("visually-hidden"),document.querySelector(".add-favorite-btn").addEventListener("click",S),document.querySelector(".close-modal-btn").addEventListener("click",D),c.addEventListener("click",C),document.addEventListener("keydown",L);function S(R){const f=R.target.closest(".add-favorite-btn"),E=f.dataset.id,k=localStorage.getItem("favorites");if(k){const p=JSON.parse(k);if(p.some(({_id:g})=>g===E)){localStorage.setItem("favorites",JSON.stringify(p.filter(({_id:W})=>W!==E))),f.innerHTML=$();const g=document.getElementById("card-"+E);g&&(g.remove(),D(),l("Card removed from favorites!"))}else localStorage.setItem("favorites",JSON.stringify([...p,s])),f.innerHTML=$("remove")}else localStorage.setItem("favorites",JSON.stringify([s])),f.innerHTML=$("remove")}}function D(){a.classList.add("visually-hidden"),c.classList.add("visually-hidden"),a.innerHTML="",N(),document.removeEventListener("keydown",L),c.removeEventListener("click",C)}function C(e){e.target.closest(".modal")||(a.classList.add("visually-hidden"),c.classList.add("visually-hidden"),a.innerHTML="",N(),document.removeEventListener("keydown",L),c.removeEventListener("click",C))}function L(e){e.preventDefault(),e.key==="Escape"&&(a.classList.add("visually-hidden"),c.classList.add("visually-hidden"),a.innerHTML="",N(),document.removeEventListener("keydown",L),c.removeEventListener("click",C))}async function ce(e){try{const t="https://energyflow.b.goit.study/api",n="exercises",{data:s}=await H.get(`${t}/${n}/${e}`);return s}catch(t){console.error(t)}}function $(e="add"){return e==="add"?`Add to favorites
        <svg class="icon-heart" width="18" height="18">
          <use href="${b}#icon-heart"></use>
        </svg>`:`Remove from
        <svg class="icon-heart" width="18" height="18">
          <use href="${b}#icon-heart"></use>
        </svg>`}function B(e){return e.charAt(0).toUpperCase()+e.slice(1)}function le({_id:e,bodyPart:t,equipment:n,gifUrl:s,name:o,target:i,description:r,rating:S,burnedCalories:R,time:f,popularity:E}){let k=!1;const p=localStorage.getItem("favorites");return p&&(k=JSON.parse(p).some(g=>g._id===e)),`<div class="modal-description-container">
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
            <span>${R}/${f} min</span>
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
    </div>`}const T=document.querySelector(".scroll-up-btn");window.addEventListener("scroll",de);function de(){window.scrollY>200?T.classList.add("scroll-up-btn--show"):T.classList.remove("scroll-up-btn--show")}T.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});export{h as g,b as i,me as p,l as s};
//# sourceMappingURL=scroll-up-938cb625.js.map
