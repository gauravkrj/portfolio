import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";

import Navbar from "./components/navbar/Navbar";
import Themes from "./components/themes/Themes";
import Portfolio from "./pages/portfolio/Portfolio";
import Resume from "./pages/resume/Resume"
import About from "./pages/about/About"
import Contact from "./pages/contact/Contact";
function App() {
  return (
    <>


    <BrowserRouter>
      <Navbar />
      <Themes />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
     
    </BrowserRouter>
    
</>
  );
}

export default App;
