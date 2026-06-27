import{a as p,S as y,i}from"./assets/vendor-CFFvTae-.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const h="56433507-28871935314b081e8c424dd0b";async function g(s,o){return(await p.get("https://pixabay.com/api/",{params:{key:h,q:s,image_type:"photo",page:o,per_page:15,orientation:"horizontal",safesearch:!0}})).data}const d=document.querySelector(".gallery"),f=document.querySelector(".loader"),m=document.querySelector(".loader-btn"),L=new y(".gallery a",{captionsData:"alt",captionDelay:250});function w(s){const o=s.map(r=>`
        <li class="items-list">
            <a href="${r.largeImageURL}">
              <img src="${r.webformatURL}" class="img" alt="${r.tags}"/>
            </a>
          <div class="hits-p">
            <p>Likes:${r.likes}</p>
            <p>Views:${r.views}</p>
            <p>Comments:${r.comments}</p>
            <p>Downloads:${r.downloads}</p>
          </div>
        </li>`).join("");d.innerHTML=o,L.refresh()}function b(){d.innerHTML=""}function P(){f.classList.remove("hidden")}function q(){f.classList.add("hidden")}function E(){m.classList.remove("hidden")}function l(){m.classList.add("hidden")}const S=document.querySelector(".form");let u="",c=1;S.addEventListener("submit",async s=>{s.preventDefault();const o=s.currentTarget,a=new FormData(o).get("search-text").trim();if(a===""){i.error({title:"Error",message:"Pleas enter a search query"});return}u=a,c=1,b(),l(),P();try{const e=await g(u,c);if(e.hits.length===0){i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}w(e.hits);const t=Math.ceil(e.totalHits/15);c<t?E():l(),o.reset()}catch(e){i.error({title:"Error",message:"Something went wrong. Please try again later!"}),console.log(e)}finally{q()}});
//# sourceMappingURL=index.js.map
