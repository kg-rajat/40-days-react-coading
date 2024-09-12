import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import About from "./Components/About"
import Contact from "./Components/Contact"
import Gurugao from "./Components/Gurugao"
import Noida from "./Components/Noida"
import Delhi from "./Components/Delhi"
import Home from "./Components/Home"
import Nav from "./Components/Nav"
import Notf from "./Components/Notf"
import Service from "./Components/Service"
import Visit from "./Components/Visit"

export default function App() {
  return (
    <div>
      <Router>
        <Nav/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}>
            <Route path="delhi" elemeent={<Delhi/>}/>
            <Route path="gurugao" elemeent={<Gurugao/>}/>
            <Route path="noida" elemeent={<Noida/>}/>
            
            </Route>
          <Route path="/visit" element={<Visit/>}/>
          <Route path="/service" element={<Service/>}/>
          <Route path="*" element={<Notf/>}/>

        </Routes>
      </Router>
    </div>
  )
}
