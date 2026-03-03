import Contact from "./Pages/Contact";
import Services from "./Pages/Services";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar";
import {Routes,Route} from "react-router-dom"

const App= () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="/services" element={<Services/>}></Route>
    </Routes>
    </>
      )
}

export default App
