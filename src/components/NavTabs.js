
import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

export default class Navbar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  }
};

    return (
      <nav className="nav" id="navbar">
        <div className="nav-content">
          
          <ul className="nav-items">
            <li className="nav-item">
              <Link activeClass="active" className= {location.pathname === "/" ? "nav-link active" : "nav-link"}
                to="Home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link  activeClass="active" className= {location.pathname === "/" ? "nav-link active" : "nav-link"}
                to="About"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link activeClass="active" className= {location.pathname === "/" ? "nav-link active" : "nav-link"}            
                to="Gallery"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>
                Gallery
              </Link>
            </li>

            <li className="nav-item">
              <Link activeClass="active" className= {location.pathname === "/" ? "nav-link active" : "nav-link"}
                to="Contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>
                Contact
              </Link>
            </li>

            <li className="nav-item">
              <Link  activeClass="active" className= {location.pathname === "/" ? "nav-link active" : "nav-link"}
                to="Learn"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>
                Learn
              </Link>
            </li>
          </ul>
        </div>
      </nav> 
    );
  
