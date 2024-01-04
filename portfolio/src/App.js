import { useState } from "react";
import About from "./Components/About";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import SocialLinks from "./Components/SocialLinks";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import SideLinks from "./Components/SideLinks";

function App() {
  const [nav, setNav] = useState(false);
  return (
    <div className=" bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-indigo-200 via-slate-600 to-indigo-200">
      <NavBar nav = {nav} setNav = {setNav}/>
      <Home nav = {nav}/>
      <About />
      <Projects />
      <Skills />
      <Contact />
      <SideLinks />
      <SocialLinks />
      <Footer />
    </div>
  );
}

export default App;
