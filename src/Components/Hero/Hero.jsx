import hero1 from "../../assets/images/671218a312747ac39442099c_banner img 3 (1).webp";
import hero2 from "../../assets/images/671218a312747ac39442099a_banner Img 1 (1).webp";
function Hero() {
  return (
    <div className="mt-40">
      <div className="flex flex-col justify-center items-center gap-6 lg:gap-0 lg:flex-row lg:justify-between px-5 lg:px-12">
        <div className="flex flex-col w-[100%] lg:w-[50%] justify-center items-center lg:justify-start lg:items-start gap-3">
          <div>
            <p className="text-main2 bg-[#f4fafa] w-52 py-1 px-2">
              Research Your Occupation
            </p>
          </div>
          <div className="w-[100%] sm:w-[80%] md:w-[60%] lg:w-[700px]">
            <h1 className="text-main1 text-3xl sm:text-5xl lg:text-[58px] font-[400] text-center lg:text-start leading-[45px] sm:leading-[55px] w-[100%] lg:leading-[65px]">
              Explore Boundless Opportunities
            </h1>
          </div>
          <div>
            <p className="text-main1 w-[100%] sm:w-[580px] lg:w-[450px] mt-5 text-center lg:text-start">
              Discover a world of learning at your fingertips with our online
              school. Our flexible and accessible platform offers high-quality
              education tailored to your needs.
            </p>
          </div>
          <div className="flex gap-6 mt-10">
            <button className="bg-main2 text-white py-4 font-medium text-sm px-9 hover:bg-main1 duration-300">
              Choose Class
            </button>
            <button className="bg-main1 text-white py-4 font-medium text-sm px-8 hover:bg-main2 duration-300">
              Get started
            </button>
          </div>
        </div>
        <div className="w-[100%] flex justify-end md:justify-center lg:w-[40%]">
          <div className="relative">
            <img
              src={hero1}
              className="border-[8px] border-[#f4fafa] object-cover w-[100%] sm:w-[500px] h-[450px]"
              alt=""
            />

            <img
              src={hero2}
              className="border-[8px] w-60 h-[330px] object-cover border-[#f4fafa] absolute top-44 -left-5 sm:-left-24"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
