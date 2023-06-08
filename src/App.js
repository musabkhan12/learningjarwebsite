// import logo from './logo.svg';
import './App.css';
import Aboutus from './components/layouts/Aboutus';
import Contactus from './components/layouts/Contactus';
import {  BrowserRouter,Route , Routes} from "react-router-dom";
import Home from './components/layouts/Home';
import Navbartest from './components/layouts/Navbartest';
import Footer from "./components/layouts/Footer"
import Students from './components/layouts/Students';

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
</Routes>
</BrowserRouter>
  </>
  );
}

export default App;
