import axios from "axios";

const getStorage = (key = "") => {
  if (!key) return;
  const formattedData = JSON.parse(localStorage.getItem(key));
  if (!formattedData) return;
  return formattedData;
};

const setStorage = (key = "", data) => {
  if (!key || !data) return;
  const formattedData = JSON.stringify(data);
  if (!formattedData) return;
  localStorage.setItem(key, formattedData);
};

export const getData = async () => {
  try {
    const isInStorage = getStorage("bizcochuelos");
    console.log({ isInStorage });
    if (isInStorage) {
      console.log("retorna el storage");
      return isInStorage;
    }
    const { data } = await axios.get(
      "https://sheet.best/api/sheets/f97aa33b-ad86-42a2-b0f4-89a1f5cf9b3f"
    );
    if (data && data.length) setStorage("bizcochuelos", data);
    console.log("retorna la data geteada");
    return data;
  } catch (e) {
    console.log(e);
  }
};
