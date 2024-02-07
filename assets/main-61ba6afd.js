import{a}from"./vendor-8dea2054.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const n={gallery:document.querySelector(".gallery"),buttons:document.querySelector(".exercises-btns-div")};a.defaults.baseURL="https://energyflow.b.goit.study/api";async function c(){return await a.get("/filters",{params:{filter:"Muscles",page:1,perPage:12}})}c().then(({data:{results:r}})=>u(r));function u(r){const s=r.map(({name:i,filter:o,imgUrl:e})=>`<li class="gallery-item">
        <a href="">
        <img class="gallery-image" src="${e}" alt="Galllery Image">
            <ul class="gallery-item-description">
                <li class="name">${i}</li>
                <li class="filter">${o}</li>
            </ul>
        </a>
    </li>`).join("");n.gallery.insertAdjacentHTML("beforeend",s)}
//# sourceMappingURL=main-61ba6afd.js.map
