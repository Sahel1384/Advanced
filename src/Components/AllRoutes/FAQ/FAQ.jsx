import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
function FAQ() {
  // FAQ state
  const [FAQ, setFAQ] = useState(false);
  const [FAQ2, setFAQ2] = useState(false);
  const [FAQ3, setFAQ3] = useState(false);
  const [FAQ4, setFAQ4] = useState(false);
  const [FAQ5, setFAQ5] = useState(false);
  const [FAQ6, setFAQ6] = useState(false);
  const [FAQ7, setFAQ7] = useState(false);
  const [FAQ8, setFAQ8] = useState(false);
  return (
    <>
      {/* text div start */}
      <div className="w-full mt-14 lg:mt-20 bg-main1 text-white h-[350px] flex gap-5 items-center justify-center flex-col text-center">
        <h1 className="text-5xl font-sans font-medium">
          Frequently asked questions
        </h1>
      </div>
      {/* text div end */}

      {/* FAQ start */}
      <div className="pt-44">
        <div className="w-full text-center my-20">
          <span className="bg-[#dff6ec] px-2 py-1 font-sans text-main2">
            FAQ
          </span>
          <h1 className="text-4xl sm:text-[50px] font-medium my-2 mt-4 font-sans text-main1">
            Popular Questions
          </h1>
        </div>

        <div className="flex w-full flex-col md:flex-row items-start">
          <div className="px-5 lg:px-14 flex gap-5 flex-col flex-wrap md:flex-nowrap">
            <div
              className={`bg-main3 p-8 md:w-[100%] cursor-pointer w-full  ${
                FAQ ? "max-h-72" : "max-h-20"
              } duration-500 overflow-hidden`}
              onClick={() => setFAQ(!FAQ)}
            >
              <div className="flex items-center justify-between">
                <h1 className="lg:text-[1.5vw]  font-sans font-medium ">
                  What Programs do you offer ?
                </h1>
                <FaAngleDown
                  className={`text-xl duration-500 ${
                    FAQ ? "transform rotate-180 text-main2" : "rotate-0"
                  }`}
                />
              </div>
              <div>
                <p className="text-sm font-sans text-main1 mt-5">
                  Many people has the notion that enlightenment is one state.
                  Many also believe that when it is attained, a person is
                  forever in that state.For your necessary discernment. Thank
                  you for reading.
                </p>
              </div>
            </div>
            <div
              className={`bg-main3 p-8 md:w-[100%] cursor-pointer w-full  ${
                FAQ2 ? "max-h-72" : "max-h-20"
              } duration-500 overflow-hidden`}
              onClick={() => setFAQ2(!FAQ2)}
            >
              <div className="flex items-center justify-between">
                <h1 className="lg:text-[1.5vw]  font-sans font-medium ">
                  How Long are your lessons ?
                </h1>
                <FaAngleDown
                  className={`text-xl duration-500 ${
                    FAQ2 ? "transform rotate-180 text-main2" : "rotate-0"
                  }`}
                />
              </div>
              <div>
                <p className="text-sm font-sans text-main1 mt-5">
                  Many people has the notion that enlightenment is one state.
                  Many also believe that when it is attained, a person is
                  forever in that state.For your necessary discernment. Thank
                  you for reading.
                </p>
              </div>
            </div>
            <div
              className={`bg-main3 p-8 md:w-[100%] cursor-pointer w-full  ${
                FAQ3 ? "max-h-72" : "max-h-20"
              } duration-500 overflow-hidden`}
              onClick={() => setFAQ3(!FAQ3)}
            >
              <div className="flex items-center justify-between">
                <h1 className="lg:text-[1.5vw]  font-sans font-medium ">
                  What Programs do you offer ?
                </h1>
                <FaAngleDown
                  className={`text-xl duration-500 ${
                    FAQ3 ? "transform rotate-180 text-main2" : "rotate-0"
                  }`}
                />
              </div>
              <div>
                <p className="text-sm font-sans text-main1 mt-5">
                  Many people has the notion that enlightenment is one state.
                  Many also believe that when it is attained, a person is
                  forever in that state.For your necessary discernment. Thank
                  you for reading.
                </p>
              </div>
            </div>
            <div
              className={`bg-main3 p-8 md:w-[100%] cursor-pointer w-full  ${
                FAQ4 ? "max-h-72" : "max-h-20"
              } duration-500 overflow-hidden`}
              onClick={() => setFAQ4(!FAQ4)}
            >
              <div className="flex items-center justify-between">
                <h1 className="lg:text-[1.5vw]  font-sans font-medium ">
                  How Long are your lessons ?
                </h1>
                <FaAngleDown
                  className={`text-xl duration-500 ${
                    FAQ4 ? "transform rotate-180 text-main2" : "rotate-0"
                  }`}
                />
              </div>
              <div>
                <p className="text-sm font-sans text-main1 mt-5">
                  Many people has the notion that enlightenment is one state.
                  Many also believe that when it is attained, a person is
                  forever in that state.For your necessary discernment. Thank
                  you for reading.
                </p>
              </div>
            </div>
          </div>

          <div className="px-5 lg:px-14 flex flex-col gap-5 flex-wrap md:flex-nowrap">
            <div
              className={`bg-main3 p-8 md:w-[100%] cursor-pointer w-full  ${
                FAQ5 ? "max-h-72" : "max-h-20"
              } duration-500 overflow-hidden`}
              onClick={() => setFAQ5(!FAQ5)}
            >
              <div className="flex items-center justify-between">
                <h1 className="lg:text-[1.5vw]  font-sans font-medium ">
                  What Programs do you offer ?
                </h1>
                <FaAngleDown
                  className={`text-xl duration-500 ${
                    FAQ5 ? "transform rotate-180 text-main2" : "rotate-0"
                  }`}
                />
              </div>
              <div>
                <p className="text-sm font-sans text-main1 mt-5">
                  Many people has the notion that enlightenment is one state.
                  Many also believe that when it is attained, a person is
                  forever in that state.For your necessary discernment. Thank
                  you for reading.
                </p>
              </div>
            </div>
            <div
              className={`bg-main3 p-8 md:w-[100%] cursor-pointer w-full  ${
                FAQ6 ? "max-h-72" : "max-h-20"
              } duration-500 overflow-hidden`}
              onClick={() => setFAQ6(!FAQ6)}
            >
              <div className="flex items-center justify-between">
                <h1 className="lg:text-[1.5vw]  font-sans font-medium ">
                  How Long are your lessons ?
                </h1>
                <FaAngleDown
                  className={`text-xl duration-500 ${
                    FAQ6 ? "transform rotate-180 text-main2" : "rotate-0"
                  }`}
                />
              </div>
              <div>
                <p className="text-sm font-sans text-main1 mt-5">
                  Many people has the notion that enlightenment is one state.
                  Many also believe that when it is attained, a person is
                  forever in that state.For your necessary discernment. Thank
                  you for reading.
                </p>
              </div>
            </div>
            <div
              className={`bg-main3 p-8 md:w-[100%] cursor-pointer w-full  ${
                FAQ7 ? "max-h-72" : "max-h-20"
              } duration-500 overflow-hidden`}
              onClick={() => setFAQ7(!FAQ7)}
            >
              <div className="flex items-center justify-between">
                <h1 className="lg:text-[1.5vw]  font-sans font-medium ">
                  What Programs do you offer ?
                </h1>
                <FaAngleDown
                  className={`text-xl duration-500 ${
                    FAQ7 ? "transform rotate-180 text-main2" : "rotate-0"
                  }`}
                />
              </div>
              <div>
                <p className="text-sm font-sans text-main1 mt-5">
                  Many people has the notion that enlightenment is one state.
                  Many also believe that when it is attained, a person is
                  forever in that state.For your necessary discernment. Thank
                  you for reading.
                </p>
              </div>
            </div>
            <div
              className={`bg-main3 p-8 md:w-[100%] cursor-pointer w-full  ${
                FAQ8 ? "max-h-72" : "max-h-20"
              } duration-500 overflow-hidden`}
              onClick={() => setFAQ8(!FAQ8)}
            >
              <div className="flex items-center justify-between">
                <h1 className="lg:text-[1.5vw]  font-sans font-medium ">
                  How Long are your lessons ?
                </h1>
                <FaAngleDown
                  className={`text-xl duration-500 ${
                    FAQ8 ? "transform rotate-180 text-main2" : "rotate-0"
                  }`}
                />
              </div>
              <div>
                <p className="text-sm font-sans text-main1 mt-5">
                  Many people has the notion that enlightenment is one state.
                  Many also believe that when it is attained, a person is
                  forever in that state.For your necessary discernment. Thank
                  you for reading.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FAQ;