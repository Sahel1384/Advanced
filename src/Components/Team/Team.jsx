import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { TeamData } from "./TeamData";
function Team() {
  return (
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

      <div className="px-5 lg:px-12 flex flex-wrap justify-center lg:flex-nowrap gap-5 mt-14">
        {TeamData.map((data) => (
          <div
            key={data.id}
            className="sm:w-[230px] md:w-[300px] flex flex-col items-center justify-center gap-3"
          >
            <div>
              <img
                src={data.image}
                className="w-[100%] duration-300 cursor-pointer border-[8px] border-[#f4fafa] object-cover hover:border-main1"
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

      <div className="flex justify-center mt-14">
        <button className="bg-main1 text-white py-[17px] px-8 font-medium text-sm hover:bg-main2 duration-300">
          View all
        </button>
      </div>
    </div>
  );
}

export default Team;
