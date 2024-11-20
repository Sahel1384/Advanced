// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import AboutUs from "./Components/AllRoutes/AboutUs/AboutUs.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Teachers from "./Components/AllRoutes/Teachers/Teachers.jsx";
import Pricing from "./Components/AllRoutes/Pricing/Pricing.jsx";
import Career from "./Components/AllRoutes/Career/Career.jsx";
import TestimonialRoute from "./Components/AllRoutes/TestimonialRoute/TestimonialRoute.jsx";
import ClassesRoute from "./Components/AllRoutes/ClassesRoute/ClassesRoute.jsx";
import ProgramRoute from "./Components/AllRoutes/ProgramRoute/ProgramRoute.jsx";
import Schedule from "./Components/AllRoutes/Schedule/Schedule.jsx";
import FAQ from "./Components/AllRoutes/FAQ/FAQ.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="aboutUs" element={<AboutUs />} />
      <Route path="teachers" element={<Teachers />} />
      <Route path="pricing" element={<Pricing />} />
      <Route path="career" element={<Career />} />
      <Route path="testimonial" element={<TestimonialRoute />} />
      <Route path="classes" element={<ClassesRoute />} />
      <Route path="programs" element={<ProgramRoute />} />
      <Route path="schedule" element={<Schedule />} />
      <Route path="FAQ" element={<FAQ />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);
