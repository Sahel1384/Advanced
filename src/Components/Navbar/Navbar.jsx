import { useEffect, useState } from "react";
import advanced from "../../assets/images/671255d401c40971c17591dc_Logo White.svg";
import { NavLink, useLocation } from "react-router-dom";
import sideBarIcon from "../../assets/images/teacher.svg";
import webBage from "../../assets/images/6737137a78c8e17d02e2ad8b_wCopilot.svg";
function Navbar() {
  // sidebar start
  const [sideBar, setSideBar] = useState("w-[0px]");
  const location = useLocation();
  const showSideBar = () => {
    setSideBar("sm:w-[300px] duration-500");
  };
  const hideSideBar = () => {
    setSideBar("w-[0px] duration-500");
  };
  // sidebar end

  //   about list start
  const [aboutList, setAboutList] = useState(false);
  const showAboutList = () => {
    setAboutList(true);
  };
  const hideAboutList = () => {
    setAboutList(false);
  };
  //   about list end

  useEffect(() => {
    hideSideBar();
    setAboutList(false);
  }, [location]);

  return (
    <>
      {/* navbar start */}
      <div>
        <div className="flex justify-between items-center h-14 lg:h-20 px-5 lg:px-12 w-full bg-main3 fixed top-0 left-0 right-0 z-50">
          <div className="flex items-center gap-28">
            <NavLink to="/">
              {" "}
              <img src={advanced} className="w-32 h-10 cursor-pointer" alt="" />
            </NavLink>
            <div className="hidden lg:block">
              <ul className="flex gap-14 mt-6">
                <li className="text-main1 cursor-pointer hover:text-main2 duration-300 font-medium">
                  <NavLink to="/">Home</NavLink>{" "}
                </li>
                <li
                  onMouseOver={showAboutList}
                  onMouseLeave={hideAboutList}
                  className="relative text-main1 cursor-pointer hover:text-main2 duration-300 font-medium"
                >
                  <a className=" cursor-pointer flex items-center">
                    About Us{" "}
                    <svg
                      className="ml-2 fill-current"
                      width="16"
                      height="20"
                      viewBox="0 0 16 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7.99999 14.9C7.84999 14.9 7.72499 14.85 7.59999 14.75L1.84999 9.10005C1.62499 8.87505 1.62499 8.52505 1.84999 8.30005C2.07499 8.07505 2.42499 8.07505 2.64999 8.30005L7.99999 13.525L13.35 8.25005C13.575 8.02505 13.925 8.02505 14.15 8.25005C14.375 8.47505 14.375 8.82505 14.15 9.05005L8.39999 14.7C8.27499 14.825 8.14999 14.9 7.99999 14.9Z" />
                    </svg>
                  </a>
                  <div className="relative mt-7 text-sm right-10">
                    {aboutList ? (
                      <ul className="absolute flex flex-col gap-4 w-52 px-5 py-4 border bg-white">
                        <NavLink to="/aboutUs">
                          <li className="text-main1 group cursor-pointer items-center gap-1 flex hover:text-main2 duration-300 font-medium">
                            <span className="w-0 group-hover:w-5 duration-300 h-[2px] bg-main2"></span>{" "}
                            <span className="">About Us </span>
                          </li>
                        </NavLink>
                        <NavLink to="schedule">
                          <li className="text-main1 group cursor-pointer items-center gap-1 flex hover:text-main2 duration-300 font-medium">
                            <span className="w-0 group-hover:w-5 duration-300 h-[2px] bg-main2"></span>{" "}
                            <span>Schedule</span>
                          </li>
                        </NavLink>
                        <NavLink to="/teachers">
                          <li className="text-main1 group cursor-pointer items-center gap-1 flex hover:text-main2 duration-300 font-medium">
                            <span className="w-0 group-hover:w-5 duration-300 h-[2px] bg-main2"></span>{" "}
                            Our Teachers
                          </li>
                        </NavLink>
                        <NavLink to="pricing">
                          <li className="text-main1 group cursor-pointer items-center gap-1 flex hover:text-main2 duration-300 font-medium">
                            <span className="w-0 group-hover:w-5 duration-300 h-[2px] bg-main2"></span>{" "}
                            Pricing
                          </li>
                        </NavLink>
                        <NavLink to="career">
                          <li className="text-main1 group cursor-pointer items-center gap-1 flex hover:text-main2 duration-300 font-medium">
                            <span className="w-0 group-hover:w-5 duration-300 h-[2px] bg-main2"></span>{" "}
                            Career
                          </li>
                        </NavLink>
                        <NavLink to="testimonial">
                          <li className="text-main1 group cursor-pointer items-center gap-1 flex hover:text-main2 duration-300 font-medium">
                            <span className="w-0 group-hover:w-5 duration-300 h-[2px] bg-main2"></span>{" "}
                            Testimonials
                          </li>
                        </NavLink>
                        <NavLink to="FAQ">
                          <li className="text-main1 group cursor-pointer items-center gap-1 flex hover:text-main2 duration-300 font-medium">
                            <span className="w-0 group-hover:w-5 duration-300 h-[2px] bg-main2"></span>{" "}
                            FAQ
                          </li>
                        </NavLink>
                      </ul>
                    ) : null}
                  </div>
                </li>
                <NavLink to="classes">
                  <li className="text-main1 cursor-pointer hover:text-main2 duration-300 font-medium">
                    Classes
                  </li>
                </NavLink>
                <NavLink to="programs">
                  <li className="text-main1 cursor-pointer hover:text-main2 duration-300 font-medium">
                    Programs
                  </li>
                </NavLink>
              </ul>
            </div>
          </div>
          <div className="flex gap-8 items-center justify-center">
            <div className="relative cursor-pointer">
              <svg
                className="w-commerce-commercecartopenlinkicon icon text-main1 hover:text-main2 duration-300"
                width="17px"
                height="17px"
                viewBox="0 0 17 17"
              >
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <path
                    d="M2.60592789,2 L0,2 L0,0 L4.39407211,0 L4.84288393,4 L16,4 L16,9.93844589 L3.76940945,12.3694378 L2.60592789,2 Z M15.5,17 C14.6715729,17 14,16.3284271 14,15.5 C14,14.6715729 14.6715729,14 15.5,14 C16.3284271,14 17,14.6715729 17,15.5 C17,16.3284271 16.3284271,17 15.5,17 Z M5.5,17 C4.67157288,17 4,16.3284271 4,15.5 C4,14.6715729 4.67157288,14 5.5,14 C6.32842712,14 7,14.6715729 7,15.5 C7,16.3284271 6.32842712,17 5.5,17 Z"
                    fill="currentColor"
                    fillRule="nonzero"
                  ></path>
                </g>
              </svg>
              <div className="bg-main2 font-medium text-xs text-white px-[6px] py-[1px] -right-5 rounded-full absolute -top-3">
                0
              </div>
            </div>
            <div className="hidden lg:block">
              <button className="bg-main1 text-white py-[17px] px-8 font-medium text-sm hover:bg-main2 duration-300">
                Start Learning
              </button>
            </div>
            <div className="block lg:hidden cursor-pointer">
              <img
                onClick={showSideBar}
                src={sideBarIcon}
                loading="lazy"
                alt="icon"
                height="16"
                className="image-burger w-6"
              />
            </div>
          </div>
        </div>
      </div>
      {/* navbar end */}

      {/* {sideBar ? ( */}
      <div
        className={`${sideBar} shadow-md lg:hidden overflow-hidden fixed left-0 z-50 top-0 bottom-0 bg-white`}
      >
        <div className="flex flex-col items-start px-5 pt-3 gap-10">
          <div className="flex justify-between w-[100%]">
            <img src={advanced} className="w-32 h-10 cursor-pointer" alt="" />
            <img
              onClick={hideSideBar}
              src="https://cdn.prod.website-files.com/671218a312747ac394420871/671218a312747ac394420878_close-btn.svg"
              loading="lazy"
              alt="icon"
              className="nav-close-icon cursor-pointer"
            />
          </div>
          <div className="w-[100%]">
            <ul className="flex flex-col gap-6">
              <NavLink to="/">
                <li className="text-main1 cursor-pointer hover:text-main2 duration-300 font-medium">
                  Home{" "}
                </li>
              </NavLink>
              <li
                onMouseOver={showAboutList}
                onMouseLeave={hideAboutList}
                className="relative text-main1 group cursor-pointer hover:text-main2 duration-300 font-medium"
              >
                <a className="cursor-pointer flex items-center justify-between w-[100%]">
                  About Us{" "}
                  <svg
                    className="ml-2 fill-current group-hover:rotate-180 duration-300"
                    width="16"
                    height="20"
                    viewBox="0 0 16 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7.99999 14.9C7.84999 14.9 7.72499 14.85 7.59999 14.75L1.84999 9.10005C1.62499 8.87505 1.62499 8.52505 1.84999 8.30005C2.07499 8.07505 2.42499 8.07505 2.64999 8.30005L7.99999 13.525L13.35 8.25005C13.575 8.02505 13.925 8.02505 14.15 8.25005C14.375 8.47505 14.375 8.82505 14.15 9.05005L8.39999 14.7C8.27499 14.825 8.14999 14.9 7.99999 14.9Z" />
                  </svg>
                </a>
                <div
                  className={`
                  ${aboutList ? "duration-700 h-60" : "duration-700 h-0"}
                  relative text-sm right-0`}
                >
                  {aboutList ? (
                    <ul className="flex flex-col gap-4 w-[100%] px-5 py-4 bg-white">
                      <NavLink to="/aboutUs">
                        <li className="text-main1 cursor-pointer items-center gap-1 flex hover:text-main2 duration-300 font-medium">
                          <span className="">About Us</span>
                        </li>
                      </NavLink>
                      <NavLink to="/schedule">
                        <li className="text-main1 cursor-pointer hover:text-main2 duration-300 font-medium">
                          <span>Schedule</span>
                        </li>
                      </NavLink>
                      <NavLink to="/teachers">
                        <li className="text-main1 cursor-pointer hover:text-main2 duration-300 font-medium">
                          Our Teachers
                        </li>
                      </NavLink>
                      <NavLink to="/pricing">
                        <li className="text-main1 cursor-pointer hover:text-main2 duration-300 font-medium">
                          Pricing
                        </li>
                      </NavLink>
                      <NavLink to="/career">
                        <li className="text-main1 cursor-pointer hover:text-main2 duration-300 font-medium">
                          Career
                        </li>
                      </NavLink>
                      <NavLink to="/testimonial">
                        <li className="text-main1 cursor-pointer hover:text-main2 duration-300 font-medium">
                          Testimonials
                        </li>
                      </NavLink>
                      <NavLink to="/FAQ">
                        <li className="text-main1 cursor-pointer hover:text-main2 duration-300 font-medium">
                          FAQ
                        </li>
                      </NavLink>
                    </ul>
                  ) : null}
                </div>
              </li>
              <NavLink to="/classes">
                <li className="text-main1 cursor-pointer hover:text-main2 duration-300 font-medium">
                  Classes
                </li>
              </NavLink>
              <NavLink to="/programs">
                <li className="text-main1 cursor-pointer hover:text-main2 duration-300 font-medium">
                  Programs
                </li>
              </NavLink>
            </ul>
          </div>
          <div className="mt-5">
            <button className="bg-main1 text-white py-[17px] px-8 font-medium text-sm hover:bg-main2 duration-300">
              Start Learning
            </button>
          </div>
        </div>
      </div>
      {/* ) : null} */}

      {/* fixed btns */}
      <div className="fixed bottom-10 right-5 z-50 flex py-[6px]  rounded-md px-2 cursor-pointer gap-2 bg-[#4353ff] text-white">
        <img
          src="https://cdn.prod.website-files.com/671218a312747ac394420871/6737137a78c8e17d02e2ad8a_icon%20white.svg"
          alt=""
        />
        <button className="text-xs font-medium">Buy this Template</button>
      </div>
      <div className="border fixed bottom-1 right-5 justify-start  z-50 flex py-[6px] rounded-md px-[18px] cursor-pointer gap-2 bg-white text-[#4353ff]">
        <img src={webBage} alt="" />
        <button className="text-xs font-medium">All Templates</button>
      </div>
    </>
  );
}

export default Navbar;
