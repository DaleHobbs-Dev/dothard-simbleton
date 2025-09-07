import { getBusinesses } from "./database.js";

const businesses = getBusinesses();

export const AgentList = () => {
  const agents = businesses.map(
    ({ purchasingAgent, companyName, phoneWork }) => {
      return `
        <section class="agent">
            <h3 class="agent__name">${purchasingAgent.nameFirst} ${purchasingAgent.nameLast}</h3>
            <p class="agent__company-name">Company: ${companyName}</p>
            <p class="agent__phone-number">Phone Number: ${phoneWork}</p>
        </section>
    `;
    }
  );

  return agents.join("");
};
