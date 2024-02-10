import"./assets/header-3047b3c7.js";import{i as C,a as y,P as U}from"./assets/vendor-e8675f53.js";function c(e,t="info"){t==="OK"?C.success({position:"topCenter",message:e}):t==="ERROR"?C.error({position:"topCenter",message:e}):C.info({position:"topCenter",message:e})}function r(e="show"){const t=document.querySelector(".loader");e==="show"?t.style.display="inline-block":t.style.display="none"}const d={gallery:document.querySelector(".gallery"),buttons:document.querySelector(".exercises-btns-div"),pagination:document.getElementById("pagination"),musclesBtn:document.querySelector('[data-filter="muscles"]'),bodypartsBtn:document.querySelector('[data-filter="bodypart"]'),equipBtn:document.querySelector('[data-filter="equipment"]')};let B=!0;y.defaults.baseURL="https://energyflow.b.goit.study/api";const o={perPage:12,page:1,filter:"Muscles",totalPages:1,totalItems:0};async function de(){return d.gallery.innerHTML="",r(),(await y.get("/filters",{params:{filter:o.filter,page:o.page,limit:o.perPage}})).data}function ue(e){const t=e.map(({name:s,filter:n,imgUrl:i})=>`<li class="gallery-item">
        <a href="">
        <img class="gallery-image" src="${i}" alt="Galllery Image">
            <ul class="gallery-item-description" data-exercises="${s}">
                <li class="name">${s}</li>
                <li class="filter">${n}</li>
            </ul>
        </a>
    </li>`).join("");d.gallery.innerHTML=t,r("hide")}function P(){de().then(e=>{const{results:t,totalPages:s,page:n}=e;ue(t),B&&(o.totalPages=s,o.totalItems=s*o.perPage,pe())}).catch(e=>{r("hide"),c(e.message,"ERROR")})}P();d.musclesBtn.classList.add("active");d.buttons.addEventListener("click",e=>{me(e);const t=e.target;o.page=1,B=!0,t!==e.currentTarget&&(t===d.musclesBtn?o.filter="Muscles":t===d.bodypartsBtn?o.filter="Body parts":t===d.equipBtn&&(o.filter="Equipment"),P(),G())});let v=null;function me(e){const t=e.target.nodeName==="BUTTON";d.musclesBtn.classList.remove("active"),t&&(e.target.classList.add("active"),v!==null&&v.classList.remove("active"),v=e.target,v===v&&v.classList.add("active"))}function pe(){if(B=!1,o.totalItems>o.perPage)new U("pagination",{totalItems:o.totalItems,itemsPerPage:o.perPage,visiblePages:3}).on("afterMove",function(t){o.page=t.page,P(),G()});else{const e=document.querySelector("#pagination");e.innerHTML=""}}function G(){const e=d.buttons.getBoundingClientRect();window.scrollBy({top:e.y+e.height,left:0,behavior:"smooth"})}const f="/fson97-group-10/assets/icons-e0dcdaec.svg",a={page:1,totalPages:1,totalItems:0,keyword:"",filter:"",filterGroup:"",limit:12},p=document.querySelector(".gallery");p&&(p.addEventListener("click",ge),p.classList.add("exercises-card"));const A=document.querySelector(".search-btn"),k=document.querySelector(".search-clear-btn"),m=document.querySelector(".search-input"),O=document.querySelector(".exercises-btns-div"),D=document.querySelector(".ex-search"),F=document.querySelector(".exercises-header"),j=document.querySelector("#pagination"),J=document.querySelector("#pager");function ge(e){if(e.preventDefault(),e.target.closest("ul").dataset.exercises){j.style.display="none",J.style.display="block",A.addEventListener("click",K),k.addEventListener("click",_),m.addEventListener("input",z),O.addEventListener("click",V),D.style.display="block";const t=document.querySelector(".exercises-button.active");a.filter=t.dataset.filter,a.filterGroup=e.target.closest("ul").dataset.exercises;const s=`Exercises / <span class="head-small">${a.filterGroup.charAt(0).toUpperCase()+a.filterGroup.slice(1)}</span>`;F.innerHTML=s,x(a.filter)}}function K(e){e.preventDefault(),m.value.length>3&&(a.page=1,a.keyword=m.value.trim().toLowerCase(),x(a.filter,!0))}function x(e,t=!0){p.innerHTML="",fe(e).then(s=>{a.totalPages=s.totalPages,a.totalItems=a.limit*s.totalPages,s.results.length===0?(p.innerHTML='<p class="ex-list-no-result">Unfortunately, <span class="accent-text">no results</span> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</p>',N()):(ve(s.results),t&&N()),r("hide")}).catch(s=>{r("hide"),c(s.message,"ERROR")})}async function fe(e){return r(),m.value.length>3?a.keyword=m.value.trim().toLowerCase():a.keyword="",(await y.get("/exercises",{params:{[e]:a.filterGroup,keyword:a.keyword,page:a.page,limit:a.limit}})).data}function ve(e){let t=e.map(n=>`<li class="exercise-item" data-id="${n._id}">
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
      </li>`).join("");p.innerHTML=t;const s=O.getBoundingClientRect();window.scrollBy({top:s.y+s.height,left:0,behavior:"smooth"})}function N(){if(a.totalItems>a.limit)new U("pager",{totalItems:a.totalItems,itemsPerPage:a.limit,visiblePages:3}).on("afterMove",function(t){a.page=t.page,x(a.filter,!1)});else{const e=document.querySelector("#pager");e.innerHTML=""}r("hide")}function _(){m.value="",k.style.visibility="hidden",a.page=1,x(a.filter,a.filterGroup)}function z(){m.value.length>0?k.style.visibility="visible":k.style.visibility="hidden"}function V(e){e.target.tagName==="BUTTON"&&(m.value="",D.style.display="none",p.innerHTML="",p.classList.remove("exercises-card"),A.removeEventListener("click",K),k.removeEventListener("click",_),m.removeEventListener("input",z),O.removeEventListener("click",V),J.style.display="none",j.style.display="block",a.page=1,F.innerHTML="Exercises")}const Y=document.querySelector(".footer-form");async function ye(e){return y.post("https://energyflow.b.goit.study/api/subscription",e)}Y.addEventListener("submit",he);function he(e){e.preventDefault();const t=e.currentTarget.email.value.trim().toLowerCase();if(t===""){c("The email field is empty!","ERROR");return}const s={email:t};r("show"),ye(s).then(({data:n,status:i})=>{i===201&&(r("hide"),c(n.message,"OK"))}).catch(n=>{n.response.status===409?(r("hide"),c("Subscription already exists!")):(c(n.message,"ERROR"),r("hide"))}).finally(Y.reset())}let $,W;const b=document.querySelector(".overlay-rating"),Q=document.querySelector(".backdrop"),X=document.querySelector(".modal-rating"),Z=document.querySelector(".close-modal-rating-btn"),ee=document.querySelector(".star-container"),te=document.querySelector(".send-rating-btn");function Le(){$=document.querySelector(".give-rating-btn"),$.addEventListener("click",se),Z.addEventListener("click",E),b.addEventListener("click",ie),ee.addEventListener("click",ne),te.addEventListener("click",ae)}function I(){$.removeEventListener("click",se),Z.removeEventListener("click",E),b.removeEventListener("click",ie),ee.removeEventListener("click",ne),te.removeEventListener("click",ae)}function se(e){e.preventDefault(),document.removeEventListener("keydown",h),W=e.target.dataset.id,be(),ke()}function ke(){X.classList.remove("visually-hidden"),b.style.display="block",Q.style.display="none"}function ne(e){if(e.target.tagName==="INPUT"){const t=e.target.value,s=document.querySelector(".rating-value");s.textContent=Number(t).toFixed(1)}}function ae(e){e.preventDefault(),r();const t=document.querySelector(".rating-form"),s=t.elements.star.value,n=t.elements.email.value.trim().toLowerCase(),i=t.elements.review.value.trim(),L=/\S+@\S+\.\S+/;if(s===""){c("Please set your estimation!","ERROR"),r("hide");return}if(n===""||!L.test(n)){c("Please enter your email!","ERROR"),r("hide");return}xe(s,n,i).then(function(l){c("Thank you! Your rating has been sent!","OK");const w=document.querySelector(".rating-value");w.textContent="0.0",t.reset(),E()}).catch(function(l){l.response.status===409?c("Such email already exists!"):l.response.status===404?c("Such exercise not found!"):c(l.message,"ERROR")}),r("hide")}async function xe(e,t,s){const n="https://energyflow.b.goit.study/api",i="exercises";return e=Number(e),await y.patch(`${n}/${i}/${W}/rating/`,{rate:e,email:t,review:s})}function E(){X.classList.add("visually-hidden"),b.style.display="none",Q.style.display="block",Ee(),document.addEventListener("keydown",h)}function be(){document.querySelector(".modal").classList.add("visually-hidden")}function Ee(){document.querySelector(".modal").classList.remove("visually-hidden")}function ie(e){e.target.classList.contains("overlay-rating")&&E()}const Se=document.querySelector(".gallery"),g=document.querySelector(".backdrop"),u=document.querySelector(".modal");Se.addEventListener("click",we);async function we(e){if(e.target===e.curentTarget)return;const t=e.target.closest(".ex-item-start");if(t===null)return;r();const s=t.dataset.id,n=await T(s);g.classList.remove("visually-hidden"),u.innerHTML="";const i=qe(n);u.innerHTML=i,Le(),r("none"),document.querySelector(".star-inner").style.width=n.rating/5*100+"%",u.classList.remove("visually-hidden"),document.querySelector(".add-favorite-btn").addEventListener("click",Ce),document.querySelector(".close-modal-btn").addEventListener("click",Re),g.addEventListener("click",S),document.addEventListener("keydown",h)}async function Ce(e){const t=e.target.closest(".add-favorite-btn"),s=t.dataset.id,n=localStorage.getItem("favorites");if(n){const i=JSON.parse(n);if(i.some(({_id:l})=>l===s))localStorage.setItem("favorites",JSON.stringify(i.filter(({_id:l})=>l!==s))),t.innerHTML=R();else{const l=await T(s);localStorage.setItem("favorites",JSON.stringify([...i,l])),t.innerHTML=R("remove")}}else{const i=await T(s);localStorage.setItem("favorites",JSON.stringify([i])),t.innerHTML=R("remove")}}function Re(){u.classList.add("visually-hidden"),g.classList.add("visually-hidden"),u.innerHTML="",I(),document.removeEventListener("keydown",h),g.removeEventListener("click",S)}function S(e){e.target.closest(".modal")||(u.classList.add("visually-hidden"),g.classList.add("visually-hidden"),u.innerHTML="",I(),document.removeEventListener("keydown",h),g.removeEventListener("click",S))}function h(e){e.preventDefault(),e.key==="Escape"&&(u.classList.add("visually-hidden"),g.classList.add("visually-hidden"),u.innerHTML="",I(),document.removeEventListener("keydown",h),g.removeEventListener("click",S))}async function T(e){try{const t="https://energyflow.b.goit.study/api",s="exercises",{data:n}=await y.get(`${t}/${s}/${e}`);return n}catch(t){console.error(t)}}function R(e="add"){return e==="add"?`Add to favorites
        <svg class="icon-heart" width="18" height="18">
          <use href="${f}#icon-heart"></use>
        </svg>`:`Remove from
        <svg class="icon-heart" width="18" height="18">
          <use href="${f}#icon-heart"></use>
        </svg>`}function q(e){return e.charAt(0).toUpperCase()+e.slice(1)}function qe({_id:e,bodyPart:t,equipment:s,gifUrl:n,name:i,target:L,description:l,rating:w,burnedCalories:re,time:oe,popularity:le}){let M=!1;const H=localStorage.getItem("favorites");return H&&(M=JSON.parse(H).some(ce=>ce._id===e)),`<div class="modal-description-container">
      <button class="close-modal-btn">
        <svg class="close-modal-icon" width="24" height="24">
          <use href="${f}#icon-cross"></use>
        </svg>
      </button>
      <img
        class="modal-gif"
        src="${n}"
        alt="${i}"
        width="295"
        height="258"
      />
      <div class="text-container">
        <h4 class="modal-title">${i}</h4>
        <div class="rating-container">
          <p class="modal-exercises-rating">${w.toFixed(1)}</p>
          <div class="star-outer"><div class="star-inner"></div></div>
        </div>
        <ul class="description-list">
          <li class="description-item">
            <p>Target</p>
            <span>${q(L)}</span>
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
            <span>${le}</span>
          </li>
          <li class="description-item">
            <p>Burned Calories</p>
            <span>${re}/${oe} min</span>
          </li>
        </ul>
        <p class="modal-description-text">${l}</p>
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
//# sourceMappingURL=commonHelpers2.js.map
