const submit = (e) => {
  e.preventDefault();
  const title = e.target.title.value;
  const category = e.target.category.value;
  const currentList = JSON.parse(localStorage.getItem("list"));
  if (currentList) {
    const newItem = { id: currentList?.length + 1, title, category };
    const newList = [...currentList, newItem];
    localStorage.setItem("list", JSON.stringify(newList));
  } else {
    const newItem = { id: 1, title, category };
    const newList = [newItem];
    localStorage.setItem("list", JSON.stringify(newList));
  }
  e.target.title.value = ""
};
export default submit;
