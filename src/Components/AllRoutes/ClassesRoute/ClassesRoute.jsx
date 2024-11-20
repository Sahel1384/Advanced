import { ClassRouterData } from "./ClassRouteData";
function ClassesRoute() {
  return (
    <div className="mt-14 lg:mt-20">
      <div className=" gap-10 top-0 w-full h-[400px] lg:h-[390px] bg-main1 text-main1 flex justify-start pt-28 items-center flex-col">
        <h1 className="text-4xl sm:text-6xl font-medium text-white">
          Lovely Classes
        </h1>
        <div className="w-[90%] sm:w-[500px] text-center">
          <p className="text-sm sm:text-md font-medium text-white">
            Welcome to our Education classes page! Our school offers a wide
            variety of classes taught by highly experienced and passionate
            teachers.
          </p>
        </div>
      </div>

      <div className="bg-main3 pt-24  gap-14">
        <div className="flex flex-col items-center justify-center gap-3">
          <div>
            <span className="text-main2 bg-[#dff6ec] px-2 py-1">
              Our Classes
            </span>
          </div>
          <div>
            <h1 className="text-main1 text-3xl w-[100%] text-center sm:text-5xl font-[500] mt-2">
              Choose Your Class
            </h1>
          </div>
        </div>
        <div className="flex justify-center mt-20">
          <div className="bg-white flex flex-col justify-center items-center w-[98%] lg:w-[90%] p-1">
            <div className="flex flex-col justify-center items-center gap-5 sm:gap-0 sm:flex-row sm:justify-between sm:items-center bg-main3 w-[100%] px-5 lg:px-20 py-6">
              <div className="flex flex-col items-center sm:items-start gap-3 w-[100%] sm:w-[60%] md:w-[75%]">
                <h1 className="cursor-pointer text-main1 hover:text-main2 duration-300 text-xl font-semibold">
                  Creative Writing
                </h1>
                <p className="w-[80%] text-main1 text-center sm:text-start">
                  Our classes are designed to accommodate writers of all levels,
                  from beginners to seasoned professionals.
                </p>
              </div>
              <div className="">
                <p className="text-main1">Mon-Fri: 12:00 - 14:30</p>
                <p className="text-main1">Sunday: 17:00 - 19:30</p>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-5 sm:gap-0 sm:flex-row sm:justify-between sm:items-center  w-[100%] px-5 lg:px-20 py-6">
              <div className="flex flex-col items-center sm:items-start gap-3 w-[100%] sm:w-[60%] md:w-[75%]">
                <h1 className="cursor-pointer text-main1 hover:text-main2 duration-300 text-xl font-semibold">
                  3D Graphics
                </h1>
                <p className="w-[80%] text-main1 text-center sm:text-start">
                  Dive into the captivating world of 3D graphics and unlock your
                  creative potential with our courses.
                </p>
              </div>
              <div className="">
                <p className="text-main1">Mon-Fri: 10:00 - 12:30</p>
                <p className="text-main1">Sunday: 16:00 - 18:30</p>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-5 sm:gap-0 sm:flex-row sm:justify-between sm:items-center bg-main3 w-[100%] px-5 lg:px-20 py-6">
              <div className="flex flex-col items-center sm:items-start gap-3 w-[100%] sm:w-[60%] md:w-[75%]">
                <h1 className="cursor-pointer text-main1 hover:text-main2 duration-300 text-xl font-semibold">
                  Art and Design
                </h1>
                <p className="w-[80%] text-main1 text-center sm:text-start">
                  Unleash your artistic talents and explore the boundless
                  possibilities of visual expression with our Art courses.
                </p>
              </div>
              <div className="">
                <p className="text-main1">Mon-Thu: 10:00 - 12:30</p>
                <p className="text-main1">Friday: 17:00 - 19:30</p>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-5 sm:gap-0 sm:flex-row sm:justify-between sm:items-center  w-[100%] px-5 lg:px-20 py-6">
              <div className="flex flex-col items-center sm:items-start gap-3 w-[100%] sm:w-[60%] md:w-[75%]">
                <h1 className="cursor-pointer text-main1 hover:text-main2 duration-300 text-xl font-semibold">
                  Programming
                </h1>
                <p className="w-[80%] text-main1 text-center sm:text-start">
                  Dive into the dynamic world of programming and unleash your
                  potential to create innovative solutions.
                </p>
              </div>
              <div className="">
                <p className="text-main1">Mon-Fri: 12:00 - 14:30</p>
                <p className="text-main1">Sunday: 17:00 - 19:30</p>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-5 sm:gap-0 sm:flex-row sm:justify-between sm:items-center bg-main3 w-[100%] px-5 lg:px-20 py-6">
              <div className="flex flex-col items-center sm:items-start gap-3 w-[100%] sm:w-[60%] md:w-[75%]">
                <h1 className="cursor-pointer text-main1 hover:text-main2 duration-300 text-xl font-semibold">
                  Computer Science
                </h1>
                <p className="w-[80%] text-main1 text-center sm:text-start">
                  Embark on a captivating journey into the world of computer
                  science and discover the limitless possibilities...
                </p>
              </div>
              <div className="">
                <p className="text-main1">Mon-Fri: 10:00 - 10:30</p>
                <p className="text-main1">Sunday: 17:00 - 19:30</p>
              </div>
            </div>
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
      </div>

      <div className="mt-32 py-1  gap-14">
        <div className="flex flex-col items-center justify-center gap-3">
          <div>
            <h1 className="text-main1 text-3xl w-[100%] text-center sm:text-4xl font-[500] mt-2">
              Our Popular Programs
            </h1>
          </div>
          <div className="w-[100%] md:w-[70%] lg:w-[50%]">
            <p className="text-main1 text-center">
              We offer a diverse range of interactive and engaging classes
              designed to inspire curiosity and ignite a passion for learning.
            </p>
          </div>
        </div>

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
    </div>
  );
}

export default ClassesRoute;
