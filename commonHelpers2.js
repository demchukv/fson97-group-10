import"./assets/styles-fc0d7991.js";import{i as B,a as y,P as de}from"./assets/vendor-e8675f53.js";function c(e,t="info"){t==="OK"?B.success({position:"topCenter",message:e}):t==="ERROR"?B.error({position:"topCenter",message:e}):B.info({position:"topCenter",message:e})}function o(e="show"){const t=document.querySelector(".loader");e==="show"?t.style.display="inline-block":t.style.display="none"}const i={gallery:document.querySelector(".gallery"),buttons:document.querySelector(".exercises-btns-div"),pagination:document.getElementById("pagination"),musclesBtn:document.querySelector('[data-filter="muscles"]'),bodypartsBtn:document.querySelector('[data-filter="bodypart"]'),equipBtn:document.querySelector('[data-filter="equipment"]')};y.defaults.baseURL="https://energyflow.b.goit.study/api";const m={perPage:12,page:1,filter:"Muscles",totalPages:1,totalItems:0};async function N(){return o(),(await y.get("/filters",{params:{filter:m.filter,page:m.page,limit:m.perPage}})).data}function U(e){i.gallery.innerHTML="";const t=e.map(({name:s,filter:n,imgUrl:r})=>`<li class="gallery-item">
        <a href="">
        <img class="gallery-image" src="${r}" alt="Galllery Image">
            <ul class="gallery-item-description" data-exercises="${s}">
                <li class="name">${s}</li>
                <li class="filter">${n}</li>
            </ul>
        </a>
    </li>`).join("");i.gallery.innerHTML=t,o("hide")}function G(){m.page=1,N().then(e=>{const{results:t,totalPages:s,page:n}=e;if(U(t),s>1){const r=me(n,s);i.pagination.innerHTML=r}else i.pagination.innerHTML=""}).catch(e=>{o("hide"),c(e.message,"ERROR")})}G();i.musclesBtn.classList.add("active");i.musclesBtn.disabled=!0;i.buttons.addEventListener("click",e=>{ue(e);const t=e.target;t!==e.currentTarget&&(t===i.musclesBtn?(i.musclesBtn.disabled=!0,i.bodypartsBtn.disabled=!1,i.equipBtn.disabled=!1,m.filter="Muscles"):t===i.bodypartsBtn?(i.musclesBtn.disabled=!1,i.bodypartsBtn.disabled=!0,i.equipBtn.disabled=!1,m.filter="Body parts"):t===i.equipBtn&&(i.musclesBtn.disabled=!1,i.bodypartsBtn.disabled=!1,i.equipBtn.disabled=!0,m.filter="Equipment"),G())});let v=null;function ue(e){const t=e.target.nodeName==="BUTTON";i.musclesBtn.classList.remove("active"),t&&(e.target.classList.add("active"),v!==null&&v.classList.remove("active"),v=e.target,v===v&&v.classList.add("active"))}i.pagination.addEventListener("click",pe);function me(e,t){let s="";for(;e<=t;e++)s+=`<button class="pagination-btn" type="button">${e}</button>`;return s}async function pe(e){m.page=e.target.textContent,i.gallery.innerHTML="";try{const{results:t}=await N();U(t)}catch(t){console.log(t)}}const p="/fson97-group-10/assets/icons-7beb2351.svg",a={page:1,totalPages:1,totalItems:0,keyword:"",filter:"",filterGroup:"",limit:12},g=document.querySelector(".gallery");g&&(g.addEventListener("click",ge),g.classList.add("exercises-card"));const A=document.querySelector(".search-btn"),b=document.querySelector(".search-clear-btn"),u=document.querySelector(".search-input"),T=document.querySelector(".exercises-btns-div"),D=document.querySelector(".ex-search"),F=document.querySelector(".exercises-header"),j=document.querySelector("#pagination"),J=document.querySelector("#pager");function ge(e){if(e.preventDefault(),e.target.closest("ul").dataset.exercises){j.style.display="none",J.style.display="block",A.addEventListener("click",K),b.addEventListener("click",_),u.addEventListener("input",z),T.addEventListener("click",V),D.style.display="block";const t=document.querySelector(".exercises-button.active");a.filter=t.dataset.filter,a.filterGroup=e.target.closest("ul").dataset.exercises;const s=`Exercises / <span class="head-small">${a.filterGroup.charAt(0).toUpperCase()+a.filterGroup.slice(1)}</span>`;F.innerHTML=s,k(a.filter)}}function K(e){e.preventDefault(),u.value.length>3&&(a.page=1,a.keyword=u.value.trim().toLowerCase(),k(a.filter,!0))}function k(e,t=!0){g.innerHTML="",fe(e).then(s=>{a.totalPages=s.totalPages,a.totalItems=a.limit*s.totalPages,s.results.length===0?(g.innerHTML='<p class="ex-list-no-result">Unfortunately, <span class="accent-text">no results</span> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</p>',H()):(ve(s.results),t&&H()),o("hide")}).catch(s=>{o("hide"),c(s.message,"ERROR")})}async function fe(e){return o(),u.value.length>3?a.keyword=u.value.trim().toLowerCase():a.keyword="",(await y.get("/exercises",{params:{[e]:a.filterGroup,keyword:a.keyword,page:a.page,limit:a.limit}})).data}function ve(e){let t=e.map(n=>`<li class="exercise-item" data-id="${n._id}">
      <p class="ex-item-head">
      <span class="ex-item-head-group">
      <span class="ex-item-workout">WORKOUT</span>
      <span class="ex-rating-group">
      <span class="ex-item-rating">${Number(n.rating).toFixed(1)}</span>
      <svg class="ex-star-icon" width="18" height="18"><use href="${p}#icon-star"></use></svg>
      </span>
      </span>
      <a class="ex-item-start" href="#" data-id="${n._id}"><span>Start</span> <svg class="ex-arrow-icon" width="14" height="14"><use href="${p}#icon-arrow-start"></use></svg></a>
      </p>
      <span class="ex-title">
      <span class="ex-run-men"><svg class="ex-icon-run" width="14" height="14"><use href="${p}#icon-running_man"></use></svg></span>
      <h3 class="ex-item-name">${n.name.charAt(0).toUpperCase()+n.name.slice(1)}</h3>
      </span>
      <p class="ex-item-info">
      <span class="ex-info-group"><span class="ex-item-desc">Burned calories:</span> <span class="ex-item-value">${n.burnedCalories} / ${n.time} min</span></span>
      <span class="ex-info-group"><span class="ex-item-desc">Body part:</span> <span class="ex-item-value">${n.bodyPart.charAt(0).toUpperCase()+n.bodyPart.slice(1)}</span></span>
      <span class="ex-info-group"><span class="ex-item-desc">Target:</span> <span class="ex-item-value">${n.target.charAt(0).toUpperCase()+n.target.slice(1)}</span></span>
      </p>
      </li>`).join("");g.innerHTML=t;const s=T.getBoundingClientRect();window.scrollBy({top:s.y+s.height,left:0,behavior:"smooth"})}function H(){if(a.totalItems>a.limit)new de("pager",{totalItems:a.totalItems,itemsPerPage:a.limit,visiblePages:3}).on("afterMove",function(t){a.page=t.page,k(a.filter,!1)});else{const e=document.querySelector("#pager");e.innerHTML=""}o("hide")}function _(){u.value="",b.style.visibility="hidden",a.page=1,k(a.filter,a.filterGroup)}function z(){u.value.length>0?b.style.visibility="visible":b.style.visibility="hidden"}function V(e){e.target.tagName==="BUTTON"&&(u.value="",D.style.display="none",g.innerHTML="",g.classList.remove("exercises-card"),A.removeEventListener("click",K),b.removeEventListener("click",_),u.removeEventListener("input",z),T.removeEventListener("click",V),J.style.display="none",j.style.display="block",a.page=1,F.innerHTML="Exercises")}const Y=document.querySelector(".footer-form");async function ye(e){return y.post("https://energyflow.b.goit.study/api/subscription",e)}Y.addEventListener("submit",he);function he(e){e.preventDefault();const t=e.currentTarget.email.value.trim().toLowerCase();if(t===""){c("The email field is empty!","ERROR");return}const s={email:t};o("show"),ye(s).then(({data:n,status:r})=>{r===201&&(o("hide"),c(n.message,"OK"))}).catch(n=>{n.response.status===409?(o("hide"),c("Subscription already exists!")):(c(n.message,"ERROR"),o("hide"))}).finally(Y.reset())}let R,W;const E=document.querySelector(".overlay-rating"),Q=document.querySelector(".backdrop"),X=document.querySelector(".modal-rating"),Z=document.querySelector(".close-modal-rating-btn"),ee=document.querySelector(".star-container"),te=document.querySelector(".send-rating-btn");function Le(){R=document.querySelector(".give-rating-btn"),R.addEventListener("click",se),Z.addEventListener("click",O),E.addEventListener("click",ie),ee.addEventListener("click",ne),te.addEventListener("click",ae)}function M(){R.removeEventListener("click",se),Z.removeEventListener("click",O),E.removeEventListener("click",ie),ee.removeEventListener("click",ne),te.removeEventListener("click",ae)}function se(e){e.preventDefault(),document.removeEventListener("keydown",h),W=e.target.dataset.id,Ee(),be()}function be(){X.classList.remove("visually-hidden"),E.style.display="block",Q.style.display="none"}function ne(e){if(e.target.tagName==="INPUT"){const t=e.target.value,s=document.querySelector(".rating-value");s.textContent=Number(t).toFixed(1)}}function ae(e){e.preventDefault(),o();const t=document.querySelector(".rating-form"),s=t.elements.star.value,n=t.elements.email.value.trim().toLowerCase(),r=t.elements.review.value.trim(),L=/\S+@\S+\.\S+/;if(s===""){c("Please set your estimation!","ERROR"),o("hide");return}if(n===""||!L.test(n)){c("Please enter your email!","ERROR"),o("hide");return}ke(s,n,r).then(function(l){console.log(l),c("Thank you! Your rating has been sent!","OK");const w=document.querySelector(".rating-value");w.textContent="0.0"}).catch(function(l){l.response.status===409?c("Such email already exists!"):l.response.status===404?c("Such exercise not found!"):c(l.message,"ERROR")}).finally(()=>{o("hide"),t.reset()})}async function ke(e,t,s){const n="https://energyflow.b.goit.study/api",r="exercises";return e=Number(e),await y.patch(`${n}/${r}/${W}/rating/`,{rate:e,email:t,review:s})}function O(){X.classList.add("visually-hidden"),E.style.display="none",Q.style.display="block",xe(),document.addEventListener("keydown",h)}function Ee(){document.querySelector(".modal").classList.add("visually-hidden")}function xe(){document.querySelector(".modal").classList.remove("visually-hidden")}function ie(e){e.target.classList.contains("overlay-rating")&&O()}const Se=document.querySelector(".gallery"),f=document.querySelector(".backdrop"),d=document.querySelector(".modal");Se.addEventListener("click",we);async function we(e){if(e.target===e.curentTarget)return;const t=e.target.closest(".ex-item-start");if(t===null)return;o();const s=t.dataset.id,n=await $(s);f.classList.remove("visually-hidden"),d.innerHTML="";const r=Ce(n);d.innerHTML=r,Le(),o("none"),d.classList.remove("visually-hidden"),document.querySelector(".add-favorite-btn").addEventListener("click",Be),document.querySelector(".close-modal-btn").addEventListener("click",x),f.addEventListener("click",S),document.addEventListener("keydown",h)}async function Be(e){const t=e.target.closest(".add-favorite-btn"),s=t.dataset.id,n=localStorage.getItem("favorites");if(n){const r=JSON.parse(n);if(r.some(({_id:l})=>l===s))localStorage.setItem("favorites",JSON.stringify(r.filter(({_id:l})=>l!==s))),t.innerHTML=C();else{const l=await $(s);localStorage.setItem("favorites",JSON.stringify([...r,l])),t.innerHTML=C("remove")}}else{const r=await $(s);localStorage.setItem("favorites",JSON.stringify([r])),t.innerHTML=C("remove")}}function x(){d.classList.add("visually-hidden"),f.classList.add("visually-hidden"),d.innerHTML="",document.removeEventListener("keydown",h),M(),closeBtn.removeEventListener("click",x),f.removeEventListener("click",S)}function S(e){e.target.closest(".modal")||(d.classList.add("visually-hidden"),f.classList.add("visually-hidden"),d.innerHTML="",document.removeEventListener("keydown",h),M(),closeBtn.removeEventListener("click",x),f.removeEventListener("click",S))}function h(e){e.preventDefault(),e.key==="Escape"&&(d.classList.add("visually-hidden"),f.classList.add("visually-hidden"),d.innerHTML="",document.removeEventListener("keydown",h),M(),closeBtn.removeEventListener("click",x),f.removeEventListener("click",S))}async function $(e){try{const t="https://energyflow.b.goit.study/api",s="exercises",{data:n}=await y.get(`${t}/${s}/${e}`);return n}catch(t){console.error(t)}}function C(e="add"){return e==="add"?`Add to favorites
        <svg class="icon-heart" width="18" height="18">
          <use href="${p}#icon-heart"></use>
        </svg>`:`Remove from
        <svg class="icon-heart" width="18" height="18">
          <use href="${p}#icon-heart"></use>
        </svg>`}function q(e){return e.charAt(0).toUpperCase()+e.slice(1)}function Ce({_id:e,bodyPart:t,equipment:s,gifUrl:n,name:r,target:L,description:l,rating:w,burnedCalories:re,time:oe,popularity:le}){let I=!1;const P=localStorage.getItem("favorites");return P&&(I=JSON.parse(P).some(ce=>ce._id===e)),`<div class="modal-description-container">
      <button class="close-modal-btn">
        <svg class="close-modal-icon" width="24" height="24">
          <use href="${p}#icon-cross"></use>
        </svg>
      </button>
      <img
        class="modal-gif"
        src="${n}"
        alt="${r}"
        width="295"
        height="258"
      />
      <div class="text-container">
        <h4 class="modal-title">${r}</h4>
        <div class="rating-container">
          <p class="modal-exercises-rating">${w}</p>
          <svg class="star" width="18" height="18">
            <use href="${p}#icon-star"></use>
          </svg>
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
            ${I?"Remove from":"Add to favorites"}
            <svg class="icon-heart" width="18" height="18">
              <use href="${p}#icon-heart"></use>
            </svg>
          </button>
          <button data-id="${e}" class="give-rating-btn">
            Give a rating
          </button>
        </div>
      </div>
    </div>`}
//# sourceMappingURL=commonHelpers2.js.map
