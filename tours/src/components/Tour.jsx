import { useState } from "react";
import useRemoveItem from "../hooks/useRemoveItem";

const Tour = ({ id, name, info, image, price }) => {
  const [showFull, setShowFull] = useState(false);
  const { removeItem } = useRemoveItem();
  return (
    <section className="w-full p-5 flex justify-center items-center flex-col rounded-2xl">
      <img src={image} alt={name} className="rounded-2xl" />
      <p className="text-center mt-2">{name}</p>
      <p>{price}$</p>
      <div>
        <p className="text-center mt-5 text-sm">
          {showFull ? info : `${info?.slice(0, 200)}...`}{" "}
          <span
            onClick={() => setShowFull(!showFull)}
            className="text-green-800 cursor-pointer select-none"
          >
            {showFull ? "show less" : "show more"}
          </span>
        </p>
        <p
          className="text-center mt-2 text-red-600 cursor-pointer select-none"
          onClick={() => removeItem(id)}
        >
          remove
        </p>
      </div>
    </section>
  );
};

export default Tour;
