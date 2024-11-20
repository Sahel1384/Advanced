import about from "../../../assets/images/about_hero.webp";
import about2 from "../../../assets/images/about2.png";
import svg from "../../../assets/images/38.svg";
import { AboutUsData } from "./AboutUsData";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { TeamData } from "../../Team/TeamData";

import blog1 from "../../../assets/images/blog1.jpg";
import blog2 from "../../../assets/images/blog4.jpg";
function AboutUs() {
  return (
    <div className="mt-14 lg:mt-20">
      <div className="relative">
        <img
          src={about}
          className="w-full object-cover h-[400px] lg:h-[505px]"
          alt=""
        />
        <div className="absolute gap-10 top-0 w-full h-[400px] lg:h-[505px] left-0 right-0 bg-gradient-to-r from-main1/70 text-white flex justify-start pt-28 items-center flex-col">
          <h1 className="text-4xl sm:text-6xl font-medium">About School</h1>
          <div className="w-[90%] sm:w-[500px] text-center">
            <p className="text-sm sm:text-md font-medium">
              Our experienced educators utilize cutting-edge technology to
              deliver engaging lessons, personalized support, and interactive
              experiences that inspire curiosity and foster academic success.
            </p>
          </div>
          <button className="bg-main2 text-white py-4 font-medium text-sm px-9 hover:bg-main1 duration-300">
            Choose Class
          </button>
        </div>
      </div>

      <div className="bg-main3 py-28  gap-14">
        <div className="flex flex-col items-center justify-center gap-3">
          <div>
            <span className="text-main2 bg-[#dff6ec] px-2 py-1">
              Why Choose Us
            </span>
          </div>
          <div>
            <h1 className="text-main1 text-3xl w-[100%] text-center sm:text-5xl font-[500] mt-2">
              Learning Without Borders
            </h1>
          </div>
          <div className="w-[90%] md:w-[70%] lg:w-[760px] mt-4">
            <p className="text-main1 text-center">
              Whether you&apos;re seeking flexibility, individualized
              instruction, or access to a diverse range of courses, our online
              school is dedicated to empowering students to reach their full
              potential and thrive in an ever-evolving digital landscape.
            </p>
          </div>
        </div>

        <div className="flex relative items-center z-10 flex-col justify-center gap-12 mt-16">
          <div className="flex justify-center items-center flex-wrap md:flex-nowrap gap-3 md:gap-5 lg:gap-12">
            {AboutUsData.map((data) => (
              <div
                key={data.id}
                className="w-[90%] sm:w-[44%] md:w-[28%] lg:w-[25%] bg-white flex flex-col gap-3 py-7 items-center justify-center"
              >
                <h1 className="text-main1 md:text-2xl lg:text-3xl font-[500]">
                  {data.title}
                </h1>
                <div className="w-[75%]">
                  <p className="text-center font-[400] md:text-sm lg:text-base text-main1">
                    {data.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="h-96 sm:h-72 md:h-28 w-[98%] md:w-[95%] bg-main1 absolute left-2 md:left-5 lg:left-8 right-0 top-28 -z-10"></div>
        </div>
      </div>

      <div className="mt-32 gap-14">
        <div className="flex flex-col items-center justify-center gap-3">
          <div>
            <span className="text-main2 bg-[#f4fafa] px-2 py-1">
              What You Get
            </span>
          </div>
          <div>
            <h1 className="text-main1 text-3xl w-[100%] text-center sm:text-5xl font-[500] mt-2">
              See Our Features
            </h1>
          </div>
        </div>

        <div className="px-5 flex-col gap-5  md:items-center lg:flex-row lg:gap-5 lg:px-5 xl:gap-5 xl:flex-row xl:px-12 flex mt-10 lg:mt-24 justify-center">
          <div className="flex w-[100%] items-center lg:items-start lg:w-[30%] flex-col gap-10">
            <div className="flex flex-col gap-3">
              <h1 className="flex text-2xl justify-center lg:justify-start font-[400] text-main1">
                01. Flexible Learning
              </h1>
              <p className="text-main1 text-center lg:text-start md:w-[100%] lg:w-[330px]">
                Study at your own pace with online courses available 24/7.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="flex text-2xl justify-center lg:justify-start font-[400] text-main1">
                02. Hands-On Projects
              </h1>
              <p className="text-main1 text-center lg:text-start md:w-[100%] lg:w-[330px]">
                Apply your knowledge through practical, project-based learning.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="flex text-2xl justify-center lg:justify-start font-[400] text-main1">
                03. Certification Programs
              </h1>
              <p className="text-main1 text-center lg:text-start md:w-[100%] lg:w-[330px]">
                Earn recognized certifications to boost your career prospects.
              </p>
            </div>
          </div>
          <div className="w-[100%] lg:w-[30%] xl:w-[40%]">
            <div className="relative flex justify-center lg:justify-end xl:justify-center">
              <img
                src={svg}
                className="w-full sm:w-96  h-60 lg:h-72 lg:w-60 xl:w-[400px] object-cover lg:left-14 xl:left-7 absolute lg:top-0 xl:top-5 -z-10"
                alt=""
              />
              <img
                src={about2}
                className="w-60 h-96 lg:w-52 xl:w-60 lg:h-80 xl:h-96"
                alt=""
              />
              <div className="bg-main1 w-full sm:w-96 h-40 lg:h-40 lg:w-60 xl:w-96 lg:left-14 xl:left-7 absolute top-56 -z-10"></div>
            </div>
          </div>
          <div className="flex w-[100%] items-center lg:items-start lg:w-[30%] flex-col gap-10">
            <div className="flex flex-col gap-3">
              <h1 className="flex text-2xl justify-center lg:justify-start font-[400] text-main1">
                04. Expert Instructors
              </h1>
              <p className="text-main1 text-center lg:text-start md:w-[100%] lg:w-[330px]">
                Learn from industry professionals with real-world experience.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="flex text-2xl justify-center lg:justify-start font-[400] text-main1">
                05. Supportive Community
              </h1>
              <p className="text-main1 text-center lg:text-start md:w-[100%] lg:w-[330px]">
                Connect with instructors and peers for guidance and
                collaboration.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="flex text-2xl justify-center lg:justify-start font-[400] text-main1">
                06. Global Accessibility
              </h1>
              <p className="text-main1 text-center lg:text-start md:w-[100%] lg:w-[330px]">
                Access high-quality education from anywhere in the world.
              </p>
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

        <div className="px-5 xl:px-12 mt-28 flex justify-center items-center lg:justify-between gap-16 lg:gap-0 flex-col lg:flex-row">
          <div className="w-[100%] lg:w-[50%] flex flex-col gap-8 justify-center items-center lg:items-start lg:justify-start">
            <div className="flex flex-col gap-3 justify-center items-center lg:items-start lg:justify-center">
              <span className="text-main2 bg-[#f4fafa] py-1 px-2">
                About Us
              </span>
              <h1 className="text-main1 font-[400] text-center text-4xl sm:text-5xl w-[100%] lg:w-[400px]">
                Empowering Your Cool Future
              </h1>
            </div>
            <div className="sm:w-[100%] md:w-[90%] text-center lg:text-start lg:w-[78%]">
              <p className="text-main1">
                With expert instructors, hands-on learning, and a supportive
                community, we are committed to guiding you every step of the
                way. Whether you&apos;re starting from scratch or looking to
                level up, we&apos;re here to help you achieve your goals and
                shape your future in the tech world.
              </p>
            </div>
            <div>
              <button className="bg-main1 mt-7 text-white py-[17px] px-8 font-medium text-sm hover:bg-main2 duration-300">
                View More
              </button>
            </div>
          </div>

          <div className="w-[100%] lg:w-[60%] flex flex-col sm:flex-row gap-7">
            <div className="flex flex-col gap-7">
              <div className="sm:w-[100%] lg:w-[270px] xl:w-[300px] bg-main3 flex items-start justify-start flex-col px-6  lg:px-5 py-8 gap-5">
                <span className="bg-main1 text-white font-medium px-4 py-1 text-2xl">
                  1
                </span>
                <h1 className="text-main1 font-semibold text-xl">
                  Flexibility
                </h1>
                <p className="text-main1">
                  We are dedicated to empowering individuals with the skills.
                </p>
              </div>
              <div className="sm:w-[100%] lg:w-[270px] xl:w-[300px] bg-main1 flex items-start justify-start flex-col px-6 lg:px-5 py-8 gap-5">
                <span className="bg-white text-main1 font-medium px-4 py-1 text-2xl">
                  3
                </span>
                <h1 className="text-white font-semibold text-xl">
                  Skill Development
                </h1>
                <p className="text-white">
                  We are dedicated to empowering individuals with the skills.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-7 mt-6">
              <div className="sm:w-[100%] lg:w-[270px] xl:w-[300px] bg-main1 flex items-start justify-start flex-col px-6 lg:px-5 py-8 gap-5">
                <span className="bg-white text-main1 font-medium px-4 py-1 text-2xl">
                  2
                </span>
                <h1 className="text-white font-semibold text-xl">
                  Accessibility
                </h1>
                <p className="text-white">
                  We are dedicated to empowering individuals with the skills.
                </p>
              </div>
              <div className="sm:w-[100%] lg:w-[270px] xl:w-[300px] bg-main1 flex items-start justify-start flex-col px-6 lg:px-5 py-8 gap-5">
                <span className="bg-white text-main1 font-medium px-4 py-1 text-2xl">
                  4
                </span>
                <h1 className="text-white font-semibold text-xl">
                  Cost-Effective
                </h1>
                <p className="text-white">
                  We are dedicated to empowering individuals with the skills.
                </p>
              </div>
            </div>
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
      <div className="px-5 xl:px-12 mt-16 flex flex-col md:flex-row justify-between gap-8">
        <div className="p-2 w-[100%] lg:w-[50%] flex flex-col bg-main3 lg:h-[520px] xl:h-[550px] gap-5 border-main2">
          <div className="relative">
            <div className="overflow-hidden ">
              <img
                src={blog1}
                className="w-[886px] h-[270px] md:w-[100%] lg:w-[100% ] md:h-[270px] xl:h-[300px] hover:scale-110 duration-300 cursor-pointer"
                alt=""
              />
            </div>
          </div>
          <div className="flex flex-col px-8 gap-5">
            <h1 className="text-main1 hover:text-main2 duration-300 cursor-pointer text-2xl font-[500] w-[100%] sm:w-[100%]">
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

        <div className="p-2 w-[100%] lg:w-[50%] flex flex-col bg-main3 lg:h-[520px] xl:h-[550px] gap-5 border-main2">
          <div className="relative">
            <div className="overflow-hidden ">
              <img
                src={blog2}
                className="w-[886px] h-[270px] md:w-[100%] lg:w-[100%] md:h-[270px] xl:h-[300px] hover:scale-110 duration-300 cursor-pointer"
                alt=""
              />
            </div>
          </div>
          <div className="flex flex-col px-8 gap-5">
            <h1 className="text-main1 hover:text-main2 duration-300 cursor-pointer text-2xl font-[500] w-[100%]">
              Harnessing Technology for Effective Learning
            </h1>
            <p className="text-main1 w-[100%]">
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
      </div>
    </div>
  );
}

export default AboutUs;
