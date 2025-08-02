const submit = (e) => {
  e.preventDefault();
  const title = e.target.title.value;
  const category = e.target.category.value;
  const currentList = JSON.parse(localStorage.getItem("list"));
  if (currentList.length !== 0) {
    const id = currentList.length && currentList[currentList.length - 1].id;
    const newItem = { id: id + 1, title, category, show: false };
    const newList = [...currentList, newItem];
    localStorage.setItem("list", JSON.stringify(newList));
    e.target.title.value = "";
    return newList;
  } else {
    const newItem = { id: 1, title, category, show: false };
    const newList = [newItem];
    localStorage.setItem("list", JSON.stringify(newList));
    e.target.title.value = "";
    return newList;
  }
};
export default submit;
