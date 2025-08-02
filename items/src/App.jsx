import { useEffect } from "react";
import List from "./components/List";
import useGlobalContext from "./hooks/useGlobalContext";
import Form from "./components/Form";

const App = () => {
  const { list, setList } = useGlobalContext();
  useEffect(() => {
    setList(localStorage.getItem("list"));
  }, []);
  return (
    <>
      <header className="flex justify-center items-center mt-5">
        <Form />
      </header>
      <main>
        <List list={list} />
      </main>
    </>
  );
};

export default App;
