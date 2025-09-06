import { getBusinesses } from "./database.js";

const businesses = getBusinesses();

export const NewYorkList = () => {
  let nyBusinessHTML = `<h3>New York Businesses</h3>`;
  const nyBusinesses = businesses.filter(
    (business) => business.addressStateCode === "NY"
  );

  nyBusinesses.forEach((business) => {
    nyBusinessHTML += `<div class="NY-business">
                        <h3><strong>${business.companyName}</strong></h3>
                        <p>${business.addressFullStreet}<br />
                        ${business.addressCity}, ${business.addressStateCode} ${business.addressZipCode}</p>
                    </div>
                <hr/>`;
  });

  return nyBusinessHTML;
};
