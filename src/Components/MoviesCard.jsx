import { useState } from "react";
import { IonIcon } from "@ionic/react";
import {
  addCircleOutline,
  arrowBackOutline,
  playCircleOutline,
} from "ionicons/icons";

const MoviesCard = ({ movie }) => {
  const [showMoviesSidebar, setShowMoviesSidebar] = useState(false);

  return (
    <>
      <div className="relative flex flex-col p-5 rounded-2xl bg-[#1c2137]/70 border border-[#1d2943] backdrop-blur-[10px]">
        <div className="flex flex-col gap-2">
          {/* image */}
          <div className="mb-3">
            <img
              src={movie.image}
              alt={movie.title}
              className="w-full h-32 object-cover rounded-lg"
            />
          </div>
          <h3 className="text-base text-[#cbd5e1]">{movie.title}</h3>
          <p className="text-sm font-light text-[#94a3b8]">
            Rating: {movie.rating}
          </p>
        </div>
        <button
          onClick={() => setShowMoviesSidebar(true)}
          className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center justify-center p-1.5 rounded-full bg-[rgba(220,220,220,0.7)] backdrop-blur-[70px] border border-white/35 hover:bg-[rgba(220,220,220,1)] transition-all duration-500 hover:rotate-360 cursor-pointer"
        >
          <IonIcon icon={addCircleOutline} className="text-xl text-[#2e2e2f]" />
        </button>
      </div>

      {showMoviesSidebar && (
        <div className="fixed inset-0 bg-black/50 z-20 animate-openSidebar">
          <div className="absolute top-0 right-0 h-full w-2/5 bg-[rgba(133,133,133,0.2)] backdrop-blur-[10px] border border-white/20 text-white">
            <div className="p-5">
              <button
                onClick={() => setShowMoviesSidebar(false)}
                className="flex items-center gap-1.5 text-white font-semibold uppercase"
              >
                <IonIcon icon={arrowBackOutline} className="text-2xl" />
                Back
              </button>
              <div className="mt-8 space-y-4 px-4">
                <div className="grid grid-cols-[35%_55%_10%] items-center gap-4">
                  <img
                    src={movie.image}
                    alt={movie.title}
                    className="w-24 aspect-[3/2] rounded-xl object-cover"
                  />
                  <div className="flex flex-col">
                    <h4 className="text-white">{movie.title}</h4>
                    <p className="text-sm font-light text-[#94a3b8]">
                      Rating: {movie.rating}
                    </p>
                  </div>
                  <button className="text-2xl text-[#efefef] hover:text-[#5834c4] transition-all duration-500">
                    <IonIcon icon={playCircleOutline} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MoviesCard;
