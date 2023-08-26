import { generateCard } from "./generateCard/generateCard";
import { deleteCard } from "./deleteCard/deleteCard";
import { Valuets } from "type";
import { generateOption } from "./generateOption/generateOption";

export const generateSelect = (valuets: Valuets) => {
  const valute = valuets.Valute;

  const select = document.createElement("select");
  select.classList.add("select");

  if (valute && select) {
    generateOption({ select, valute });
    select.addEventListener("change", () => {
      deleteCard();
      generateCard({ valuets, value: select.value });
    });
    document.body.appendChild(select);
  } else {
    //отлавиливает ошибку в полученных данных при попытке отрисовки
    alert("Ошибка при отрисовке");
  }
};
