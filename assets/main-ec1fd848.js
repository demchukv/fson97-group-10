import{i as m,a as f}from"./vendor-db25513e.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const p of i.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&a(p)}).observe(document,{childList:!0,subtree:!0});function r(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(s){if(s.ep)return;s.ep=!0;const i=r(s);fetch(s.href,i)}})();function l(e,t="info"){t==="OK"?m.success({position:"topCenter",message:e}):t==="ERROR"?m.error({position:"topCenter",message:e}):m.info({position:"topCenter",message:e})}function c(e="show"){const t=document.querySelector(".loader");e==="show"?t.style.display="inline-block":t.style.display="none"}const n={gallery:document.querySelector(".gallery"),buttons:document.querySelector(".exercises-btns-div"),musclesBtn:document.querySelector('[data-filter="muscles"]'),bodypartsBtn:document.querySelector('[data-filter="bodypart"]'),equipBtn:document.querySelector('[data-filter="equipment"]')};f.defaults.baseURL="https://energyflow.b.goit.study/api";const h=12;let b=1,u="Muscles";async function L(){return await f.get("/filters",{params:{filter:u,page:b,limit:h}})}function B(e){const t=e.map(({name:r,filter:a,imgUrl:s})=>`<li class="gallery-item">
        <a href="">
        <img class="gallery-image" src="${s}" alt="Galllery Image">
            <ul class="gallery-item-description" data-exercises="${r}">
                <li class="name">${r}</li>
                <li class="filter">${a}</li>
            </ul>
        </a>
    </li>`).join("");n.gallery.innerHTML=t}function d(){L().then(({data:{results:e}})=>B(e))}d();n.musclesBtn.classList.add("active");n.buttons.addEventListener("click",e=>{O(e);const t=e.target;if(t!==e.currentTarget){if(t===n.musclesBtn){u="Muscles",d();return}else if(t===n.bodypartsBtn){u="Body parts",d();return}else if(t===n.equipBtn){u="Equipment",d();return}}});let o=null;function O(e){const t=e.target.nodeName==="BUTTON";n.musclesBtn.classList.remove("active"),t&&(e.target.classList.add("active"),o!==null&&o.classList.remove("active"),o=e.target,o===o&&o.classList.add("active"))}let q=1;const S=12,y=document.querySelector(".gallery");y&&y.addEventListener("click",v);function v(e){if(e.preventDefault(),e.target.closest("ul").dataset.exercises){const r=document.querySelector(".exercises-button.active").dataset.filter,a=e.target.closest("ul").dataset.exercises;E(r,a).then(s=>$(s.results))}}async function E(e,t){return(await f.get("/exercises",{params:{[e]:t,page:q,limit:S}})).data}function $(e){const t=e.map(r=>`<li class="exercise-item" data-id="${r._id}">
      <span>WORKOUT</span>
      <span>${r.rating}</span>
      <span>Start</span>
      <span>${r.name.charAt(0).toUpperCase()+r.name.slice(1)}</span>
      <span>Burned calories: ${r.burnedCalories}/${r.time} min</span>
      <span>Body part: ${r.bodyPart.charAt(0).toUpperCase()+r.bodyPart.slice(1)}</span>
      <span>Target: ${r.target.charAt(0).toUpperCase()+r.target.slice(1)}</span>
      </li>`).join("");y.innerHTML=t}const g=document.querySelector(".footer-form");async function x(e){return f.post("https://energyflow.b.goit.study/api/subscription",e)}g.addEventListener("submit",R);function R(e){e.preventDefault();const t=e.currentTarget.email.value.trim().toLowerCase();if(t===""){l("The email field is empty!","ERROR");return}const r={email:t};c("show"),x(r).then(({data:a,status:s})=>{s===201&&(c("hide"),l(a.message,"OK"))}).catch(a=>{a.response.status===409?(c("hide"),l("Subscription already exists!")):(l(a.message,"ERROR"),c("hide"))}).finally(g.reset())}
//# sourceMappingURL=main-ec1fd848.js.map