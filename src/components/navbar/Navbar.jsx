import React, {useState} from "react";
import "./navbar.css";
import { MdTravelExplore } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";


const Navbar = () => {
//code for show navbar
  const [active, setActive] = useState('navBar')
  const showNav = () =>{
    setActive('navBar activeNavbar')
  }
  const removeNav = () =>{
    setActive('navBar')
  }

  return (
    <section className="navBarSection">
      <div className="topHeader flex">
      <div className="logoDiv">
          <a href="#" className="logo">
            <h1 className="flex">
              <MdTravelExplore className="icon" />
              Wander
            </h1>
          </a>
        </div>
        <div className="headerBtns flex">
              <button className="btn loginBtn">
                <a href="#">Login</a>
              </button>
              <button className="btn signUpBtn">
                <a href="#">Sign Up</a>
              </button>
        </div>
      </div>

      <div className="header">
        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <a href="#" className="navLink">
                Home
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Popular
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                About
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Resources
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Contact
              </a>
            </li>
          </ul>
          
         
          
          <div onClick={removeNav} className="closeNavbar">
            <AiFillCloseCircle className="icon"/>
            </div>
        </div>
        <div onClick={showNav} className="toggoleNavbar">
            <TbGridDots className="icon"/>
        </div>

      </div>
    </section>
  );
};

export default Navbar;
