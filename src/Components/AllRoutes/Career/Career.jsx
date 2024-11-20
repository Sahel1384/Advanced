import about from "../../../assets/images/career.jpg";
import { useRef, useState } from "react";
import video from "../../../assets/video/671218a312747ac394420992_Video-transcode.mp4";
import { FaPause, FaPlay } from "react-icons/fa";
function Career() {
  const videos = useRef(null);
  const [play, setPlay] = useState(false);
  const playandPause = () => {
    const isVideoPlay = videos.current;
    if (isVideoPlay) {
      if (play) {
        isVideoPlay.play();
      } else {
        isVideoPlay.pause();
      }
      setPlay(!play);
    }
  };
  return (
    <div className="mt-14 lg:mt-20">
      <div className="relative">
        <img
          src={about}
          className="w-full object-cover h-[400px] lg:h-[425px]"
          alt=""
        />
        <div className="absolute gap-10 top-0 w-full h-[400px] lg:h-[425px] left-0 right-0 bg-gradient-to-r from-main1/70 text-white flex justify-start pt-28 items-center flex-col">
          <h1 className="text-4xl sm:text-6xl font-medium">Join us</h1>
          <div className="w-[90%] sm:w-[500px] text-center">
            <p className="text-sm sm:text-md font-medium">
              Welcome to the career page of our Eduction! We are excited to
              provide you with information about the career opportunities
              available to those who are passionate about education.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-20 bg-main3 pt-24 gap-14">
        <div className="flex flex-col items-center justify-center gap-3">
          <div>
            <span className="text-main2 bg-[#dff6ec] px-2 py-1">
              Careers List
            </span>
          </div>
          <div>
            <h1 className="text-main1 text-3xl w-[100%] text-center sm:text-4xl font-[500] mt-2">
              We offer a variety of positions
            </h1>
          </div>
          <div className="w-[58%]">
            <p className="text-main1 text-center">
              As a member of our team, you will have the opportunity to work
              with talented and motivated students who are eager to learn and
              grow.
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-20">
          <div className="bg-white flex flex-col justify-center items-center w-[98%] xl:w-[90%] p-1">
            <div className="flex flex-col justify-center items-center gap-5 md:gap-0 md:flex-row sm:justify-between md:items-center bg-main3 w-[100%] px-5 lg:px-8 py-6">
              <div className="flex flex-col items-center md:items-start gap-3 w-[100%] sm:w-[90%] md:w-[45%]">
                <h1 className="cursor-pointer text-main1 hover:text-main2 duration-300 text-xl font-semibold">
                  Administrator
                </h1>

                <p className="w-[100%] text-main1 text-center md:text-start">
                  Encompassing various responsibilities to ensure the smooth and
                  effective operation of the virtual learning environment.
                </p>
              </div>
              <div className="flex gap-2">
                <svg
                  className="w-6 h-6 text-main2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.906 1.994a8.002 8.002 0 0 1 8.09 8.421 7.996 7.996 0 0 1-1.297 3.957.996.996 0 0 1-.133.204l-.108.129c-.178.243-.37.477-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18.146 18.146 0 0 1-.309-.38l-.133-.163a.999.999 0 0 1-.13-.202 7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z"
                    clipRule="evenodd"
                  />
                </svg>
                <div className="text-main1 font-medium">London</div>
              </div>
              <div className="flex justify-center items-center w-full md:w-auto">
                <button className="bg-main1 w-[100%] text-white py-[17px] px-8 font-medium text-sm hover:bg-main2 duration-300">
                  Apply now
                </button>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-5 md:gap-0 md:flex-row sm:justify-between md:items-center w-[100%] px-5 lg:px-8 py-6">
              <div className="flex flex-col items-center md:items-start gap-3 w-[100%] sm:w-[90%] md:w-[45%]">
                <h1 className="cursor-pointer text-main1 hover:text-main2 duration-300 text-xl font-semibold">
                  Support Specialist
                </h1>

                <p className="w-[100%] text-main1 text-center md:text-start">
                  Support Specialist is pivotal in providing assistance,
                  guidance, and resources to students, families, and educators
                  within the virtual learning environment.
                </p>
              </div>
              <div className="flex gap-2">
                <svg
                  className="w-6 h-6 text-main2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.906 1.994a8.002 8.002 0 0 1 8.09 8.421 7.996 7.996 0 0 1-1.297 3.957.996.996 0 0 1-.133.204l-.108.129c-.178.243-.37.477-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18.146 18.146 0 0 1-.309-.38l-.133-.163a.999.999 0 0 1-.13-.202 7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z"
                    clipRule="evenodd"
                  />
                </svg>
                <div className="text-main1 font-medium">Online</div>
              </div>
              <div className="flex justify-center items-center w-full md:w-auto">
                <button className="bg-main1 w-[100%] text-white py-[17px] px-8 font-medium text-sm hover:bg-main2 duration-300">
                  Apply now
                </button>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-5 md:gap-0 md:flex-row sm:justify-between md:items-center bg-main3 w-[100%] px-5 lg:px-8 py-6">
              <div className="flex flex-col items-center md:items-start gap-3 w-[100%] sm:w-[90%] md:w-[45%]">
                <h1 className="cursor-pointer text-main1 hover:text-main2 duration-300 text-xl font-semibold">
                  Program Coordinator
                </h1>

                <p className="w-[100%] text-main1 text-center md:text-start">
                  Program Coordinator is essential in overseeing and
                  coordinating various programs, initiatives, and activities
                  within the virtual learning environment.
                </p>
              </div>
              <div className="flex gap-2">
                <svg
                  className="w-6 h-6 text-main2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.906 1.994a8.002 8.002 0 0 1 8.09 8.421 7.996 7.996 0 0 1-1.297 3.957.996.996 0 0 1-.133.204l-.108.129c-.178.243-.37.477-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18.146 18.146 0 0 1-.309-.38l-.133-.163a.999.999 0 0 1-.13-.202 7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z"
                    clipRule="evenodd"
                  />
                </svg>
                <div className="text-main1 font-medium">Online</div>
              </div>
              <div className="flex justify-center items-center w-full md:w-auto">
                <button className="bg-main1 w-[100%] text-white py-[17px] px-8 font-medium text-sm hover:bg-main2 duration-300">
                  Apply now
                </button>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-5 md:gap-0 md:flex-row sm:justify-between md:items-center w-[100%] px-5 lg:px-8 py-6">
              <div className="flex flex-col items-center md:items-start gap-3 w-[100%] sm:w-[90%] md:w-[45%]">
                <h1 className="cursor-pointer text-main1 hover:text-main2 duration-300 text-xl font-semibold">
                  Administrative Assistant
                </h1>

                <p className="w-[100%] text-main1 text-center md:text-start">
                  Administrative Assistant in an online school is crucial in
                  providing essential administrative support to ensure the
                  smooth operation of the virtual learning environment.
                </p>
              </div>
              <div className="flex gap-2">
                <svg
                  className="w-6 h-6 text-main2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.906 1.994a8.002 8.002 0 0 1 8.09 8.421 7.996 7.996 0 0 1-1.297 3.957.996.996 0 0 1-.133.204l-.108.129c-.178.243-.37.477-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18.146 18.146 0 0 1-.309-.38l-.133-.163a.999.999 0 0 1-.13-.202 7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z"
                    clipRule="evenodd"
                  />
                </svg>
                <div className="text-main1 font-medium">Paris</div>
              </div>
              <div className="flex justify-center items-center w-full md:w-auto">
                <button className="bg-main1 w-[100%] text-white py-[17px] px-8 font-medium text-sm hover:bg-main2 duration-300">
                  Apply now
                </button>
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

      <div className="mt-32 gap-14">
        <div className="flex flex-col items-center justify-center gap-3">
          <div>
            <span className="text-main2 bg-[#f4fafa] px-2 py-1">Our Media</span>
          </div>
          <div>
            <h1 className="text-main1 text-3xl w-[100%] text-center sm:text-4xl font-[500] mt-2">
              Teaching our students
            </h1>
          </div>
          <div className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[55%]">
            <p className="text-main1 text-center">
              Welcome to our online school, where learning knows no boundaries.
              With our innovative virtual platform, students can access
              high-quality education from anywhere in the world. Pause video
            </p>
          </div>
        </div>
      </div>
      <div className="relative px-5 lg:px-12 w-[100%] mt-20">
        <video
          ref={videos}
          src={video}
          autoPlay
          muted
          loop
          className="relative h-[450px] w-[100%] object-cover border-[8px] border-[#f4fafa]"
        ></video>
        <div className="flex justify-center">
          <span
            onClick={playandPause}
            className="bg-main2 rounded-full text-white hover:bg-main1 duration-300 cursor-pointer py-[15px] absolute top-52 text-5xl  px-[15px]"
          >
            {play ? (
              <FaPlay className="text-sm" />
            ) : (
              <FaPause className="text-sm" />
            )}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Career;
