import{a as u,S as d,i}from"./assets/vendor-CFFvTae-.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const f="56433507-28871935314b081e8c424dd0b";async function m(n,o){return(await u.get("https://pixabay.com/api/",{params:{key:f,q:n,image_type:"photo",page:o,per_page:15,orientation:"horizontal",safesearch:!0}})).data}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),p=new d(".gallery a",{captionsData:"alt",captionDelay:250});function y(n){const o=n.map(t=>`
        <li class="items-list">
            <a href="${t.largeImageURL}">
              <img src="${t.webformatURL}" class="img" alt="${t.tags}"/>
            </a>
          <div class="hits-p">
            <p>Likes:${t.likes}</p>
            <p>Views:${t.views}</p>
            <p>Comments:${t.comments}</p>
            <p>Downloads:${t.downloads}</p>
          </div>
        </li>`).join("");c.innerHTML=o,p.refresh()}function g(){c.innerHTML=""}function h(){l.classList.remove("hidden")}function L(){l.classList.add("hidden")}const w=document.querySelector(".form");w.addEventListener("submit",async n=>{n.preventDefault();const o=n.currentTarget,a=new FormData(o).get("search-text").trim(),e=a,r=1;if(a===""){i.error({title:"Error",message:"Pleas enter a search query"});return}g(),h(),await m(e,r).then(s=>{if(s.hits.length===0){i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}y(s.hits),o.reset()}).catch(s=>{i.error({title:"Error",message:"Something went wrong. Please try again later!"}),console.log(s)}).finally(()=>{L()})});
//# sourceMappingURL=index.js.map
