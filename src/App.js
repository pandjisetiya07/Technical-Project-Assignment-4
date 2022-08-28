import {Routes , Route} from "react-router-dom";
import Home from "./components/Home/Home";
import Skill from "./components/Skill/Skill";
import Portofolio from "./components/Portofolio/Portofolio";
import About from "./components/About/About";

function App() {
  
  return (
    <div className='App'>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="skill" element={<Skill />} />
          <Route path="portofolio" element={<Portofolio />} />
          <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
