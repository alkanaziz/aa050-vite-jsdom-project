import "./style.scss";
import skills from "./data/skills.json";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = /*html*/ `

    <h1 class="text-2xl mb-3">Vite + TypeScript </h1>
    <p>Welcome to your Vite + TypeScript app</p>

    <h2 class="text-xl mt-4 text-yellow-300">${skills.length} Web Developer Skills</h2>
    <ul class="list-disc ml-6">
      ${skills.map((skill) => {
          return /*html*/`<li><span class="text-orange-400 font-semibold">${skill.name}</span> - ${skill.description}</li>`;
      }).join("")}
      <li>One</li>
      <li>Two</li>
      <li>Three</li>
    </ul>
`;
