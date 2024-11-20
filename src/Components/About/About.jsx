import about from "../../assets/images/about.webp";
// import bg from "../../assets/images/671218a312747ac394420996_BG.png";
function About() {
  return (
    <>
      <div className="px-5 lg:px-12 mt-28 flex justify-center items-center lg:justify-between gap-16 lg:gap-0 flex-col lg:flex-row">
        <div className="w-[100%] lg:w-[50%] flex flex-col gap-8 justify-center items-center lg:items-start lg:justify-start">
          <div className="flex flex-col gap-3 justify-center items-center lg:items-start lg:justify-center">
            <span className="text-main2 bg-[#f4fafa] py-1 px-2">About Us</span>
            <h1 className="text-main1 font-[400] text-4xl sm:text-5xl">
              About School
            </h1>
          </div>
          <div className="sm:w-[100%] md:w-[57%] text-center lg:text-start lg:w-[80%]">
            <p className="text-main1">
              With our innovative virtual platform, students can access
              high-quality education from anywhere in the world. Our experienced
              educators utilize cutting-edge technology to deliver engaging
              lessons, personalized support, and interactive experiences that
              inspire curiosity and foster academic success.
            </p>
          </div>
          <div>
            <ul className="flex gap-14 px-4">
              <div className="flex flex-col gap-3">
                <li className="list-disc text-main1">Flexibility</li>
                <li className="list-disc text-main1">Variety of courses</li>
                <li className="list-disc text-main1">Use of technologies</li>
              </div>
              <div className="flex flex-col gap-3">
                <li className="list-disc text-main1">Accessibility</li>
                <li className="list-disc text-main1">
                  Individualized training
                </li>
                <li className="list-disc text-main1">Development of skills</li>
              </div>
            </ul>
          </div>
          <div>
            <button className="bg-main1 mt-7 text-white py-[17px] px-8 font-medium text-sm hover:bg-main2 duration-300">
              More About Us
            </button>
          </div>
        </div>
        <div className="w-[100%] lg:w-[60%]">
          <img
            src={about}
            className="w-[100%] lg:w-[700px] border-[8px] border-[#f4fafa] object-cover h-[350px] lg:h-[500px]"
            alt=""
          />
        </div>
      </div>

      <div className="mt-24 w-full py-20 flex-wrap lg:flex-nowrap bg-bg flex justify-center lg:justify-between gap-20 bg-cover bg-no-repeat px-5 lg:px-24 items-center">
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
    </>
  );
}

export default About;
