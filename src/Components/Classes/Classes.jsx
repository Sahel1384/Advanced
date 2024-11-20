function Classes() {
  return (
    <div className="mt-20 bg-main3 py-24  gap-14">
      <div className="flex flex-col items-center justify-center gap-3">
        <div>
          <span className="text-main2 bg-[#dff6ec] px-2 py-1">Our Classes</span>
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
      <div className="flex justify-center mt-14">
        <button className="bg-main1 text-white py-[17px] px-8 font-medium text-sm hover:bg-main2 duration-300">
          Read More
        </button>
      </div>
    </div>
  );
}

export default Classes;
