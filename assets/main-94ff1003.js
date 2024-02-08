import{a as n}from"./vendor-8dea2054.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const l={gallery:document.querySelector(".gallery"),buttons:document.querySelector(".exercises-btns-div"),musclesBtn:document.querySelector("[data-muscles]"),bodypartsBtn:document.querySelector("[data-bodyparts]"),equipBtn:document.querySelector("[data-equipment]")};n.defaults.baseURL="https://energyflow.b.goit.study/api";async function u(){return await n.get("/filters",{params:{filter:"Muscles",page:1,perPage:12}})}u().then(({data:{results:r}})=>d(r),l.musclesBtn.classList.add("active"));function d(r){const s=r.map(({name:o,filter:i,imgUrl:e})=>`<li class="gallery-item">
        <a href="">
        <img class="gallery-image" src="${e}" alt="Galllery Image">
            <ul class="gallery-item-description">
                <li class="name">${o}</li>
                <li class="filter">${i}</li>
            </ul>
        </a>
    </li>`).join("");l.gallery.insertAdjacentHTML("beforeend",s)}l.buttons.addEventListener("click",f);let a=null;function f(r){const s=r.target.nodeName==="BUTTON";l.musclesBtn.classList.remove("active"),s&&(r.target.classList.add("active"),a!==null&&a.classList.remove("active"),a=r.target,a===a&&a.classList.add("active"))}
//# sourceMappingURL=main-94ff1003.js.map
