import submit from "../utils/submit";
import useGlobalContext from "../hooks/useGlobalContext";

const Form = () => {
  const { setList } = useGlobalContext();
  const handleSubmit = (e) => {
    const newList = submit(e);
    setList(newList);
  };
  return (
    <form className="flex gap-5" onSubmit={handleSubmit}>
      <div className="flex gap-2 justify-center items-center">
        <label htmlFor="title">title:</label>
        <input
          type="text"
          name="title"
          className="inset-shadow-sm inset-shadow-gray-400 px-2 py-1 rounded-2xl text-center focus:outline-0"
          required
        />
      </div>
      <select
        name="category"
        className="flex justify-center items-center focus-within:outline-0 inset-shadow-sm inset-shadow-gray-400 px-2 py-1 rounded-2xl"
        required
      >
        <optgroup label="categories" className="font-light">
          <option value="get out" className="text-sm">
            get out
          </option>
          <option value="exercise" className="text-sm">
            exercise
          </option>
          <option value="learning" className="text-sm">
            learning
          </option>
          <option value="coding" className="text-sm">
            coding
          </option>
        </optgroup>
      </select>

      <button
        type="submit"
        className="border px-2 rounded-2xl cursor-pointer select-none"
      >
        add
      </button>
    </form>
  );
};

export default Form;
