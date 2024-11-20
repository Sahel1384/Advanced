import blog1 from "../../assets/images/blog1.jpg";
import blog2 from "../../assets/images/blog4.jpg";
import blog3 from "../../assets/images/blog3.jpg";
function Recent() {
  return (
    <>
      <div className="mt-28 px-5 lg:px-12 flex flex-col items-center justify-center gap-5 sm:gap-0 sm:flex-row sm:justify-between sm:items-end">
        <div className="flex items-center gap-3 flex-col sm:items-start justify-center">
          <span className="text-main2 bg-[#f4fafa] px-2 py-1">Our Team</span>
          <h1 className="text-main1 text-3xl w-[100%] text-center sm:text-4xl font-[500] mt-2">
            Recent Posts
          </h1>
        </div>
        <div>
          <button className="bg-main1 text-white py-[17px] px-8 font-medium text-sm hover:bg-main2 duration-300">
            Read More
          </button>
        </div>
      </div>
      <div className="px-5 lg:px-12 mt-16 flex flex-col lg:flex-row justify-between gap-8">
        <div className="w-[100%] shadow-md lg:w-[50%] flex flex-col sm:flex-row md:flex-col gap-5 border-main2">
          <div className="relative">
            <div className="overflow-hidden ">
              <img
                src={blog1}
                className="w-[886px] h-[270px] md:w-[100%] lg:w-[100%] md:h-[375px] hover:scale-110 duration-300 cursor-pointer"
                alt=""
              />
            </div>
            <span className="absolute top-6 left-5 bg-main2 text-white hover:bg-main1 duration-300 cursor-pointer py-1 px-8 font-semibold">
              STARTIGIES
            </span>
          </div>
          <div className="flex flex-col px-8 gap-5">
            <h1 className="text-main1 hover:text-main2 duration-300 cursor-pointer text-2xl font-[500] w-[100%] sm:w-[90%]">
              Unlocking the Power of Inquiry-Based Learning
            </h1>
            <p className="text-main1 w-[100%] sm:w-[95%]">
              By flipping the traditional model of education on its head,
              inquiry-based learning puts students in the driver&apos;s seat of
              their own learning journey.
            </p>
            <a
              href="#"
              className="text-main2 hover:text-main1 duration-300 font-medium"
            >
              Read More
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-7">
          <div className="flex flex-col shadow-md sm:flex-row gap-5">
            <div className="relative ">
              <div className="overflow-hidden">
                <img
                  src={blog2}
                  className="w-[100%] sm:w-[460px] md:w-[400px] lg:w-[300px] h-[270px] md:h-[300px] hover:scale-110 duration-300 cursor-pointer"
                  alt=""
                />
              </div>
              <span className="absolute top-6 left-5 bg-main2 text-white hover:bg-main1 duration-300 cursor-pointer py-1 px-8 font-semibold">
                TECHNOLOGY
              </span>
            </div>
            <div className="w-[100%] sm:w-[600px] lg:w-[300px] flex flex-col gap-5">
              <h1 className="text-main1 hover:text-main2 duration-300 cursor-pointer text-2xl font-[500] w-[100%] sm:w-[90%]">
                Harnessing Technology for Effective Learning
              </h1>
              <p className="text-main1 w-[100%] sm:w-[95%]">
                One of the most significant benefits of integrating technology
                into education is its ability to foster active learning.
              </p>
              <a
                href="#"
                className="text-main2 hover:text-main1 duration-300 font-medium"
              >
                Read More
              </a>
            </div>
          </div>

          <div className="flex flex-col shadow-md sm:flex-row gap-5">
            <div className="relative">
              <div className="overflow-hidden">
                <img
                  src={blog3}
                  className="w-[100%] sm:w-[460px] md:w-[400px] lg:w-[300px] h-[270px] md:h-[300px] hover:scale-110 duration-300 cursor-pointer"
                  alt=""
                />
              </div>
              <span className="absolute top-6 left-5 bg-main2 text-white hover:bg-main1 duration-300 cursor-pointer py-1 px-8 font-semibold">
                STARTIGIES
              </span>
            </div>
            <div className="w-[100%] sm:w-[600px] lg:w-[300px] flex flex-col gap-5">
              <h1 className="text-main1 hover:text-main2 duration-300 cursor-pointer text-2xl font-[500] w-[100%] sm:w-[90%]">
                Integrating Arts into Education for Holistic Development
              </h1>
              <p className="text-main1 w-[100%] sm:w-[95%]">
                Beyond the confines of traditional academic subjects, the arts
                encompass a spectrum of creative disciplines including visual
                arts.
              </p>
              <a
                href="#"
                className="text-main2 hover:text-main1 duration-300 font-medium"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Recent;
