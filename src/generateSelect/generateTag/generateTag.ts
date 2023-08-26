import { IGenerateTag } from "type";

//гененирует теги по родительскому элементу и тексту
export const generateTag = ({ element, text, key }: IGenerateTag) => {
  if (!key) {
    const p = document.createElement("p");
    p.textContent = text;
    element.appendChild(p);
  } else {
    const option = document.createElement("option");
    option.value = key;
    option.textContent = text;
    if (key === "default") {
      option.setAttribute("selected", "selected");
      option.setAttribute("disabled", "disabled");
    }
    element.appendChild(option);
  }
};
