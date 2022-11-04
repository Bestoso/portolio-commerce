import { About } from "./components/About"
import { Featured } from "./components/Featured"
import { Footer } from "./components/Footer"
import { Gallery } from "./components/Gallery"
import { Header } from "./components/Header"
import { NavBar } from "./components/NavBar"

function App() {

  return (
    <>
      <div className="main-container" id="main-container">
        <NavBar />
        <Header />
        <Featured />
        <About />
        <Gallery />
        <Footer />
      </div>
    </>
  )
}

export default App
