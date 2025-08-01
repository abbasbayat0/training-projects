import useReset from "../hooks/useReset";
import Tour from "./Tour";

const TourList = ({ tours }) => {
  const { reset } = useReset();
  return (
    <article className="w-11/12 min-h-1/3 rounded-2xl flex gap-10 flex-wrap justify-center items-center">
      {tours.length === 0 ? (
        <div className="flex flex-col justify-center items-center">
          <p>There Is No Tour !</p>
          <p className="text-green-700 animate-bounce mt-4 cursor-pointer select-none" onClick={reset}>
            Reset
          </p>
        </div>
      ) : (
        tours.map((tour) => {
          return <Tour key={tour.id} {...tour} />;
        })
      )}
    </article>
  );
};

export default TourList;
