import "./style.css";
import typescriptLogo from "./typescript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div class="flex flex-col items-center justify-center min-h-screen bg-neutral-900 text-white">
    <div class="flex flex-col items-center">
      <div class="flex flex-row items-center gap-8 mb-4">
        <a href="https://vite.dev" target="_blank">
          <img src="${viteLogo}" class="h-24 transition-filter duration-300 hover:drop-shadow-[0_0_2em_#646cffaa]" alt="Vite logo" />
        </a>
        <a href="https://www.typescriptlang.org/" target="_blank">
          <img src="${typescriptLogo}" class="h-24 transition-filter duration-300 hover:drop-shadow-[0_0_2em_#3178c6aa]" alt="TypeScript logo" />
        </a>
      </div>
      <h1 class="text-5xl font-bold mb-6">Vite + TypeScript</h1>
      <div class="card bg-neutral-800 rounded-lg p-8 mb-4">
        <button id="counter" type="button" class="bg-neutral-700 text-white px-6 py-2 rounded-lg border border-transparent font-medium text-lg hover:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition">count is 0</button>
      </div>
      <p class="read-the-docs text-neutral-400 mt-2">
        Click on the Vite and TypeScript logos to learn more
      </p>
    </div>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
