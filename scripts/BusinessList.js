import { getBusinesses } from "./database.js";

const businesses = getBusinesses();

export const BusinessList = () => {
  let businessHTML = ``;
  businesses.forEach((business) => {
    businessHTML += `<div class="business">
                        <h3><strong>${business.companyName}</strong></h3>
                        <p>${business.addressFullStreet}<br />
                        ${business.addressCity}, ${business.addressStateCode} ${business.addressZipCode}</p>
                    </div>
                <hr/>`;
  });

  return businessHTML;
};

document.querySelector("#content").addEventListener("keydown", (event) => {
  if (event.target.id !== "companySearch") return;
  if (event.key !== "Enter") return;

  const companySearchResultArticle = document.querySelector(".foundBusinesses");

  if (event.key === "Enter") {
    const foundBusiness = businesses.find((business) =>
      business.companyName
        .toLowerCase()
        .includes(event.target.value.toLowerCase())
    );

    if (foundBusiness) {
      companySearchResultArticle.innerHTML = `
          <div class="business">
            <h3><strong>${foundBusiness.companyName}</strong></h3>
            <p>${foundBusiness.addressFullStreet}<br />
            ${foundBusiness.addressCity}, ${foundBusiness.addressStateCode} ${foundBusiness.addressZipCode}</p>
          </div>
          <hr/>
        `;
    } else {
      companySearchResultArticle.innerHTML = `<p>No business found</p>`;
    }
  }
});
