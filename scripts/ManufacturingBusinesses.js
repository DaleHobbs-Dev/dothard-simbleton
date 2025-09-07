import { getBusinesses } from "./database.js";

const businessList = getBusinesses();

export const ManufacturingList = () => {
  let businessHTML = ``;
  const manufacturingBusinesses = businessList.filter(
    (business) => business.companyIndustry === "Manufacturing"
  );

  manufacturingBusinesses.forEach((business) => {
    businessHTML += `<div class="manufacturing-business">
                        <h3><strong>${business.companyName}</strong></h3>
                        <p>${business.addressFullStreet}<br />
                        ${business.addressCity}, ${business.addressStateCode} ${business.addressZipCode}</p>
                    </div>
                <hr/>`;
  });

  return businessHTML;
};
