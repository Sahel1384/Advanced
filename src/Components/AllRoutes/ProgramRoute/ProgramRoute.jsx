import about from "../../../assets/images/about.webp";
import { ClassRouterData } from "../ClassesRoute/ClassRouteData";
import { ProgramsData } from "../../Programs/ProgramsData";
import star from "../../../assets/images/icon-star.svg";
import { testimonailData } from "../../Testimonials/TestimonialData";
function ProgramRoute() {
  return (
    <div className="mt-14 lg:mt-20">
      <div className="relative">
        <img
          src={about}
          className="w-full object-cover h-[400px] lg:h-[425px]"
          alt=""
        />
        <div className="absolute gap-10 top-0 w-full h-[400px] lg:h-[425px] left-0 right-0 bg-gradient-to-r from-main1/70 text-white flex justify-start pt-28 items-center flex-col">
          <h1 className="text-4xl sm:text-6xl font-medium">Our Programs</h1>
          <div className="w-[90%] sm:w-[500px] text-center">
            <p className="text-sm sm:text-md font-medium">
              These lessons, classes, and ensembles can be tailored to students
              of all ages and skill levels, from beginners to advanced.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-24 py-1 gap-14">
        <div className="px-5 mt-14 lg:px-12 flex justify-center gap-7 flex-wrap lg:flex-nowrap">
          {ClassRouterData.map((data) => (
            <div
              key={data.id}
              className="w-[100%] md:w-[47%] lg:w-[370px] bg-main3 flex flex-col gap-8 pb-10"
            >
              <div className="overflow-hidden">
                <img
                  src={data.image}
                  className="h-56 object-cover hover:scale-110 w-full duration-300 cursor-pointer"
                  alt=""
                />
              </div>
              <div className="flex flex-col items-center justify-center gap-5">
                <div>
                  <h1 className="text-main1 text-3xl font-[400] hover:text-main2 duration-300 cursor-pointer">
                    {data.title}
                  </h1>
                </div>
                <div className="w-[100%] md:w-[82%]">
                  <p className="text-center text-main1">{data.desc}</p>
                </div>
                <div>
                  <a
                    href="#"
                    className="text-main2 font-medium hover:text-main1 duration-300"
                  >
                    More Info
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-1 gap-14">
        <div className="px-5 mt-14 lg:px-12 flex justify-center gap-7 flex-wrap lg:flex-nowrap">
          {ProgramsData.map((data) => (
            <div
              key={data.id}
              className="w-[100%] md:w-[47%] lg:w-[370px] bg-main3 flex flex-col gap-8 pb-10"
            >
              <div className="overflow-hidden">
                <img
                  src={data.image}
                  className="h-56 object-cover hover:scale-110 w-full duration-300 cursor-pointer"
                  alt=""
                />
              </div>
              <div className="flex flex-col items-center justify-center gap-5">
                <div>
                  <h1 className="text-main1 text-3xl font-[400] hover:text-main2 duration-300 cursor-pointer">
                    {data.title}
                  </h1>
                </div>
                <div className="w-[100%] md:w-[82%]">
                  <p className="text-center text-main1">{data.desc}</p>
                </div>
                <div>
                  <a
                    href="#"
                    className="text-main2 font-medium hover:text-main1 duration-300"
                  >
                    More Info
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-28 w-full py-20 flex-wrap lg:flex-nowrap bg-bg flex justify-center lg:justify-between gap-20 bg-cover bg-no-repeat px-5 lg:px-24 items-center">
        <div className="flex justify-center flex-col items-center gap-3">
          <h1 className="text-main1 text-5xl font-[400]">20+</h1>
          <span className="text-main1">Professional Teachers</span>
        </div>
        <div className="flex justify-center flex-col items-center gap-3">
          <h1 className="text-main1 text-5xl font-[400]">54</h1>
          <span className="text-main1">Learning Groups</span>
        </div>
        <div className="flex justify-center flex-col items-center gap-3">
          <h1 className="text-main1 text-5xl font-[400]">900+</h1>
          <span className="text-main1">Happy Students</span>
        </div>
        <div className="flex justify-center flex-col items-center gap-3">
          <h1 className="text-main1 text-5xl font-[400]">8</h1>
          <span className="text-main1">Special Classes</span>
        </div>
      </div>

      <div className="mt-32 gap-14">
        <div className="flex flex-col items-center justify-center gap-3">
          <div>
            <span className="text-main2 bg-[#f4fafa] px-2 py-1">
              Testimonials
            </span>
          </div>
          <div>
            <h1 className="text-main1 text-3xl w-[100%] text-center sm:text-4xl font-[500] mt-2">
              What Our Clients Say
            </h1>
          </div>
        </div>

        <div className="flex gap-5 px-10 items-center justify-center flex-wrap md:flex-nowrap mt-16">
          {testimonailData.map((data) => (
            <div
              key={data.id}
              className="bg-main3 w-full sm:w-[45%] lg:max-w-sm px-8 py-7 flex flex-col gap-5"
            >
              <div className="flex gap-1">
                <img src={star} className="w-4" alt="" />
                <img src={star} className="w-4" alt="" />
                <img src={star} className="w-4" alt="" />
                <img src={star} className="w-4" alt="" />
                <img src={star} className="w-4" alt="" />
              </div>
              <div className="text-main1">{data.title}</div>
              <div>
                <p className="text-sm w-[93%] font-semibolds text-main1">
                  {data.desc}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="cursor-pointer text-main1">
                  <h1 className="text-sm font-semibold">{data.name}</h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProgramRoute;
