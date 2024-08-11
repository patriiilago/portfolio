import "./App.css"
import './Components/Translations/i18n.js'

import MyNavbar from "./Components/MyNavbar/MyNavbar.jsx"
import Profile from "./Components/Profile/Profile.jsx"
import ProfessionalSummary from "./Components/ProfessionalSummary/ProfessionalSummary.jsx"
import AboutMe from "./Components/AboutMe/AboutMe.jsx"
import Skills from "./Components/Skills/Skills.jsx"
import ProjectsDetails from "./Components/Projects/ProjectsDetails.jsx"
import Contact from "./Components/Contact/Contact.jsx"
import Footer from "./Components/Footer/Footer.jsx"
import LimitSection from "./Components/LimitSection/LimitSection.jsx"


function App() {

  return (

    <div className='app'>
      <MyNavbar />
      <Profile />
      <ProfessionalSummary />
      <AboutMe />
      <LimitSection />
      <Skills />
      <LimitSection />
      <ProjectsDetails />
      <Contact />
      <Footer />
    </div>

  )

}

export default App
