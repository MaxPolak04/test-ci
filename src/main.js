import { nextIndex, prevIndex, getQuote } from "./quotes.js";

let index = 0;

function render() {
  const { text, author } = getQuote(index);
  document.querySelector("#app").innerHTML = `
    <main class="container">
      <h1>DevQuote</h1>
      <blockquote id="quote">"${text}"</blockquote>
      <p class="author">— ${author}</p>
      <div class="controls">
        <button id="prev">← Poprzedni</button>
        <button id="next">Następny →</button>
      </div>
    </main>
  `;
  document.querySelector("#prev").onclick = () => { index = prevIndex(index); render(); };
  document.querySelector("#next").onclick = () => { index = nextIndex(index); render(); };
}

render();
