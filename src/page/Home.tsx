import HeroSection from "../component/HeroSection";
import Project from "../component/Project";
import About from "../component/About";
import Contact from "../component/Contact";
import Background from "../component/Background";

const Home = () => {
  return (
    <>
      <Background />
      <HeroSection />
      <Project />
      <About />
      <Contact />
    </>
  );
};

export default Home;
