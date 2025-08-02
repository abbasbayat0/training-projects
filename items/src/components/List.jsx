import Item from "./Item";
import useGlobalContext from "../hooks/useGlobalContext";

const List = () => {
  const { cat, setCategory, filteredList, category } = useGlobalContext();
  const categories = [...cat];
  return (
    <article className="flex flex-col gap-5 justify-center items-center mt-10">
      <div className="flex gap-5">
        <p
          className={`${
            category === "all" && "text-blue-600 font-bold"
          } cursor-pointer select-none border rounded-2xl px-1`}
          onClick={(e) => {
            setCategory(e.target.innerText);
          }}
        >
          all
        </p>
        {categories.map((cate, index) => {
          return (
            <p
              key={index}
              className={`${
                category === cate && "text-blue-600 font-bold"
              } cursor-pointer select-none border rounded-2xl px-1`}
              onClick={(e) => {
                setCategory(e.target.innerText);
              }}
            >
              {cate}
            </p>
          );
        })}
      </div>
      {filteredList.map((item) => {
        return <Item key={item.id} {...item} />;
      })}
    </article>
  );
};

export default List;
