(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();document.addEventListener("DOMContentLoaded",()=>{const u=location.pathname.split("/").pop(),n=document.querySelector(".page-home a"),r=document.querySelector(".page-favorites a"),o=document.querySelector(".home-mob-menu"),e=document.querySelector(".favorites-mob-menu"),t={openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]")};t.openMenuBtn.addEventListener("click",c),t.closeMenuBtn.addEventListener("click",c);function c(){t.menu.classList.toggle("is-hidden")}function s(i,d,l,a){i.parentElement.classList.add("active"),l.classList.add("home-mob-menu"),d.parentElement.classList.remove("active"),a.classList.remove("home-mob-menu")}u==="index.html"||u===""?s(n,r,o,e):u==="favorites.html"&&s(r,n,e,o),n.addEventListener("click",i=>{s(n,r,o,e)}),r.addEventListener("click",i=>{s(r,n,e,o)}),o.addEventListener("click",i=>{s(n,r,o,e)}),e.addEventListener("click",i=>{s(r,n,e,o)})});
//# sourceMappingURL=header-8ae1772f.js.map