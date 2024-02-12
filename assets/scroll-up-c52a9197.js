import{i as R,a as D}from"./vendor-e8675f53.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function a(e,t="info"){t==="OK"?R.success({position:"topCenter",message:e}):t==="ERROR"?R.error({position:"topCenter",message:e}):R.info({position:"topCenter",message:e})}function p(e="show"){const t=document.querySelector(".loader");e==="show"?t.style.display="inline-block":t.style.display="none"}function fe(e,t){const n=document.querySelector(e),s=n.getBoundingClientRect();s.height>100&&t==="set"&&(n.setAttribute("style","height:"+s.height+"px"),n.style.height=s.height+"px"),t==="unset"&&(n.removeAttribute("style"),n.style.height="auto")}const x=location.pathname.split("/").pop(),c=document.querySelector(".page-home a"),l=document.querySelector(".page-favorites a"),d=document.querySelector(".home-mob-menu"),u=document.querySelector(".favorites-mob-menu"),I={openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]")};I.openMenuBtn.addEventListener("click",A);I.closeMenuBtn.addEventListener("click",A);function A(){I.menu.classList.toggle("is-hidden")}function g(e,t,n,s){e.parentElement.classList.add("active"),n.classList.add("home-mob-menu"),t.parentElement.classList.remove("active"),s.classList.remove("home-mob-menu")}x==="index.html"||x===""?g(c,l,d,u):x==="favorites.html"&&g(l,c,u,d);c.addEventListener("click",e=>{g(c,l,d,u)});l.addEventListener("click",e=>{g(l,c,u,d)});d.addEventListener("click",e=>{g(c,l,d,u)});u.addEventListener("click",e=>{g(l,c,u,d)});const X=document.querySelector(".generated-quote-container");function Z(){const e=localStorage.getItem("quoteData"),t=localStorage.getItem("quoteDate"),n=new Date().getDate();if(e&&t&&parseInt(t)===n){const{author:s,quote:o}=JSON.parse(e);P(s,o)}else ee()}function ee(){fetch("https://energyflow.b.goit.study/api/quote",{method:"GET",headers:{Accept:"application/json"}}).then(e=>e.json()).then(e=>{localStorage.setItem("quoteData",JSON.stringify(e)),localStorage.setItem("quoteDate",new Date().getDate());const{author:t,quote:n}=e;P(t,n)}).catch(e=>{console.error("Error:",e)})}function P(e,t){const n=`
    <h2 class="quote-header">Quote of the day</h2>
    <p class="quote-text">${t}</p>
    <h3 class="quote-author">${e}</h3>`;X.innerHTML=n}Z();const S="/fson97-group-10/assets/icons-7e6267de.svg";let B,H;const k=document.querySelector(".overlay-rating"),F=document.querySelector(".backdrop"),J=document.querySelector(".modal-rating"),G=document.querySelector(".close-modal-rating-btn"),U=document.querySelector(".star-container"),K=document.querySelector(".send-rating-btn");function te(){B=document.querySelector(".give-rating-btn"),B.addEventListener("click",Q),G.addEventListener("click",q),k.addEventListener("click",V),U.addEventListener("click",j),K.addEventListener("click",z)}function ne(){B.removeEventListener("click",Q),G.removeEventListener("click",q),k.removeEventListener("click",V),U.removeEventListener("click",j),K.removeEventListener("click",z)}function Q(e){e.preventDefault(),document.removeEventListener("keydown",w),H=e.target.dataset.id,ie(),oe()}function oe(){J.classList.remove("visually-hidden"),k.style.display="block",F.style.display="none"}function j(e){if(e.target.tagName==="INPUT"){const t=e.target.value,n=document.querySelector(".rating-value");n.textContent=Number(t).toFixed(1)}}function z(e){e.preventDefault(),p();const t=document.querySelector(".rating-form"),n=t.elements.star.value,s=t.elements.email.value.trim().toLowerCase(),o=t.elements.review.value.trim(),i=/\S+@\S+\.\S+/;if(n===""){a("Please set your estimation!","ERROR"),p("hide");return}if(s===""||!i.test(s)){a("Please enter your email!","ERROR"),p("hide");return}se(n,s,o).then(function(r){a("Thank you! Your rating has been sent!","OK");const h=document.querySelector(".rating-value");h.textContent="0.0",t.reset(),q()}).catch(function(r){r.response.status===409?a("Such email already exists!"):r.response.status===404?a("Such exercise not found!"):a(r.message,"ERROR")}),p("hide")}async function se(e,t,n){const s="https://energyflow.b.goit.study/api",o="exercises";return e=Number(e),await D.patch(`${s}/${o}/${H}/rating/`,{rate:e,email:t,review:n})}function q(){J.classList.add("visually-hidden"),k.style.display="none",F.style.display="block",re(),document.addEventListener("keydown",w)}function ie(){document.querySelector(".modal").classList.add("visually-hidden")}function re(){document.querySelector(".modal").classList.remove("visually-hidden")}function V(e){e.target.classList.contains("overlay-rating")&&q()}const ae=document.querySelector(".gallery, .favorites-card-content"),E=document.querySelector(".backdrop"),b=document.querySelector(".modal");ae.addEventListener("click",ce);async function ce(e){if(e.preventDefault(),e.target===e.curentTarget)return;const t=e.target.closest(".ex-item-start");if(t===null)return;p();const n=t.dataset.id,s=await le(n);E.classList.remove("visually-hidden");const o=de(s);b.innerHTML=o,te(),p("none"),document.querySelector(".star-inner").style.width=s.rating/5*100+"%",b.classList.remove("visually-hidden"),document.querySelector(".add-favorite-btn").addEventListener("click",h),document.querySelector(".close-modal-btn").addEventListener("click",N),E.addEventListener("click",Y),document.addEventListener("keydown",w);function h(C){const m=C.target.closest(".add-favorite-btn"),y=m.dataset.id,L=localStorage.getItem("favorites");if(L){const f=JSON.parse(L);if(f.some(({_id:v})=>v===y)){localStorage.setItem("favorites",JSON.stringify(f.filter(({_id:W})=>W!==y))),m.innerHTML=O();const v=document.getElementById("card-"+y);v&&(v.remove(),N(),a("Card removed from favorites!"))}else localStorage.setItem("favorites",JSON.stringify([...f,s])),m.innerHTML=O("remove")}else localStorage.setItem("favorites",JSON.stringify([s])),m.innerHTML=O("remove")}}function N(){T()}function Y(e){e.target.closest(".modal")||T()}function w(e){e.preventDefault(),e.key==="Escape"&&T()}function T(){b.classList.add("visually-hidden"),E.classList.add("visually-hidden"),b.innerHTML="",ne(),document.removeEventListener("keydown",w),E.removeEventListener("click",Y)}async function le(e){try{const t="https://energyflow.b.goit.study/api",n="exercises",{data:s}=await D.get(`${t}/${n}/${e}`);return s}catch(t){console.error(t)}}function O(e="add"){return e==="add"?`Add to favorites
        <svg class="icon-heart" width="18" height="18">
          <use href="${S}#icon-heart"></use>
        </svg>`:`Remove from
        <svg class="icon-heart" width="18" height="18">
          <use href="${S}#icon-heart"></use>
        </svg>`}function $(e){return e.charAt(0).toUpperCase()+e.slice(1)}function de({_id:e,bodyPart:t,equipment:n,gifUrl:s,name:o,target:i,description:r,rating:h,burnedCalories:C,time:m,popularity:y}){let L=!1;const f=localStorage.getItem("favorites");return f&&(L=JSON.parse(f).some(v=>v._id===e)),`<div class="modal-description-container">
      <button class="close-modal-btn" title="Close window">
        <svg class="close-modal-icon" width="24" height="24">
          <use href="${S}#icon-cross"></use>
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
          <p class="modal-exercises-rating">${h.toFixed(1)}</p>
          <div class="star-outer"><div class="star-inner"></div></div>
        </div>
        <ul class="description-list">
          <li class="description-item">
            <p>Target</p>
            <span>${$(i)}</span>
          </li>
          <li class="description-item">
            <p>Body Part</p>
            <span>${$(t)}</span>
          </li>
          <li class="description-item">
            <p>Equipment</p>
            <span>${$(n)}</span>
          </li>
          <li class="description-item">
            <p>Popular</p>
            <span>${y}</span>
          </li>
          <li class="description-item">
            <p>Burned Calories</p>
            <span>${C}/${m} min</span>
          </li>
        </ul>
        <p class="modal-description-text">${r}</p>
        <div class="modal-buttons-container">
          <button data-id="${e}" class="add-favorite-btn">
            ${L?"Remove from":"Add to favorites"}
            <svg class="icon-heart" width="18" height="18">
              <use href="${S}#icon-heart"></use>
            </svg>
          </button>
          <button data-id="${e}" class="give-rating-btn">
            Give a rating
          </button>
        </div>
      </div>
    </div>`}const M=document.querySelector(".scroll-up-btn");window.addEventListener("scroll",ue);function ue(){window.scrollY>200?M.classList.add("scroll-up-btn--show"):M.classList.remove("scroll-up-btn--show")}M.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});export{p as g,S as i,fe as p,a as s};
//# sourceMappingURL=scroll-up-c52a9197.js.map
