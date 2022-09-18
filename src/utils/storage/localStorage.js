export const setLocal = (object) => {
  if (!Object.entries(object).length || typeof object !== "object") return;
  return localStorage.setItem("cache-user", JSON.stringify(object));
};

export const getLocal = (key) => {
  if (!key || typeof key !== "string") return;
  return localStorage.getItem(key);
};

