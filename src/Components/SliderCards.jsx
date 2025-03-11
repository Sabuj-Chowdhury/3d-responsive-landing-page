import { useState } from "react";
import { IonIcon } from "@ionic/react";
import {
  addCircleOutline,
  arrowBackOutline,
  playCircleOutline,
} from "ionicons/icons";

const SliderCards = () => {
  const [showSongsSidebar, setShowSongsSidebar] = useState(false);
  const [showOverviewSidebar, setShowOverviewSidebar] = useState(false);

  return (
    <div className="flex justify-center items-center overflow-hidden md:py-10">
      {/* Cards Container */}
      <div className="grid grid-cols-2  md:grid-cols-1 gap-5 w-[450px] md:w-[250px] space-y-10">
        {/* Songs Card */}
        <div className="relative flex flex-col p-5 rounded-2xl bg-[#1c2137]/70 border border-[#1d2943] backdrop-blur-[10px]">
          <h1 className="text-center uppercase text-lg mb-6 text-[#cbd5e1] relative after:content-[''] after:absolute after:top-[95%] after:w-full after:left-0 after:h-[3px] after:rounded-md after:bg-gradient-to-r after:from-[#2b60bc] after:via-[#822f99] after:to-[#2b60bc] after:bg-[length:200%_100%] after:animate-lineAnimation">
            Movies
          </h1>
          <div className="flex flex-col gap-2">
            <h3 className="text-base text-[#cbd5e1]">Movie Name</h3>
            <p className="text-sm font-light text-[#94a3b8]">Cast</p>
          </div>
          <button
            onClick={() => setShowSongsSidebar(true)}
            className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center justify-center p-1.5 rounded-full bg-[rgba(220,220,220,0.7)] backdrop-blur-[70px] border border-white/35 hover:bg-[rgba(220,220,220,1)] transition-all duration-500 hover:rotate-360"
          >
            <IonIcon
              icon={addCircleOutline}
              className="text-xl text-[#2e2e2f]"
            />
          </button>
        </div>

        {/* Overview Card */}
        <div className="relative flex flex-col p-5 rounded-2xl bg-[#1c2137]/70 border border-[#1d2943] backdrop-blur-[10px]">
          <h1 className="text-center uppercase text-lg mb-6 text-[#cbd5e1] relative after:content-[''] after:absolute after:top-[95%] after:w-full after:left-0 after:h-[3px] after:rounded-md after:bg-gradient-to-r after:from-[#2b60bc] after:via-[#822f99] after:to-[#2b60bc] after:bg-[length:200%_100%] after:animate-lineAnimation">
            Overview
          </h1>
          <p className="text-sm font-light text-[#94a3b8] text-left">
            Brief description about the movie...
          </p>
          <button
            onClick={() => setShowOverviewSidebar(true)}
            className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center justify-center p-1.5 rounded-full bg-[rgba(220,220,220,0.7)] backdrop-blur-[70px] border border-white/35 hover:bg-[rgba(220,220,220,1)] transition-all duration-500 hover:rotate-360"
          >
            <IonIcon
              icon={addCircleOutline}
              className="text-xl text-[#2e2e2f]"
            />
          </button>
        </div>
      </div>

      {/* Songs Sidebar */}
      {showSongsSidebar && (
        <div className="fixed inset-0 bg-black/50 z-20 animate-openSidebar">
          <div className="absolute top-0 right-0 h-full w-2/5 bg-[rgba(133,133,133,0.2)] backdrop-blur-[10px] border border-white/20 text-white">
            <div className="p-5">
              <button
                onClick={() => setShowSongsSidebar(false)}
                className="flex items-center gap-1.5 text-white font-semibold uppercase"
              >
                <IonIcon icon={arrowBackOutline} className="text-2xl" />
                Back
              </button>
              <div className="mt-8 space-y-4 px-4">
                <div className="grid grid-cols-[35%_55%_10%] items-center gap-4">
                  <img
                    src="path-to-song-image"
                    alt="picture of the movie"
                    className="w-24 aspect-[3/2] rounded-xl object-cover"
                  />
                  <div className="flex flex-col">
                    <h4 className="text-white">Movie Name</h4>
                    <p className="text-sm font-light text-[#94a3b8]">Artist</p>
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

      {/* Overview Sidebar */}
      {showOverviewSidebar && (
        <div className="fixed inset-0 bg-black/50 z-20 animate-openSidebar">
          <div className="absolute top-0 right-0 h-full w-2/5 bg-[rgba(133,133,133,0.2)] backdrop-blur-[10px] border border-white/20 text-white">
            <div className="p-5">
              <button
                onClick={() => setShowOverviewSidebar(false)}
                className="flex items-center gap-1.5 text-white font-semibold uppercase"
              >
                <IonIcon icon={arrowBackOutline} className="text-2xl" />
                Back
              </button>
              <div className="mt-8 px-8 flex flex-col items-center">
                <img
                  src="path-to-artist-image"
                  alt="artist"
                  className="w-64 aspect-[4/3] object-cover rounded-lg mb-5"
                />
                <p className="text-[#94a3b8] text-center">
                  Detailed description about the movie...
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SliderCards;
