(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function c(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(e){if(e.ep)return;e.ep=!0;const o=c(e);fetch(e.href,o)}})();const i=[{text:"First, solve the problem. Then, write the code.",author:"John Johnson"},{text:"Simplicity is the soul of efficiency.",author:"Austin Freeman"},{text:"Make it work, make it right, make it fast.",author:"Kent Beck"},{text:"Programs must be written for people to read.",author:"Harold Abelson"}];function a(r,t=i.length){return(r+1)%t}function d(r,t=i.length){return(r-1+t)%t}function f(r){const t=i.length,c=(r%t+t)%t;return i[c]}let n=0;function u(){const{text:r,author:t}=f(n);document.querySelector("#app").innerHTML=`
    <main class="container">
      <h1>DevQuote</h1>
      <blockquote id="quote">"${r}"</blockquote>
      <p class="author">— ${t}</p>
      <div class="controls">
        <button id="prev">← Poprzedni</button>
        <button id="next">Następny →</button>
      </div>
    </main>
  `,document.querySelector("#prev").onclick=()=>{n=d(n),u()},document.querySelector("#next").onclick=()=>{n=a(n),u()}}u();
