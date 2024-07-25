import "./App.css"

import AboutMe from "./Components/AboutMe/AboutMe.jsx"
import ProjectsDetails from "./Components/Projects/ProjectsDetails.jsx"
import Skills from "./Components/Skills/Skills.jsx"
import Contact from "./Components/Contact/Contact.jsx"
import Footer from "./Components/Footer/Footer.jsx"
import MyNavbar from "./Components/MyNavbar/MyNavbar.jsx"
import Profile from "./Components/Profile/Profile.jsx"

import whatsapp from "./assets/whatsapp.png"
import git from "./assets/git.png"
import linkedin from "./assets/linkedin.png"
import language from "./assets/language.png"
import arrow from "./assets/arrow.png"


function App() {

  return (
    <div className="app-container">
      <MyNavbar />
      <aside className="iconsConnect">
        <a href="https://api.whatsapp.com/send?phone=680294444">
          <ul>
            <img src={whatsapp} alt="whatsappIcon" />
          </ul>
        </a>
        <a href="https://github.com/patriiilago?tab=repositories">
          <ul>
            <img src={git} alt="gitIcon" />
          </ul>
        </a>
        <a href="https://www.linkedin.com/in/patri-lago/">
          <ul>
            <img src={linkedin} alt="linkedinIcon" />
          </ul>
        </a>
        <div className="verticalLine"></div>
      </aside>

      <div className='app'>
        <Profile />
        <AboutMe />
        <Skills />
        <ProjectsDetails />
        <Contact />
        <Footer />
      </div>

      <aside className="iconsRight">
        <a href="#profile">
          <ul>
            <img src={arrow} alt="arrowIcon" />
          </ul>
        </a>
        <a>
          <ul>
            <img src={language} alt="languageIcon" />
          </ul>
        </a>
        <div className="verticalLineRight"></div>
      </aside>

    </div>
  )
  //TODO: REVISAR PADDING DE LA PAGINA
  //TODO: EXPORTAR LAS DOS ASIDES A COMPONENTES
  //TODO: RESPONSIVE
  //TODO: NO TENER UN MAX DE PANTALLA, QUE SEA RESPONSIVE TOTAL
  //TODO: CSS
}

export default App
