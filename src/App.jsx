import "./App.css"

import AboutMe from "./Components/AboutMe/AboutMe.jsx"
import ProjectsDetails from "./Components/Projects/ProjectsDetails.jsx"
import Skills from "./Components/Skills/Skills.jsx"
import Contact from "./Components/Contact/Contact.jsx"
import Footer from "./Components/Footer/Footer.jsx"
import MyNavbar from "./Components/MyNavbar/MyNavbar.jsx"
import Profile from "./Components/Profile/Profile.jsx"
import IconsRight from "./Components/IconsRight/IconsRight.jsx"
import IconsConnectLeft from "./Components/IconsConnectLeft/IconsConnectLeft.jsx"
import './Components/Translations/i18n.js'



function App() {



  return (

    <div className='app'>
      <MyNavbar />
      <IconsConnectLeft />
      <Profile />
      <AboutMe />
      <Skills />
      <ProjectsDetails />
      <Contact />
      <Footer />
      <IconsRight />
    </div>

  )

}

export default App
