import useReset from "../hooks/useReset";
import Tour from "./Tour";

const TourList = ({ tours, current }) => {
  const currentTour = tours[current];
  const { reset } = useReset();
  return (
    <article className="max-w-11/12 min-h-1/3 max-h-[500px] rounded-2xl justify-center items-center">
      {tours.length === 0 ? (
        <div className="flex flex-col justify-center items-center">
          <p>There Is No Tour !</p>
          <p
            className="text-green-700 animate-bounce mt-4 cursor-pointer select-none"
            onClick={reset}
          >
            Reset
          </p>
        </div>
      ) : (
        <Tour key={currentTour.id} {...currentTour} />
      )}
    </article>
  );
};

export default TourList;
