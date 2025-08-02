import { createContext, useEffect, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [list, setList] = useState([]);
  const [category, setCategory] = useState("all");

  const filteredList =
    category === "all"
      ? list
      : list.filter((item) => item.category === category);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("list"));
    if (items) setList(items);
  }, []);

  const cat = new Set();
  list.map((item) => cat.add(item.category));

  const remove = (id) => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
    localStorage.setItem("list", JSON.stringify(newList));
  };

  const showMore = (id) => {
    const newList = list.map((item) => {
      if (item.id === id) return { ...item, show: !item.show };
      return { ...item, show: false };
    });
    setList(newList);
    localStorage.setItem("list", JSON.stringify(newList));
  };

  return (
    <AppContext.Provider
      value={{
        list,
        setList,
        cat,
        setCategory,
        filteredList,
        category,
        remove,
        showMore,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
