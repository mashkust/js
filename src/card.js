import { formatDate } from "./utils";

export const generateCard = (valuets, value) => {
  const valute = valuets.Valute;
  const newDiv = document.createElement("div");
  newDiv.classList.add("card");

  const generateTag = (text) => {
    const p = document.createElement("p");
    p.textContent = text;
    newDiv.appendChild(p);
  };

  const newDate = new Date(valuets.Date);
  const prevDate = new Date(valuets.PreviousDate);
  console.log(newDate, prevDate);
  generateTag(`${valute[value].ID} - ${valute[value].Name} (${value})`);
  generateTag(`${formatDate(newDate)}-${valute[value].Value}`);
  generateTag(`${formatDate(prevDate)}-${valute[value].Previous}`);

  document.body.appendChild(newDiv);
};

export const deleteCard = () => {
  const card = document.querySelector(".card");
  if (card) {
    card.remove();
  }
};
