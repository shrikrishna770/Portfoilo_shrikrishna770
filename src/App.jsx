import Footer from "./components/Footer.jsx"
import Navbar from "./components/Navbar.jsx"
import Hero from "./components/Hero.jsx"
import FeaturedProjects from "./components/FeaturedProjects.jsx"
import About from "./components/About.jsx"
import Aboutpage from "./page/Aboutpage.jsx"

function App() {
  return <>
    <Navbar />
    <hr className="w-full text-gray-400"/>
    <Hero/>
    <hr className="w-full text-gray-400"/>
    <FeaturedProjects/>
    <hr className="w-full text-gray-400"/>
    <About/>
    <hr className="w-full text-gray-400"/>
    <Footer/>
    {/* <Aboutpage/> */}
  </>
}

export default App
