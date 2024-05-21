import React from 'react';

const WaveComponent = () => {
  return (
    <div>
      <div className="relative text-center bg-gradient-to-r from-purple-800 to-cyan-600 text-white">
        <div className="flex justify-center items-center h-[65vh]">
          <h1 className="font-lato font-light tracking-wider text-4xl md:text-6xl">Code With Shakir</h1>
        </div>
        <div className="relative w-full h-[15vh] mb-[-7px] min-h-[100px] max-h-[150px]">
          <svg
            className="absolute bottom-0 w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
            shapeRendering="auto"
          >
            <defs>
              <path
                id="gentle-wave"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              />
            </defs>
            <g className="parallax">
              <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7)" />
            </g>
          </svg>
        </div>
      </div>

      <div className="flex justify-center items-center h-[20vh] bg-white">
        <p className="font-lato tracking-wide text-sm text-gray-800">Be sure to subscribe Code With Arjun.</p>
      </div>
    </div>
  );
};

export default WaveComponent;
