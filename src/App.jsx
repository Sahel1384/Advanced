import About from "./Components/About/About";
import Classes from "./Components/Classes/Classes";
// import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Media from "./Components/Media/Media";
// import Navbar from "./Components/Navbar/Navbar";
import Programs from "./Components/Programs/Programs";
import Recent from "./Components/Recent/Recent";
import Team from "./Components/Team/Team";
import Testimonial from "./Components/Testimonials/Testimonial";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Hero />
      <Programs />
      <About />
      <Media />
      <Classes />
      <Testimonial />
      <Team />
      <Recent />
      {/* <Footer /> */}
    </>
  );
}

export default App;
