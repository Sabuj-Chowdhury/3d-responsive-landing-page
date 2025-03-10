import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import { movieData } from "../data/movieData";

const Card = () => {
  return (
    <section className="relative flex justify-center items-center min-h-screen p-4">
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 bg-gradient-to-b from-white/30 to-transparent backdrop-blur-[30px] rounded-[20px] w-[min(900px,100%)] p-4 md:p-8 shadow-[0_0.5px_0_1px_rgba(255,255,255,0.23)_inset,0_1px_0_0_rgba(255,255,255,0.66)_inset,0_4px_16px_rgba(0,0,0,0.12)] z-10">
        <div className="flex flex-col justify-center items-center max-w-full md:max-w-[450px] px-4 md:px-9 text-justify">
          <p className="text-white font-medium text-sm md:text-base mb-5 leading-relaxed">
            Join us for a fantastic
            <span className="bg-gradient-to-r from-[#ff3cac] via-[#784ba0] to-[#2b86c5] bg-clip-text text-transparent">
              {" "}
              movie night{" "}
            </span>
            filled with popcorn, laughter, and great company! Whether you're a
            fan of thrilling action, heartwarming dramas, or side-splitting
            comedies, we've got a film lineup to cater to all tastes. Save the
            date and bring your favorite snacks to make it a memorable evening.
          </p>
          <button className="w-full md:w-auto px-6 md:px-10 py-2 md:py-2.5 text-base md:text-lg font-bold rounded bg-white/90 text-[#784ba0] shadow-lg border border-white/30 hover:scale-105 transition-transform duration-300">
            Join
          </button>
        </div>

        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="w-[200px] sm:w-[250px] h-[360px] sm:h-[450px] py-[30px] sm:py-[50px]"
          initialSlide={2}
          loop={true}
        >
          {movieData.map((movie) => (
            <SwiperSlide
              key={movie.id}
              className="relative shadow-lg rounded-lg select-none"
            >
              <img
                src={movie.image}
                alt={movie.title}
                className={`absolute inset-0 w-full h-full object-cover ${
                  movie.imgPosition ? "object-[50%_0%]" : ""
                }`}
              />
              <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-[#0f2027] to-transparent">
                <span className="absolute top-0 right-0 text-white px-3 sm:px-[18px] py-1 sm:py-[7px] m-2 sm:m-2.5 rounded-[20px] tracking-wider text-xs sm:text-sm font-bold bg-white/[0.095] shadow-[inset_2px_-2px_20px_rgba(214,214,214,0.2),inset_-3px_3px_3px_rgba(255,255,255,0.4)] backdrop-blur-[74px]">
                  {movie.rating}
                </span>
                <h2 className="absolute bottom-0 left-0 text-white font-normal text-base sm:text-lg leading-relaxed m-[0_0_15px_15px] sm:m-[0_0_20px_20px]">
                  {movie.title}
                </h2>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Card;
