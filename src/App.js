// import logo from './logo.svg';
import './App.css';
import Aboutus from './components/layouts/Aboutus';
import Contactus from './components/layouts/Contactus';
import {  BrowserRouter,Route , Routes} from "react-router-dom";
import Home from './components/layouts/Home';
import Navbartest from './components/layouts/Navbartest';
import Footer from "./components/layouts/Footer"
import Students from './components/layouts/Students';
import Home1 from './components/layouts/Home1';
import Activity from './components/layouts/Activity';
import Slider from './components/layouts/Slider';
function App() {
   
  return (
 
  <>
    <BrowserRouter> 
  <Routes>
  <Route exact path="/" element={<Home />}></Route>
    <Route path="/aboutus" element={<Aboutus/> } exact ></Route>
    <Route path="/contactus" element={<Contactus/>} exact >  </Route>
    <Route path="/navbartest" element={<Navbartest/>} exact >  </Route>
    <Route path="/footer" element={<Footer/>} exact >  </Route>
    <Route path="/students" element={<Students/>} exact >  </Route>
    <Route path="/home1" element={<Home1/>} exact >  </Route>
    <Route path="/Activity" element={<Activity/>} exact >  </Route>
    <Route path="/Slider" element={<Slider/>} exact >  </Route>

</Routes>
</BrowserRouter>
  </>
  );
}

export default App;
