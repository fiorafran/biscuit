import axios from "axios";
import { collection, query, where, getDocs } from "firebase/firestore";
import firebase from "../firebase-config";

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

    const fetchData = await getDocs(collection(firebase.db, "biscochuelos"));
    let data = [];

    fetchData.forEach((doc) => {
      const docData = doc.data();
      data.push(docData);
    });

    if (data?.length) {
      setStorage("bizcochuelos", data);
      return data;
    }
    return [];
  } catch (e) {
    console.log(e);
  }
};
