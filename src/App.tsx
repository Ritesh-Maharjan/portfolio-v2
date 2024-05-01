import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import Home from "./page/Home";
import ProjectDetail from "./page/ProjectDetail";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="bg-blue-400 dark:bg-slate-900 text-slate-900 dark:text-darkText relative ">
      <BrowserRouter basename="/">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
