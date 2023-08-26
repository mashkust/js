import { formatDate } from "./utils";
import { generateTag } from "../generateTag/generateTag";
import { IGenerateCard } from "type";

//генеирурет карточку
export const generateCard = ({ valuets, value }: IGenerateCard) => {
  const valute = valuets.Valute;
  const newDate = new Date(valuets.Date);
  const prevDate = new Date(valuets.PreviousDate);

  const element = document.createElement("div");
  element.classList.add("card");

  //генерирует внутренний текст карточки
  generateTag({
    element,
    text: `${valute[value].ID} - ${valute[value].Name} (${value})`,
  });
  generateTag({
    element,
    text: `${formatDate(newDate)}-${valute[value].Value}`,
  });
  generateTag({
    element,
    text: `${formatDate(prevDate)}-${valute[value].Previous}`,
  });

  document.body.appendChild(element);
};
