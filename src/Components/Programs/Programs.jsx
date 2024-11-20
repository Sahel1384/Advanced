// import program1 from "../../assets/images/b.jpg";
// import program2 from "../../assets/images/a.jpg";
// import program3 from "../../assets/images/c.jpg";
import { ProgramsData } from "./ProgramsData";

function Programs() {
  return (
    <div className="mt-32 bg-main3 py-24  gap-14">
      <div className="flex flex-col items-center justify-center gap-3">
        <div>
          <span className="text-main2 bg-[#dff6ec] px-2 py-1">
            Our Programs
          </span>
        </div>
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
        {ProgramsData.map((data) => (
          <div
            key={data.id}
            className="w-[100%] md:w-[47%] lg:w-[370px] bg-white flex flex-col gap-8 pb-10"
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

        {/* <div className="w-[100%] md:w-[47%] lg:w-[370px] bg-white flex flex-col gap-8 pb-10">
          <div className="overflow-hidden">
            <img
              src={program2}
              className="h-56 object-cover hover:scale-110 w-full duration-300 cursor-pointer"
              alt=""
            />
          </div>
          <div className="flex flex-col items-center justify-center gap-5">
            <div>
              <h1 className="text-main1 text-3xl font-[400] hover:text-main2 duration-300 cursor-pointer">
                Language Lessons
              </h1>
            </div>
            <div className="w-[100%] md:w-[82%]">
              <p className="text-center text-main1">
                Whether you&apos;re looking to learn a new language for travel,
                work, or personal enrichment.
              </p>
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
        <div className="w-[100%] md:w-[47%] lg:w-[370px] bg-white flex flex-col gap-8 pb-10">
          <div className="overflow-hidden">
            <img
              src={program3}
              className="h-56 object-cover hover:scale-110 w-full duration-300 cursor-pointer"
              alt=""
            />
          </div>
          <div className="flex flex-col items-center justify-center gap-5">
            <div>
              <h1 className="text-main1 text-3xl font-[400] hover:text-main2 duration-300 cursor-pointer">
                TechTrek Institute
              </h1>
            </div>
            <div className="w-[100%] md:w-[82%]">
              <p className="text-center text-main1">
                Our institute is dedicated to providing cutting-edge education
                and training that equips students with the skills.
              </p>
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
        </div> */}
      </div>

      <div className="flex justify-center mt-14">
        <button className="bg-main1 text-white py-[17px] px-8 font-medium text-sm hover:bg-main2 duration-300">
          View all
        </button>
      </div>
    </div>
  );
}

export default Programs;
