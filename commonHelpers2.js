import{g as r,s as p,i as h}from"./assets/scroll-up-7b2982ee.js";import{a as g,P as L}from"./assets/vendor-ecc6328a.js";const l={gallery:document.querySelector(".gallery"),buttons:document.querySelector(".exercises-btns-div"),pagination:document.getElementById("pagination"),musclesBtn:document.querySelector('[data-filter="muscles"]'),bodypartsBtn:document.querySelector('[data-filter="bodypart"]'),equipBtn:document.querySelector('[data-filter="equipment"]')};let y=!0;g.defaults.baseURL="https://energyflow.b.goit.study/api";const i={perPage:12,page:1,filter:"Muscles",totalPages:1,totalItems:0};async function R(){return l.gallery.innerHTML="",r(),(await g.get("/filters",{params:{filter:i.filter,page:i.page,limit:i.perPage}})).data}function $(e){const s=e.map(({name:a,filter:n,imgUrl:f})=>`<li class="gallery-item">
        <a href="">
        <img class="gallery-image" src="${f}" alt="Galllery Image">
            <ul class="gallery-item-description" data-exercises="${a}">
                <li class="name">${a}</li>
                <li class="filter">${n}</li>
            </ul>
        </a>
    </li>`).join("");l.gallery.innerHTML=s,r("hide")}function v(){R().then(e=>{const{results:s,totalPages:a,page:n}=e;$(s),y&&(i.totalPages=a,i.totalItems=a*i.perPage,H())}).catch(e=>{r("hide"),p(e.message,"ERROR")})}v();l.musclesBtn.classList.add("active");l.buttons.addEventListener("click",e=>{O(e);const s=e.target;i.page=1,y=!0,s!==e.currentTarget&&(s===l.musclesBtn?i.filter="Muscles":s===l.bodypartsBtn?i.filter="Body parts":s===l.equipBtn&&(i.filter="Equipment"),v(),w())});let u=null;function O(e){const s=e.target.nodeName==="BUTTON";l.musclesBtn.classList.remove("active"),s&&(e.target.classList.add("active"),u!==null&&u.classList.remove("active"),u=e.target,u===u&&u.classList.add("active"))}function H(){if(y=!1,i.totalItems>i.perPage)new L("pagination",{totalItems:i.totalItems,itemsPerPage:i.perPage,visiblePages:3}).on("afterMove",function(s){i.page=s.page,v(),w()});else{const e=document.querySelector("#pagination");e.innerHTML=""}}function w(){const e=l.buttons.getBoundingClientRect();window.scrollBy({top:e.y+e.height,left:0,behavior:"smooth"})}const t={page:1,totalPages:1,totalItems:0,keyword:"",filter:"",filterGroup:"",limit:12},c=document.querySelector(".gallery");c&&(c.addEventListener("click",U),c.classList.add("exercises-card"));const k=document.querySelector(".search-btn"),d=document.querySelector(".search-clear-btn"),o=document.querySelector(".search-input"),x=document.querySelector(".exercises-btns-div"),P=document.querySelector(".ex-search"),B=document.querySelector(".exercises-header"),S=document.querySelector("#pagination"),E=document.querySelector("#pager");function U(e){if(e.preventDefault(),e.target.closest("ul").dataset.exercises){S.style.display="none",E.style.display="block",k.addEventListener("click",q),d.addEventListener("click",T),o.addEventListener("input",C),x.addEventListener("click",I),P.style.display="block";const s=document.querySelector(".exercises-button.active");t.filter=s.dataset.filter,t.filterGroup=e.target.closest("ul").dataset.exercises;const a=`Exercises / <span class="head-small">${t.filterGroup.charAt(0).toUpperCase()+t.filterGroup.slice(1)}</span>`;B.innerHTML=a,m(t.filter)}}function q(e){e.preventDefault(),o.value.length>3&&(t.page=1,t.keyword=o.value.trim().toLowerCase(),m(t.filter,!0))}function m(e,s=!0){c.innerHTML="",G(e).then(a=>{t.totalPages=a.totalPages,t.totalItems=t.limit*a.totalPages,a.results.length===0?(c.innerHTML='<p class="ex-list-no-result">Unfortunately, <span class="accent-text">no results</span> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</p>',b()):(j(a.results),s&&b()),r("hide")}).catch(a=>{r("hide"),p(a.message,"ERROR")})}async function G(e){return r(),o.value.length>3?t.keyword=o.value.trim().toLowerCase():t.keyword="",(await g.get("/exercises",{params:{[e]:t.filterGroup,keyword:t.keyword,page:t.page,limit:t.limit}})).data}function j(e){let s=e.map(n=>`<li class="exercise-item" data-id="${n._id}">
      <p class="ex-item-head">
      <span class="ex-item-head-group">
      <span class="ex-item-workout">WORKOUT</span>
      <span class="ex-rating-group">
      <span class="ex-item-rating">${Number(n.rating).toFixed(1)}</span>
      <svg class="ex-star-icon" width="18" height="18"><use href="${h}#icon-star"></use></svg>
      </span>
      </span>
      <a class="ex-item-start" href="#" data-id="${n._id}"><span>Start</span> <svg class="ex-arrow-icon" width="14" height="14"><use href="${h}#icon-arrow-start"></use></svg></a>
      </p>
      <span class="ex-title">
      <span class="ex-run-men"><svg class="ex-icon-run" width="14" height="14"><use href="${h}#icon-running_man"></use></svg></span>
      <h3 class="ex-item-name">${n.name.charAt(0).toUpperCase()+n.name.slice(1)}</h3>
      </span>
      <p class="ex-item-info">
      <span class="ex-info-group"><span class="ex-item-desc">Burned calories:</span> <span class="ex-item-value">${n.burnedCalories} / ${n.time} min</span></span>
      <span class="ex-info-group"><span class="ex-item-desc">Body part:</span> <span class="ex-item-value">${n.bodyPart.charAt(0).toUpperCase()+n.bodyPart.slice(1)}</span></span>
      <span class="ex-info-group"><span class="ex-item-desc">Target:</span> <span class="ex-item-value">${n.target.charAt(0).toUpperCase()+n.target.slice(1)}</span></span>
      </p>
      </li>`).join("");c.innerHTML=s;const a=x.getBoundingClientRect();window.scrollBy({top:a.y+a.height,left:0,behavior:"smooth"})}function b(){if(t.totalItems>t.limit)new L("pager",{totalItems:t.totalItems,itemsPerPage:t.limit,visiblePages:3}).on("afterMove",function(s){t.page=s.page,m(t.filter,!1)});else{const e=document.querySelector("#pager");e.innerHTML=""}r("hide")}function T(){o.value="",d.style.visibility="hidden",t.page=1,m(t.filter,t.filterGroup)}function C(){o.value.length>0?d.style.visibility="visible":d.style.visibility="hidden"}function I(e){e.target.tagName==="BUTTON"&&(o.value="",P.style.display="none",c.innerHTML="",c.classList.remove("exercises-card"),k.removeEventListener("click",q),d.removeEventListener("click",T),o.removeEventListener("input",C),x.removeEventListener("click",I),E.style.display="none",S.style.display="block",t.page=1,B.innerHTML="Exercises")}const M=document.querySelector(".footer-form");async function A(e){return g.post("https://energyflow.b.goit.study/api/subscription",e)}M.addEventListener("submit",N);function N(e){e.preventDefault();const s=e.currentTarget.email.value.trim().toLowerCase();if(s===""){p("The email field is empty!","ERROR");return}const a={email:s};r("show"),A(a).then(({data:n,status:f})=>{f===201&&(r("hide"),p(n.message,"OK"))}).catch(n=>{n.response.status===409?(r("hide"),p("Subscription already exists!")):(p(n.message,"ERROR"),r("hide"))}).finally(M.reset())}
//# sourceMappingURL=commonHelpers2.js.map
