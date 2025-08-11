import type { Data } from "../types/types";

const Item = ({
  data,
  changeDone,
}: {
  data: Data;
  changeDone: (id: number) => void;
}) => {
  return (
    <div className="flex justify-center items-center w-2/3">
      <p className="w-1/2">{data.title}</p>
      <input
        type="checkbox"
        checked={data.isDone}
        onChange={() => changeDone(data.id)}
      />
    </div>
  );
};

export default Item;
