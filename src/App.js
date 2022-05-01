import React from 'react';
import "./components/Styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Homepage from './components/Homepage';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Popup1 from './components/Popups/Popup1';
import Popup2 from './components/Popups/Popup2';
import Popup3 from './components/Popups/Popup3';
import Popup4 from './components/Popups/Popup4';
import Popup5 from './components/Popups/Popup5';
import Popup6 from './components/Popups/Popup6';
//import Header from './components/Header';


function App() {
    return (<div>
  <Router>
                <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/About" element={<About />} />
                <Route path="/Portfolio" element={<Portfolio />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/Popup1" element={<Popup1 />} />
                <Route path="/Popup2" element={<Popup2 />} />
                <Route path="/Popup3" element={<Popup3 />} />
                <Route path="/Popup4" element={<Popup4 />} />
                <Route path="/Popup5" element={<Popup5 />} />
                <Route path="/Popup6" element={<Popup6 />} />
                
            </Routes>
            </Router>
          
          
    </div>  );
}

export default App;

 /*
<Router>
<Header />
<Routes>
                <Route path="/" element={<Fullpage />} />
               
               </Routes>
           
        </Router>       
   
        <Footer />*/


    /*    
const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", () =>{
    hideSection();
    toggleNavbar();
});
function hideSection(){
    document.querySelector("section.active").classList.toggle("fade-out");
}

function toggleNavbar(){
    document.querySelectorAll(".header").classList.toggle("active");
}
*/