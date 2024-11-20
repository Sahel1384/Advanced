import { useRef, useState } from "react";
import video from "../../assets/video/671218a312747ac394420992_Video-transcode.mp4";
import { FaPause, FaPlay } from "react-icons/fa";
function Media() {
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
    <>
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
    </>
  );
}

export default Media;
