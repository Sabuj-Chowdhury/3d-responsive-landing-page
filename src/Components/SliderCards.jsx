import MoviesCard from "./MoviesCard";
import { movieData } from "../data/movieData";

const SliderCards = () => {
  return (
    <div className="max-h-[600px] flex justify-center items-start overflow-y-auto p-6 scrollbar-hide">
      {/* Cards Container */}
      <div className="grid grid-cols-2 md:grid-cols-1 gap-8 w-[450px] md:w-[250px]">
        {movieData.slice(0, 5).map((movie) => (
          <MoviesCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default SliderCards;
