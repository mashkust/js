const url = "https://www.cbr-xml-daily.ru/daily_json.js";

async function getData(url) {
  const response = await fetch(url, {
    method: "GET",
  });
  return await response.json();
}

export const data = getData(url).then((data) => {
  return data;
});
