import Form from "./components/Form";
import Gallery from "./components/Gallery";
import Theme from "./components/Theme";
import useGlobalContext from "./hooks/useGlobalContext";


const App = () => {
  const { theme } = useGlobalContext();
  return (
    <div
      className={`${
        theme ? "bg-gray-900" : "bg-gray-200"
      } transition-all duration-500 w-full h-screen flex justify-center`}
    >
      <header>
        <Theme />
      </header>
      <main>
        <Form />
        <Gallery />
      </main>
    </div>
  );
};

export default App;
