import useGlobalContext from "../hooks/useGlobalContext";

const Form = () => {
  const { theme } = useGlobalContext();
  const handleSubmit = (e) => {
    e.preventDefault;
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="mt-20 flex items-center justify-center gap-2"
    >
      <input
        placeholder="cat"
        type="text"
        className={`${
          theme ? "bg-gray-200" : "shadow shadow-gray-900"
        } rounded-2xl flex items-center justify-center px-2 py-1 transition-all duration-500 focus:outline-0 text-center`}
      />
      <button
        type="submit"
        className={`${
          theme ? "text-white" : ""
        } transition-all duration-500 cursor-pointer select-none rounded-2xl px-1 `}
      >
        Search
      </button>
    </form>
  );
};

export default Form;
