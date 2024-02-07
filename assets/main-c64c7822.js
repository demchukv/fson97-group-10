import{a}from"./vendor-8dea2054.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();const n={gallery:document.querySelector(".gallery"),musclesBtn:document.querySelector(".muscles"),bodyPartsBtn:document.querySelector(".body-parts"),equipBtn:document.querySelector(".equipment")};a.defaults.baseURL="https://energyflow.b.goit.study/api";async function c(){return await a.get("/filters",{params:{filter:"Muscles",page:1,perPage:12}})}c().then(({data:{results:r}})=>u(r));function u(r){const o=r.map(({name:l,filter:s,imgUrl:e})=>`<li class="gallery-item">
        <a href="">
        <img class="gallery-image" src="${e}" alt="Galllery Image">
            <ul class="gallery-item-description">
                <li>${l}</li>
                <li>${s}</li>
            </ul>
        </a>
    </li>`).join("");n.gallery.insertAdjacentHTML("beforeend",o)}
//# sourceMappingURL=main-c64c7822.js.map
