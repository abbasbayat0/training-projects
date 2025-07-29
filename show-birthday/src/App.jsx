import List from "./components/List";
import data from "./asset/data";
import { useState } from "react";

const App = () => {
  // clear option
  const [list, setList] = useState(data);
  return (
    <div className="w-full h-screen bg-green-300 flex justify-center items-center">
      <List list={list} setList={setList} />
    </div>
  );
};

export default App;
