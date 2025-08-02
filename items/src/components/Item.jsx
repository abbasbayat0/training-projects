import useGlobalContext from "../hooks/useGlobalContext";

const Item = ({ id, title }) => {
  const { remove, showMore, current } = useGlobalContext();
  return (
    <div className="flex flex-col justify-center items-center">
      <p>{title}</p>
      <p
        className="text-red-600 cursor-pointer select-none"
        onClick={() => {
          remove(id);
        }}
      >
        delete
      </p>
      <p
        className="cursor-pointer select-none text-green-600"
        onClick={() => {
          showMore(id);
        }}
      >
        {current === id ? "close" : "open"}
      </p>
      {current === id ? (
        <p className="text-center max-w-8/12 border rounded-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          perspiciatis aliquam accusantium sequi harum voluptatum aut
          consequatur architecto explicabo unde. Fugit obcaecati cupiditate, non
          id quisquam neque vel accusamus fuga?
        </p>
      ) : (
        ""
      )}
    </div>
  );
};

export default Item;
