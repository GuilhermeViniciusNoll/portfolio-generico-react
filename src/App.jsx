
import { AboutMeSection } from "./components/AboutMeSection/index.jsx"
import { BannerSection } from "./components/BannerSection/index.jsx"
import { Footer } from "./components/Footer/index.jsx"
import { Header } from "./components/Header/index.jsx"
import { ProjectSection } from "./components/ProjectsSection/index.jsx"
import { TechSection } from "./components/TechSection/index.jsx"
import "./styles/globalStyle.css"

function App() {

  return (
    <>
      <Header />
      <BannerSection />
      <AboutMeSection />
      <TechSection />
      <ProjectSection />
      <Footer />
    </>
  )
}

export default App
