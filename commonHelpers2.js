import"./assets/header-8ae1772f.js";import{i as C,a as y,P as G}from"./assets/vendor-e8675f53.js";function d(e,t="info"){t==="OK"?C.success({position:"topCenter",message:e}):t==="ERROR"?C.error({position:"topCenter",message:e}):C.info({position:"topCenter",message:e})}function o(e="show"){const t=document.querySelector(".loader");e==="show"?t.style.display="inline-block":t.style.display="none"}const i={gallery:document.querySelector(".gallery"),buttons:document.querySelector(".exercises-btns-div"),pagination:document.getElementById("pagination"),musclesBtn:document.querySelector('[data-filter="muscles"]'),bodypartsBtn:document.querySelector('[data-filter="bodypart"]'),equipBtn:document.querySelector('[data-filter="equipment"]')};let P=!0;y.defaults.baseURL="https://energyflow.b.goit.study/api";const l={perPage:12,page:1,filter:"Muscles",totalPages:1,totalItems:0};async function ue(){return i.gallery.innerHTML="",o(),(await y.get("/filters",{params:{filter:l.filter,page:l.page,limit:l.perPage}})).data}function me(e){const t=e.map(({name:s,filter:n,imgUrl:r})=>`<li class="gallery-item">
        <a href="">
        <img class="gallery-image" src="${r}" alt="Galllery Image">
            <ul class="gallery-item-description" data-exercises="${s}">
                <li class="name">${s}</li>
                <li class="filter">${n}</li>
            </ul>
        </a>
    </li>`).join("");i.gallery.innerHTML=t,o("hide")}function O(){ue().then(e=>{const{results:t,totalPages:s,page:n}=e;me(t),P&&(l.totalPages=s,l.totalItems=s*l.perPage,ge())}).catch(e=>{o("hide"),d(e.message,"ERROR")})}O();i.musclesBtn.classList.add("active");i.musclesBtn.disabled=!0;i.buttons.addEventListener("click",e=>{pe(e);const t=e.target;l.page=1,P=!0,t!==e.currentTarget&&(t===i.musclesBtn?(i.musclesBtn.disabled=!0,i.bodypartsBtn.disabled=!1,i.equipBtn.disabled=!1,l.filter="Muscles"):t===i.bodypartsBtn?(i.musclesBtn.disabled=!1,i.bodypartsBtn.disabled=!0,i.equipBtn.disabled=!1,l.filter="Body parts"):t===i.equipBtn&&(i.musclesBtn.disabled=!1,i.bodypartsBtn.disabled=!1,i.equipBtn.disabled=!0,l.filter="Equipment"),O(),A())});let v=null;function pe(e){const t=e.target.nodeName==="BUTTON";i.musclesBtn.classList.remove("active"),t&&(e.target.classList.add("active"),v!==null&&v.classList.remove("active"),v=e.target,v===v&&v.classList.add("active"))}function ge(){if(P=!1,l.totalItems>l.perPage)new G("pagination",{totalItems:l.totalItems,itemsPerPage:l.perPage,visiblePages:5}).on("afterMove",function(t){l.page=t.page,O(),A()});else{const e=document.querySelector("#pagination");e.innerHTML=""}}function A(){const e=i.buttons.getBoundingClientRect();window.scrollBy({top:e.y+e.height,left:0,behavior:"smooth"})}const f="/fson97-group-10/assets/icons-e0dcdaec.svg",a={page:1,totalPages:1,totalItems:0,keyword:"",filter:"",filterGroup:"",limit:12},p=document.querySelector(".gallery");p&&(p.addEventListener("click",fe),p.classList.add("exercises-card"));const D=document.querySelector(".search-btn"),b=document.querySelector(".search-clear-btn"),m=document.querySelector(".search-input"),I=document.querySelector(".exercises-btns-div"),F=document.querySelector(".ex-search"),j=document.querySelector(".exercises-header"),J=document.querySelector("#pagination"),K=document.querySelector("#pager");function fe(e){if(e.preventDefault(),e.target.closest("ul").dataset.exercises){J.style.display="none",K.style.display="block",D.addEventListener("click",_),b.addEventListener("click",z),m.addEventListener("input",V),I.addEventListener("click",Y),F.style.display="block";const t=document.querySelector(".exercises-button.active");a.filter=t.dataset.filter,a.filterGroup=e.target.closest("ul").dataset.exercises;const s=`Exercises / <span class="head-small">${a.filterGroup.charAt(0).toUpperCase()+a.filterGroup.slice(1)}</span>`;j.innerHTML=s,k(a.filter)}}function _(e){e.preventDefault(),m.value.length>3&&(a.page=1,a.keyword=m.value.trim().toLowerCase(),k(a.filter,!0))}function k(e,t=!0){p.innerHTML="",ve(e).then(s=>{a.totalPages=s.totalPages,a.totalItems=a.limit*s.totalPages,s.results.length===0?(p.innerHTML='<p class="ex-list-no-result">Unfortunately, <span class="accent-text">no results</span> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</p>',U()):(ye(s.results),t&&U()),o("hide")}).catch(s=>{o("hide"),d(s.message,"ERROR")})}async function ve(e){return o(),m.value.length>3?a.keyword=m.value.trim().toLowerCase():a.keyword="",(await y.get("/exercises",{params:{[e]:a.filterGroup,keyword:a.keyword,page:a.page,limit:a.limit}})).data}function ye(e){let t=e.map(n=>`<li class="exercise-item" data-id="${n._id}">
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
      </li>`).join("");p.innerHTML=t;const s=I.getBoundingClientRect();window.scrollBy({top:s.y+s.height,left:0,behavior:"smooth"})}function U(){if(a.totalItems>a.limit)new G("pager",{totalItems:a.totalItems,itemsPerPage:a.limit,visiblePages:5}).on("afterMove",function(t){a.page=t.page,k(a.filter,!1)});else{const e=document.querySelector("#pager");e.innerHTML=""}o("hide")}function z(){m.value="",b.style.visibility="hidden",a.page=1,k(a.filter,a.filterGroup)}function V(){m.value.length>0?b.style.visibility="visible":b.style.visibility="hidden"}function Y(e){e.target.tagName==="BUTTON"&&(m.value="",F.style.display="none",p.innerHTML="",p.classList.remove("exercises-card"),D.removeEventListener("click",_),b.removeEventListener("click",z),m.removeEventListener("input",V),I.removeEventListener("click",Y),K.style.display="none",J.style.display="block",a.page=1,j.innerHTML="Exercises")}const W=document.querySelector(".footer-form");async function he(e){return y.post("https://energyflow.b.goit.study/api/subscription",e)}W.addEventListener("submit",Le);function Le(e){e.preventDefault();const t=e.currentTarget.email.value.trim().toLowerCase();if(t===""){d("The email field is empty!","ERROR");return}const s={email:t};o("show"),he(s).then(({data:n,status:r})=>{r===201&&(o("hide"),d(n.message,"OK"))}).catch(n=>{n.response.status===409?(o("hide"),d("Subscription already exists!")):(d(n.message,"ERROR"),o("hide"))}).finally(W.reset())}let $,Q;const E=document.querySelector(".overlay-rating"),X=document.querySelector(".backdrop"),Z=document.querySelector(".modal-rating"),ee=document.querySelector(".close-modal-rating-btn"),te=document.querySelector(".star-container"),se=document.querySelector(".send-rating-btn");function be(){$=document.querySelector(".give-rating-btn"),$.addEventListener("click",ne),ee.addEventListener("click",x),E.addEventListener("click",re),te.addEventListener("click",ae),se.addEventListener("click",ie)}function M(){$.removeEventListener("click",ne),ee.removeEventListener("click",x),E.removeEventListener("click",re),te.removeEventListener("click",ae),se.removeEventListener("click",ie)}function ne(e){e.preventDefault(),document.removeEventListener("keydown",h),Q=e.target.dataset.id,xe(),ke()}function ke(){Z.classList.remove("visually-hidden"),E.style.display="block",X.style.display="none"}function ae(e){if(e.target.tagName==="INPUT"){const t=e.target.value,s=document.querySelector(".rating-value");s.textContent=Number(t).toFixed(1)}}function ie(e){e.preventDefault(),o();const t=document.querySelector(".rating-form"),s=t.elements.star.value,n=t.elements.email.value.trim().toLowerCase(),r=t.elements.review.value.trim(),L=/\S+@\S+\.\S+/;if(s===""){d("Please set your estimation!","ERROR"),o("hide");return}if(n===""||!L.test(n)){d("Please enter your email!","ERROR"),o("hide");return}Ee(s,n,r).then(function(c){d("Thank you! Your rating has been sent!","OK");const B=document.querySelector(".rating-value");B.textContent="0.0",t.reset(),x()}).catch(function(c){c.response.status===409?d("Such email already exists!"):c.response.status===404?d("Such exercise not found!"):d(c.message,"ERROR")}),o("hide")}async function Ee(e,t,s){const n="https://energyflow.b.goit.study/api",r="exercises";return e=Number(e),await y.patch(`${n}/${r}/${Q}/rating/`,{rate:e,email:t,review:s})}function x(){Z.classList.add("visually-hidden"),E.style.display="none",X.style.display="block",Se(),document.addEventListener("keydown",h)}function xe(){document.querySelector(".modal").classList.add("visually-hidden")}function Se(){document.querySelector(".modal").classList.remove("visually-hidden")}function re(e){e.target.classList.contains("overlay-rating")&&x()}const we=document.querySelector(".gallery"),g=document.querySelector(".backdrop"),u=document.querySelector(".modal");we.addEventListener("click",Be);async function Be(e){if(e.target===e.curentTarget)return;const t=e.target.closest(".ex-item-start");if(t===null)return;o();const s=t.dataset.id,n=await T(s);g.classList.remove("visually-hidden"),u.innerHTML="";const r=qe(n);u.innerHTML=r,be(),o("none"),document.querySelector(".star-inner").style.width=n.rating/5*100+"%",u.classList.remove("visually-hidden"),document.querySelector(".add-favorite-btn").addEventListener("click",Ce),document.querySelector(".close-modal-btn").addEventListener("click",S),g.addEventListener("click",w),document.addEventListener("keydown",h)}async function Ce(e){const t=e.target.closest(".add-favorite-btn"),s=t.dataset.id,n=localStorage.getItem("favorites");if(n){const r=JSON.parse(n);if(r.some(({_id:c})=>c===s))localStorage.setItem("favorites",JSON.stringify(r.filter(({_id:c})=>c!==s))),t.innerHTML=q();else{const c=await T(s);localStorage.setItem("favorites",JSON.stringify([...r,c])),t.innerHTML=q("remove")}}else{const r=await T(s);localStorage.setItem("favorites",JSON.stringify([r])),t.innerHTML=q("remove")}}function S(){u.classList.add("visually-hidden"),g.classList.add("visually-hidden"),u.innerHTML="",document.removeEventListener("keydown",h),M(),closeBtn.removeEventListener("click",S),g.removeEventListener("click",w)}function w(e){e.target.closest(".modal")||(u.classList.add("visually-hidden"),g.classList.add("visually-hidden"),u.innerHTML="",document.removeEventListener("keydown",h),M(),closeBtn.removeEventListener("click",S),g.removeEventListener("click",w))}function h(e){e.preventDefault(),e.key==="Escape"&&(u.classList.add("visually-hidden"),g.classList.add("visually-hidden"),u.innerHTML="",document.removeEventListener("keydown",h),M(),closeBtn.removeEventListener("click",S),g.removeEventListener("click",w))}async function T(e){try{const t="https://energyflow.b.goit.study/api",s="exercises",{data:n}=await y.get(`${t}/${s}/${e}`);return n}catch(t){console.error(t)}}function q(e="add"){return e==="add"?`Add to favorites
        <svg class="icon-heart" width="18" height="18">
          <use href="${f}#icon-heart"></use>
        </svg>`:`Remove from
        <svg class="icon-heart" width="18" height="18">
          <use href="${f}#icon-heart"></use>
        </svg>`}function R(e){return e.charAt(0).toUpperCase()+e.slice(1)}function qe({_id:e,bodyPart:t,equipment:s,gifUrl:n,name:r,target:L,description:c,rating:B,burnedCalories:oe,time:le,popularity:ce}){let H=!1;const N=localStorage.getItem("favorites");return N&&(H=JSON.parse(N).some(de=>de._id===e)),`<div class="modal-description-container">
      <button class="close-modal-btn">
        <svg class="close-modal-icon" width="24" height="24">
          <use href="${f}#icon-cross"></use>
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
          <p class="modal-exercises-rating">${B.toFixed(1)}</p>
          <div class="star-outer"><div class="star-inner"></div></div>
        </div>
        <ul class="description-list">
          <li class="description-item">
            <p>Target</p>
            <span>${R(L)}</span>
          </li>
          <li class="description-item">
            <p>Body Part</p>
            <span>${R(t)}</span>
          </li>
          <li class="description-item">
            <p>Equipment</p>
            <span>${R(s)}</span>
          </li>
          <li class="description-item">
            <p>Popular</p>
            <span>${ce}</span>
          </li>
          <li class="description-item">
            <p>Burned Calories</p>
            <span>${oe}/${le} min</span>
          </li>
        </ul>
        <p class="modal-description-text">${c}</p>
        <div class="modal-buttons-container">
          <button data-id="${e}" class="add-favorite-btn">
            ${H?"Remove from":"Add to favorites"}
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
