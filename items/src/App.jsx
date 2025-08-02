import List from "./components/List";
import Form from "./components/Form";

const App = () => {
  return (
    <>
      <header className="flex justify-center items-center mt-5">
        <Form />
      </header>
      <main>
        <List />
      </main>
    </>
  );
};

export default App;
