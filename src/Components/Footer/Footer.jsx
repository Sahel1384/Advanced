import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaSlack,
  FaTwitter,
} from "react-icons/fa";
import advanced from "../../assets/images/6712561a4bb4a042fff616a4_Logo White.svg";
import { NavLink } from "react-router-dom";
function Footer() {
  return (
    <div className="px-5 lg:px-12 mt-28 py-20 bg-main1">
      <div className="flex gap-10 flex-col md:flex-row justify-between items-center">
        <div className="flex text-center  md:text-start justify-center items-center md:items-start md:justify-start md:w-[37%] lg:w-[37%] flex-col gap-5">
          <div>
            <NavLink to="/">
              <img src={advanced} className="w-40 h-10 cursor-pointer" alt="" />
            </NavLink>
          </div>
          <div className="">
            <p className="text-white">
              Our innovative classes and programs are designed to meet the needs
              of diverse learners, offering flexible and accessible pathways to
              skill development.
            </p>
          </div>
          <div>
            <a
              href="#"
              className="text-main2 hover:text-white duration-300 font-medium"
            >
              More About Us
            </a>
          </div>
        </div>
        <div className="flex w-[70%] justify-center items-center lg:w-[45%] flex-col gap-10">
          <div className="flex flex-wrap justify-center gap-10 lg:gap-14">
            <NavLink to="/aboutUs">
              <p className="text-white hover:text-main2 duration-300 cursor-pointer">
                About Us
              </p>
            </NavLink>
            <NavLink to="/classes">
              <p className="text-white hover:text-main2 duration-300 cursor-pointer">
                Classes
              </p>
            </NavLink>
            <p className="text-white hover:text-main2 duration-300 cursor-pointer">
              Shop
            </p>
            <p className="text-white hover:text-main2 duration-300 cursor-pointer">
              Blog
            </p>
            <p className="text-white hover:text-main2 duration-300 cursor-pointer">
              Contact
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-20 md:justify-between">
            <div className="flex flex-col items-center md:items-start gap-4">
              <h1 className="text-white text-2xl">Contact Us</h1>
              <div className="flex flex-col items-center md:items-start">
                <p className="text-main2 text-sm duration-300 cursor-pointer hover:text-white">
                  +1 212 425 8617
                </p>
                <p className="text-main2 text-sm duration-300 cursor-pointer hover:text-white">
                  information@example.com
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center md:items-start gap-4">
              <h1 className="text-white text-2xl">Location</h1>
              <div>
                <p className="text-main2 text-sm duration-300 text-center md:text-start cursor-pointer hover:text-white">
                  5 Washington Square, New York, USA
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16 flex gap-7 md:gap-0 flex-col md:flex-row justify-between items-center">
        <div className="flex gap-5">
          <FaLinkedin className=" text-white hover:text-main2 cursor-pointer duration-300 text-2xl" />
          <FaFacebookF className="bg-white hover:text-main2 cursor-pointer duration-300 text-main1 rounded-full text-2xl px-[7px] py-" />
          <FaInstagram className=" text-white hover:text-main2 cursor-pointer duration-300 rounded-full text-2xl " />
          <FaSlack className="text-white hover:text-main2 cursor-pointer duration-300 text-2xl" />
          <FaTwitter className="bg-white hover:text-main2 cursor-pointer duration-300 text-main1 rounded-full text-2xl px-[5px] py-" />
        </div>
        <div className="text-lg w-[100%] sm:w-[400px] text-white text-center font-semibold">
          © AdvancEd. All Rights Reserved.{" "}
          <span className="hover:text-main2 duration-300 cursor-pointer">
            Licensing
          </span>{" "}
          <span className="hover:text-main2 duration-300 cursor-pointer">
            Template
          </span>{" "}
          by wCopilot Powered by{" "}
          <span className="hover:text-main2 duration-300 cursor-pointer">
            Webflow
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
