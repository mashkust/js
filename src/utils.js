const pad = (num) => ("0" + num).slice(-2);

export const formatDate = (dateObj) => {
  return `${pad(dateObj.getDate())}/${pad(
    dateObj.getMonth() + 1
  )}/${dateObj.getFullYear()},${
    pad(dateObj.getHours()) +
    ":" +
    pad(dateObj.getMinutes()) +
    ":" +
    pad(dateObj.getSeconds())
  }`;
};
