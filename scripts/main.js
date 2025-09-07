import { BusinessList } from "./BusinessList.js";
import { ManufacturingList } from "./ManufacturingBusinesses.js";
import { NewYorkList } from "./NewYorkBusinesses.js";
import { AgentList } from "./AgentList.js";

const contentTarget = document.querySelector("#content");

const renderHTML = () => {
  contentTarget.innerHTML = `
  <input type="text" placeholder="Enter business name..." id="companySearch" />

  <article class="foundBusinesses"></article>

  <article class="businesses">
      <h2>Active Businesses</h2>
      ${BusinessList()}
  </article>

  <article class="businesses--manufacturing">
      <h2>Manufacturing Businesses</h2>
        ${ManufacturingList()}
  </article>

  <article class="businesses--newYork">
      <h2>New York Businesses</h2>
        ${NewYorkList()}
  </article>

  <article class="agents">
      <h2>Purchasing Agents</h2>
        ${AgentList()}
  </article>
  `;
};

renderHTML();
