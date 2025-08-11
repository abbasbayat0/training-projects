import useStore from "./store/store";
import List from "./components/List";

const App = () => {
  const { data, changeDone } = useStore();
  return (
    <div className="bg-sky-500 flex justify-center items-center p-10 min-h-screen">
      <List data={data} changeDone={changeDone} />
    </div>
  );
};

export default App;
