import "./style.css";
import { data } from "./api.js";
import { generateSelect } from "./select";

const start = async () => {
  try {
    const valuets = await data;
    generateSelect(valuets);
  } catch (e) {
    document.body.innerHTML = "Ошибка получения данных";
  }
};
start();
