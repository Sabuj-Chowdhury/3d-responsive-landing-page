

import MoviesCard from "./MoviesCard";

const SliderCards = () => {
  return (
    <div className="flex justify-center items-center overflow-hidden md:py-10">
      {/* Cards Container */}
      <div className="grid grid-cols-2 md:grid-cols-1 gap-5 w-[450px] md:w-[250px] space-y-10">
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
      </div>
    </div>
  );
};

export default SliderCards;
