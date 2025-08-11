import type { Data } from "../types/types";

const formSubmit = (
  e: React.FormEvent<HTMLFormElement>,
  data: Data[],
  setData: (item: Data) => void
) => {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  if (formData) {
    const input = formData.get("input") as string;
    const lastID = data[data.length - 1].id;
    const newItem: Data = { id: lastID + 1, title: input, isDone: false };
    setData(newItem);
    e.currentTarget.input.value = "";
  }
};

export default formSubmit;
