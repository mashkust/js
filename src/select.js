import { generateCard, deleteCard } from "./card";
export const generateSelect = (valuets) => {
  const select = document.querySelector(".select");

  const valute = valuets.Valute;
  let selectHTML = "";

  for (const key in valute) {
    selectHTML += `<option value="${key}">${valute[key].ID}-${valute[key].Name}</option>`;
  }
  select.innerHTML = selectHTML;
  select.addEventListener("change", () => {
    deleteCard();
    generateCard(valuets, select.value);
  });
};
