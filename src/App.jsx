import Hero from "./sections/Hero"
import ShowCaseSection from "./sections/ShowCaseSection"
import FeartureCards from "./sections/FeartureCards"
import LogoSection from "./sections/LogoSection"
import ExperienceSection from "./sections/ExperienceSection"
import NavBar from "./components/NavBar"
import TechStack from "./sections/TechStack"
import OpenSource from "./sections/OpenSource"
import Testimonials from "./sections/Testimonials"
import Contact from "./sections/Contact"
import Footer from "./sections/Footer"

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <ShowCaseSection />
      {/* <LogoSection /> */}
      <FeartureCards />
      <ExperienceSection/>
      <TechStack />
      <OpenSource />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}

export default App
