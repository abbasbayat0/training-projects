import type { ListProps } from "../types/types";
import Item from "./Item";

const List = ({ data, changeDone }: ListProps) => {
  return (
    <div className="flex flex-col gap-5 justify-center items-center bg-sky-400 min-w-1/2 min-h-[200px] rounded-2xl">
      {data.map((item) => {
        return <Item key={item.id} data={item} changeDone={changeDone} />;
      })}
    </div>
  );
};

export default List;
