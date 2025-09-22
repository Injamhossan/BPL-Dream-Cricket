import React from "react";

const Banner = () => {
  return (
    <div className="mx-auto max-w-[1600px]">
     <div className="mx-4 lg:mx-0 bg-black relative rounded-[40px] overflow-hidden py-10 lg:py-0 md:py-0">
      <img
        src="/src/assets/bg-shadow.png"
        alt="Background"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 py-10 md:py-20">
        <img
          src="/src/assets/banner-main.png"
          alt="Banner"
          className="mb-4 w-32 sm:w-40 md:w-52 lg:w-64"
        />
        <h1 className="text-white text-[20px] sm:text-[24px] md:text-[48px] font-bold leading-tight">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h1>

        <p className="text-gray-300 text-sm sm:text-base md:text-lg mt-1 lg:mt-3 md:mt-3">
          Beyond Boundaries Beyond Limits
        </p>

        <button className="mt-6 btns text-black bg-[#E7FE29] px-6 py-2 rounded-lg font-semibold md:px-8 md:py-3">
          Claim Free Credit
        </button>
      </div>
      </div>
    </div>
  );
};

export default Banner;