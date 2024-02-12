import{p as g,g as r,s as p,i as h}from"./assets/scroll-up-51b0b5d8.js";import{a as m,P as b}from"./assets/vendor-e8675f53.js";const l={container:document.querySelector(".exercises-container"),gallery:document.querySelector(".gallery"),buttons:document.querySelector(".exercises-btns-div"),pagination:document.getElementById("pagination"),musclesBtn:document.querySelector('[data-filter="muscles"]'),bodypartsBtn:document.querySelector('[data-filter="bodypart"]'),equipBtn:document.querySelector('[data-filter="equipment"]')};let v=!0;m.defaults.baseURL="https://energyflow.b.goit.study/api";const i={perPage:12,page:1,filter:"Muscles",totalPages:1,totalItems:0};async function $(){return g(".gallery","set"),l.gallery.innerHTML="",r(),(await m.get("/filters",{params:{filter:i.filter,page:i.page,limit:i.perPage}})).data}function O(e){const s=e.map(({name:n,filter:a,imgUrl:y})=>`<li class="gallery-item">
        <a href="">
        <img class="gallery-image" src="${y}" alt="Galllery Image">
            <ul class="gallery-item-description" data-exercises="${n}">
                <li class="name">${n}</li>
                <li class="filter">${a}</li>
            </ul>
        </a>
    </li>`).join("");l.gallery.innerHTML=s,r("hide")}function x(){$().then(e=>{const{results:s,totalPages:n,page:a}=e;O(s),g(".gallery","unset"),v&&(i.totalPages=n,i.totalItems=n*i.perPage,U())}).catch(e=>{r("hide"),p(e.message,"ERROR")})}x();l.musclesBtn.classList.add("active");l.buttons.addEventListener("click",e=>{H(e);const s=e.target;i.page=1,v=!0,s!==e.currentTarget&&(s===l.musclesBtn?i.filter="Muscles":s===l.bodypartsBtn?i.filter="Body parts":s===l.equipBtn&&(i.filter="Equipment"),x(),w())});let u=null;function H(e){const s=e.target.nodeName==="BUTTON";l.musclesBtn.classList.remove("active"),s&&(e.target.classList.add("active"),u!==null&&u.classList.remove("active"),u=e.target,u===u&&u.classList.add("active"))}function U(){if(v=!1,i.totalItems>i.perPage)new b("pagination",{totalItems:i.totalItems,itemsPerPage:i.perPage,visiblePages:3}).on("afterMove",function(s){i.page=s.page,x(),w()});else{const e=document.querySelector("#pagination");e.innerHTML=""}}function w(){const e=l.container.getBoundingClientRect();window.scrollBy({top:e.y+60,left:0,behavior:"smooth"})}const t={page:1,totalPages:1,totalItems:0,keyword:"",filter:"",filterGroup:"",limit:12},c=document.querySelector(".gallery");c&&(c.addEventListener("click",j),c.classList.add("exercises-card"));const G=document.querySelector(".exercises-container"),k=document.querySelector(".search-btn"),d=document.querySelector(".search-clear-btn"),o=document.querySelector(".search-input"),S=document.querySelector(".exercises-btns-div"),B=document.querySelector(".ex-search"),P=document.querySelector(".exercises-header"),q=document.querySelector("#pagination"),E=document.querySelector("#pager");function j(e){if(e.preventDefault(),e.target.closest("ul").dataset.exercises){q.style.display="none",E.style.display="block",k.addEventListener("click",T),d.addEventListener("click",C),o.addEventListener("input",I),S.addEventListener("click",M),B.style.display="block";const s=document.querySelector(".exercises-button.active");t.filter=s.dataset.filter,t.filterGroup=e.target.closest("ul").dataset.exercises;const n=`Exercises / <span class="head-small">${t.filterGroup.charAt(0).toUpperCase()+t.filterGroup.slice(1)}</span>`;P.innerHTML=n,f(t.filter)}}function T(e){e.preventDefault(),o.value.length>3&&(t.page=1,t.keyword=o.value.trim().toLowerCase(),f(t.filter,!0))}function f(e,s=!0){g(".gallery","set"),c.innerHTML="",A(e).then(n=>{t.totalPages=n.totalPages,t.totalItems=t.limit*n.totalPages,n.results.length===0?(c.innerHTML='<p class="ex-list-no-result">Unfortunately, <span class="accent-text">no results</span> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</p>',L()):(N(n.results),g(".gallery","unset"),s&&L()),r("hide")}).catch(n=>{r("hide"),p(n.message,"ERROR")})}async function A(e){return r(),o.value.length>3?t.keyword=o.value.trim().toLowerCase():t.keyword="",(await m.get("/exercises",{params:{[e]:t.filterGroup,keyword:t.keyword,page:t.page,limit:t.limit}})).data}function N(e){let s=e.map(a=>`<li class="exercise-item" data-id="${a._id}">
      <p class="ex-item-head">
      <span class="ex-item-head-group">
      <span class="ex-item-workout">WORKOUT</span>
      <span class="ex-rating-group">
      <span class="ex-item-rating">${Number(a.rating).toFixed(1)}</span>
      <svg class="ex-star-icon" width="18" height="18"><use href="${h}#icon-star"></use></svg>
      </span>
      </span>
      <a class="ex-item-start" href="" data-id="${a._id}"><span>Start</span> <svg class="ex-arrow-icon" width="14" height="14"><use href="${h}#icon-arrow-start"></use></svg></a>
      </p>
      <span class="ex-title">
      <span class="ex-run-men"><svg class="ex-icon-run" width="14" height="14"><use href="${h}#icon-running_man"></use></svg></span>
      <h3 class="ex-item-name">${a.name.charAt(0).toUpperCase()+a.name.slice(1)}</h3>
      </span>
      <p class="ex-item-info">
      <span class="ex-info-group"><span class="ex-item-desc">Burned calories:</span> <span class="ex-item-value">${a.burnedCalories} / ${a.time} min</span></span>
      <span class="ex-info-group"><span class="ex-item-desc">Body part:</span> <span class="ex-item-value">${a.bodyPart.charAt(0).toUpperCase()+a.bodyPart.slice(1)}</span></span>
      <span class="ex-info-group"><span class="ex-item-desc">Target:</span> <span class="ex-item-value">${a.target.charAt(0).toUpperCase()+a.target.slice(1)}</span></span>
      </p>
      </li>`).join("");c.innerHTML=s;const n=G.getBoundingClientRect();window.scrollBy({top:n.y+60,left:0,behavior:"smooth"})}function L(){if(t.totalItems>t.limit)new b("pager",{totalItems:t.totalItems,itemsPerPage:t.limit,visiblePages:3}).on("afterMove",function(s){t.page=s.page,f(t.filter,!1)});else{const e=document.querySelector("#pager");e.innerHTML=""}r("hide")}function C(){o.value="",d.style.visibility="hidden",t.page=1,f(t.filter,t.filterGroup)}function I(){o.value.length>0?d.style.visibility="visible":d.style.visibility="hidden"}function M(e){e.target.tagName==="BUTTON"&&(o.value="",B.style.display="none",c.innerHTML="",c.classList.remove("exercises-card"),k.removeEventListener("click",T),d.removeEventListener("click",C),o.removeEventListener("input",I),S.removeEventListener("click",M),E.style.display="none",q.style.display="block",t.page=1,P.innerHTML="Exercises")}const R=document.querySelector(".footer-form");async function D(e){return m.post("https://energyflow.b.goit.study/api/subscription",e)}R.addEventListener("submit",F);function F(e){e.preventDefault();const s=e.currentTarget.email.value.trim().toLowerCase();if(s===""){p("The email field is empty!","ERROR");return}const n={email:s};r("show"),D(n).then(({data:a,status:y})=>{y===201&&(r("hide"),p(a.message,"OK"))}).catch(a=>{a.response.status===409?(r("hide"),p("Subscription already exists!")):(p(a.message,"ERROR"),r("hide"))}).finally(R.reset())}
//# sourceMappingURL=commonHelpers2.js.map
