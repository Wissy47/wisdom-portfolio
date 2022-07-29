import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Service from "./components/service/Service";
import Projects from "./components/projects/Projects";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import "./App.scss";
import { useState } from "react";
import Menu from "./components/menu/Menu";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);


  return (
    <div className="App">
      <Topbar
        displayMode={darkMode}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        setDisplayMode={setDarkMode}
      />
      <Menu
        displayMode={darkMode}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
      <div className="sections">
        <Intro displayMode={darkMode} />
        <Projects displayMode={darkMode} />
        <Service displayMode={darkMode} />
        <Testimonials displayMode={darkMode} />
        <Contact displayMode={darkMode} />
      </div>
    </div>
  );
}

export default App;
