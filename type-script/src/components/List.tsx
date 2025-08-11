import type { ListProps } from "../types/types";
import formSubmit from "../utils/formSubmit";
import Item from "./Item";

const List = ({ data, changeDone, setData }: ListProps) => {
  return (
    <div className="flex flex-col gap-5 justify-center items-center bg-sky-400 min-w-1/2 min-h-[200px] rounded-2xl p-10">
      <form
        className="flex gap-2 justify-center items-center mb-5"
        onSubmit={(e) => formSubmit(e, data, setData)}
      >
        <label htmlFor="input">Enter New Title: </label>
        <input
          id="input"
          name="input"
          type="text"
          className="bg-sky-300 rounded-2xl text-center focus:outline-0"
        />
        <button
          type="submit"
          className="cursor-pointer border-[1px] px-1 rounded-2xl"
        >
          Add
        </button>
      </form>
      {data.map((item) => {
        return <Item key={item.id} data={item} changeDone={changeDone} />;
      })}
    </div>
  );
};

export default List;
