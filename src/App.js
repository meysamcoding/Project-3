import React from "react";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Gallery from "./components/pages/Gallery";
import Contact from "./components/pages/Contact";
import Learn from "./components/pages/Learn";
import FooterTabs from "./components/FooterTabs";


function App() {
  return ( 
    <Router>
      <div>   
      <NavTabs >
      <Route exact path = "/" component = {Home}/>
      <Route exact path = "/about" component = {About}/>
      <Route exact path = "/gallery" component = {Gallery}/> 
      <Route exact path = "/contact" component = {Contact}/>
      <Route exact path = "/Learn" component = {Learn}/>  
      </NavTabs> 
      </div>

      <div>
        <FooterTabs>
        <Route exact path = "/" component = {FooterTabs}/>
        </FooterTabs>
      </div>
    </Router>
   );
}  

export default App;