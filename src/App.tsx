import "./App.css";
import Header from "./component/Header";
import HeroSection from "./component/HeroSection";

function App() {
  return (
    <div className="bg-lightBackground dark:bg-darkBackground  text-darkText">
      <Header />
      <HeroSection />
      <button className="bg-accentColor opacity-85 text-white rounded-xl shadow-lg p-4">
        View Project
      </button>
    </div>
  );
}

export default App;
