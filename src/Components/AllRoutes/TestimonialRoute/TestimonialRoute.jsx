import { FaParagraph } from "react-icons/fa";
import { TestimonialRouteData } from "./TestimonialRouteData";
import star from "../../../assets/images/icon-star.svg";
import { testimonailData } from "../../Testimonials/TestimonialData";
import testi from "../../../assets/images/testimonial.jpg";
import testi2 from "../../../assets/images/testimonial2.jpg";

function TestimonialRoute() {
  return (
    <div className="mt-14 lg:mt-20">
      <div className=" gap-10 top-0 w-full h-[400px] lg:h-[390px] text-main1 flex justify-start pt-28 items-center flex-col">
        <span className="text-main2 bg-[#dff6ec] px-2 py-1">
          More About Our Talented Instructors
        </span>
        <h1 className="text-4xl sm:text-6xl font-medium">Testimonials</h1>
      </div>

      <div className="px-0 md:px-5 xl:px-12 flex flex-col md:flex-row justify-center items-center gap-5 flex-wrap">
        {TestimonialRouteData.map((data) => (
          <div
            key={data.id}
            className="w-[90%] md:w-[48%] lg:w-[310px] xl:w-[370px] flex flex-col items-center justify-center gap-6 bg-main3 py-10"
          >
            <FaParagraph className="text-main2" />
            <h1 className="text-main1 text-3xl font-medium">{data.title}</h1>
            <div className="w-[78%]">
              <p className="text-main1 text-center text-base">{data.desc}</p>
            </div>
            <div className="text-main1 text-xs font-medium">{data.date}</div>
          </div>
        ))}
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

      <div className="mt-32 gap-14">
        <div className="flex flex-col items-center justify-center gap-3">
          <div>
            <span className="text-main2 bg-[#f4fafa] px-2 py-1">
              Testimonials
            </span>
          </div>
          <div>
            <h1 className="text-main1 text-3xl w-[100%] text-center sm:text-4xl font-[500] mt-2">
              What Our Clients Say
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

        <div className="flex gap-5 px-10 items-center justify-center flex-wrap md:flex-nowrap mt-16">
          {testimonailData.map((data) => (
            <div
              key={data.id}
              className="bg-main3 w-full sm:w-[45%] lg:max-w-sm px-8 py-7 flex flex-col gap-5"
            >
              <div className="flex gap-1">
                <img src={star} className="w-4" alt="" />
                <img src={star} className="w-4" alt="" />
                <img src={star} className="w-4" alt="" />
                <img src={star} className="w-4" alt="" />
                <img src={star} className="w-4" alt="" />
              </div>
              <div className="text-main1">{data.title}</div>
              <div>
                <p className="text-sm w-[93%] font-semibolds text-main1">
                  {data.desc}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="cursor-pointer text-main1">
                  <h1 className="text-sm font-semibold">{data.name}</h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative h-[640px] top-28 bg-main1">
        <div className="md:w-[80%] relative lg:w-[80%] xl:w-[90%]">
          <img
            src={testi}
            className="w-[100%] hidden md:block md:h-[600px] lg:h-[550px] xl:h-[600px] object-cover relative"
            alt=""
          />
          <div className="bg-white w-[100%] sm:w-[80%] md:w-[500px] lg:w-[500px] xl:w-[570px] h-[450px] absolute top-5 sm:top-0  sm:right-16 md:-right-20">
            <div className="flex flex-col items-start justify-end px-10 py-16 gap-8">
              <div>
                <span className="text-main2 bg-[#f4fafa] px-2 py-1">
                  Testimonials
                </span>
              </div>
              <div>
                <h1 className="text-main1 text-3xl w-[100%] text-center sm:text-4xl font-[500] mt-2">
                  What Students Says
                </h1>
              </div>
              <div className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[100%]">
                <p className="text-main1 text-lg text-start">
                  &quot;The courses are well-structured, easy to follow, and
                  cover a wide range of topics. Teachers are supportive, and the
                  user-friendly interface makes it simple to stay on
                  track.&quot;
                </p>
              </div>

              <div className="flex items-center gap-3">
                <img src={testi2} className="w-12 rounded-full" alt="" />
                <p className="text-main1 font-medium">Anna Miller</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialRoute;
