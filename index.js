import{a as u,S as d,i}from"./assets/vendor--e875Ek4.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const f="56433507-28871935314b081e8c424dd0b";function m(s){return u.get("https://pixabay.com/api/",{params:{key:f,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>t.data)}const l=document.querySelector(".gallery"),c=document.querySelector(".loader"),p=new d(".gallery a",{captionsData:"alt",captionDelay:250});function h(s){const t=s.map(o=>`
        <li class="items-list">
            <a href="${o.largeImageURL}">
              <img src="${o.webformatURL}" class="img" alt="${o.tags}"/>
            </a>
          <div class="hits-p">
            <p>Likes:${o.likes}</p>
            <p>Views:${o.views}</p>
            <p>Comments:${o.comments}</p>
            <p>Downloads:${o.downloads}</p>
          </div>
        </li>`).join("");l.innerHTML=t,p.refresh()}function y(){l.innerHTML=""}function g(){c.classList.remove("hidden")}function L(){c.classList.add("hidden")}const w=document.querySelector(".form");w.addEventListener("submit",s=>{s.preventDefault();const t=s.currentTarget,n=new FormData(t).get("search-text").trim();if(n===""){i.error({title:"Error",message:"Pleas enter a search query"});return}y(),g(),m(n).then(e=>{if(e.hits.length===0){i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}h(e.hits),t.reset()}).catch(e=>{i.error({title:"Error",message:"Something went wrong. Please try again later!"}),console.log(e)}).finally(()=>{L()})});
//# sourceMappingURL=index.js.map
