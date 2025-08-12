import Hero from "./sections/Hero"
import ShowCaseSection from "./sections/ShowCaseSection"
import FeartureCards from "./sections/FeartureCards"
import LogoSection from "./sections/LogoSection"

import NavBar from "./components/NavBar"

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <ShowCaseSection />
      <LogoSection />
      <FeartureCards />
    </>
  )
}

export default App
