import './assets/sass/style.scss'
import { setupCounter } from './assets/js/counter.js'
import javascriptLogo from '../javascript.svg'

// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="/vite.svg" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `

document.querySelector('#app').innerHTML = `
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
    <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
</a>
<div class="card">
    <button id="counter" type="button"></button>
</div>
<section id="galeria"></section>
`;
setupCounter(document.querySelector('#counter'));
