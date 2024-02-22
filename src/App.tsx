import Header from "./component/Header";
import HeroSection from "./component/HeroSection";
import Project from "./component/Project";

function App() {
  return (
    <div className="bg-lightBackground dark:bg-darkBackground  text-darkText relative">
      <Header />
      <HeroSection />
      <Project />
    </div>
  );
}

export default App;
