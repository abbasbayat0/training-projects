import Header from "./components/Header";
import TourList from "./components/TourList";
import useGetData from "./hooks/useGetData";

const App = () => {
  const { tours, isLoading } = useGetData();
  return (
    <div className="flex flex-col justify-center items-center p-5 w-full bg-pink-200">
      <header>
        <Header />
      </header>
      <main className="mt-10 min-h-screen w-full h-full flex flex-col items-center">
        {isLoading ? (
          <p className="text-2xl">Loading ...</p>
        ) : (
          <TourList tours={tours} />
        )}
      </main>
    </div>
  );
};

export default App;
