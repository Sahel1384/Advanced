import about from "../../../assets/images/teacher2.webp";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { TeacherData } from "./TeacherData";
import blog1 from "../../../assets/images/blog1.jpg";
import { useRef, useState } from "react";
import video from "../../../assets/video/671218a312747ac394420992_Video-transcode.mp4";
import { FaPause, FaPlay } from "react-icons/fa";

function Teachers() {
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
          className="w-full object-cover h-[400px] lg:h-[435px]"
          alt=""
        />
        <div className="absolute gap-10 top-0 w-full h-[400px] lg:h-[435px] left-0 right-0 bg-gradient-to-r from-main1/70 text-white flex justify-start pt-28 items-center flex-col">
          <h1 className="text-4xl sm:text-6xl font-medium">Our Teachers</h1>
          <div className="w-[90%] sm:w-[500px] text-center">
            <p className="text-sm sm:text-md font-medium">
              Welcome to our music school&apos;s teacher page, where you can
              learn more about the talented educators who make our school a
              special place to learn and grow as a musician.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-32 gap-14">
        <div className="flex flex-col items-center justify-center gap-3">
          <div>
            <span className="text-main2 bg-[#f4fafa] px-2 py-1">Our Team</span>
          </div>
          <div>
            <h1 className="text-main1 text-3xl w-[100%] text-center sm:text-4xl font-[500] mt-2">
              Meet Our Teachers
            </h1>
          </div>
          <div className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[55%]">
            <p className="text-main1 text-center">
              Pellentesque mattis mauris ac tortor volutpat, eu fermentum sapien
              euismod. In id tempus metus. Donec eu volutpat nibh, in maximus
              ligula.
            </p>
          </div>
        </div>

        <div className="px-5 lg:px-12 flex flex-wrap justify-center gap-5 mt-14">
          {TeacherData.map((data) => (
            <div
              key={data.id}
              className="sm:w-[230px] lg:w-[210px] xl:w-[270px] flex flex-col items-center justify-center gap-3"
            >
              <div>
                <img
                  src={data.image}
                  className="w-[100%] h-[300px] sm:h-[250px] duration-300 cursor-pointer border-[8px] border-[#f4fafa] object-cover hover:border-main1"
                  alt=""
                />
              </div>
              <div className="flex flex-col gap-3 ">
                <h1 className="font-semibold text-main1">{data.name}</h1>
                <div className="flex gap-3 justify-center">
                  <FaFacebookF className="text-white bg-main1 py-[1px] px-[10px] text-3xl hover:text-black hover:bg-main2 duration-300 cursor-pointer rounded-full" />
                  <FaInstagram className="text-white bg-main1 py-[1px] px-[10px] text-3xl hover:text-black hover:bg-main2 duration-300 cursor-pointer rounded-full" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="xl:px-12">
        <div className="w-full mt-32 items-center flex gap-7 md:gap-0 flex-col md:flex-row justify-between bg-main3">
          <div className="p-2 w-[100%] md:w-[50%]">
            <div className="relative">
              <div className="overflow-hidden">
                <img
                  src={blog1}
                  className="w-[886px] h-[270px] md:w-[100%] lg:w-[100%] md:h-[475px] cursor-pointer"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col px-8 gap-5 w-[100%] md:w-[50%]">
            <div className="flex flex-col items-center justify-center gap-3">
              <div>
                <span className="text-main2 bg-[#dff6ec] px-2 py-1">
                  Our benefits
                </span>
              </div>
              <div>
                <h1 className="text-main1 text-3xl w-[100%] text-center font-[500] mt-2">
                  Learning from anywhere in the world
                </h1>
              </div>
              <div className="w-[100%]">
                <p className="text-main1 text-center">
                  Experience the freedom of learning without boundaries with our
                  innovative online platform, where education comes to you no
                  matter where you are in the world. Our flexible and accessible
                  courses empower learners of all ages and backgrounds to pursue
                  their educational goals from the comfort of their own homes,
                </p>
              </div>
            </div>
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

export default Teachers;
