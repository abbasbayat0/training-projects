import { useState } from "react";
import Header from "./components/Header";
import TourList from "./components/TourList";
import useGetData from "./hooks/useGetData";
import useSlide from "./hooks/useSlide";

const App = () => {
  const { tours, isLoading } = useGetData();
  const [current, setCurrent] = useState(0);
  const { next, prev } = useSlide(current, tours?.length);

  return (
    <div className="flex flex-col justify-center items-center p-2 w-full h-screen bg-pink-200">
      <header>
        <Header />
      </header>
      <main className="mt-2 w-full flex flex-col items-center relative">
        {isLoading ? (
          <p className="text-2xl">Loading ...</p>
        ) : (
          <>
            <TourList tours={tours} current={current} />
            {tours.length !== 0 && (
              <>
                <p
                  className="absolute bottom-1/2 right-10 cursor-pointer select-none"
                  onClick={() => setCurrent(next)}
                >
                  next
                </p>
                <p
                  className="absolute bottom-1/2 left-10 cursor-pointer select-none"
                  onClick={() => setCurrent(prev)}
                >
                  prev
                </p>
              </>
            )}
          </>
        )}
      </main>
    </div>
  );
};

export default App;
