import Person from "./Person";

const List = ({ list, setList }) => {
  return (
    <main className="w-1/3 min-h-1/3 bg-green-200 flex flex-col justify-center items-center rounded-2xl relative">
      {/* if no person exist show the text */}
      {list.length === 0 ? (
        <p className="text-red-500">The List Is Empty !</p>
      ) : (
        // fragment for parent
        <>
          <h1 className="absolute top-5">Birthday List</h1>
          <article className="flex flex-col justify-center items-center m-18 gap-2">
            {list.map((person) => {
              // return this components for each person in the list & destructure the item and pass 
              return <Person {...person} />;
            })}
          </article>

          <button
            // clear option
            onClick={() => setList([])}
            className="p-1 rounded-2xl bg-green-400 hover:bg-green-500 hover:shadow-green-600 hover:font-bold cursor-pointer absolute bottom-2 shadow-inner"
          >
            Clear All
          </button>
        </>
      )}
    </main>
  );
};

export default List;
