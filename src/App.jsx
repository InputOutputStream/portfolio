import Hero from "./sections/Hero"
import ShowCaseSection from "./sections/ShowCaseSection"
import FeartureCards from "./sections/FeartureCards"
import LogoSection from "./sections/LogoSection"
import ExperienceSection from "./sections/ExperienceSection"
import NavBar from "./components/NavBar"
import TechStack from "./sections/TechStack"

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
    </>
  )
}

export default App
