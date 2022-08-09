import React from "react";
import { HiArrowNarrowRight} from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      <div className=" max-w-[1000px] mx-auto px-8   flex flex-col  justify-center  h-full">
        <p className=" text-orange-400 text-3x1   ">Hi,My Name is </p>
        <h1 className="text-4xl sm:text-6xl font-bold text-[#ccd6f6]">
          Amanuel Nigussie
        </h1>
        <h2 className="text-4xl sm:text-3xl font-bold text-[#8892b0]">
          I am a Full Stack Web Developer
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[500px]">
          I am a Full Stack Web Developer with a passion for creating beautiful
          and intuitive user experiences.
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-orange-400 hover:border-orange-400">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3 " />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
