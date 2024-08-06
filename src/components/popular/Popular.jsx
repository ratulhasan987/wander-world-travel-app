import React from "react";
import "./popular.css";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { IoPeople } from "react-icons/io5";

import img from '../../Assets/images/bali.jpg'
import img2 from '../../Assets/images/japan.jpg'
import img3 from '../../Assets/images/usa.jpg'
import img4 from '../../Assets/images/paris.jpg'

const Data = [
  {
    id:1,
    imgSrc:img,
    destTitle:'Bali',
    location:'Indonesia',
  },
  {
    id:1,
    imgSrc:img2,
    destTitle:'Tokyo',
    location:'Japan',
  },  {
    id:3,
    imgSrc:img3,
    destTitle:'London',
    location:'USA',
  },
  {
    id:4,
    imgSrc:img4,
    destTitle:'Paris',
    location:'Farance',
  }
]

const Popular = () => {
  return (
    <section className="popular section container">
      <div className="secContainer">

        <div className="secHeader flex">
          <div className="textDiv">
            <h2 className="secTitle">Explore Our Destinations</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem,
              veniam.
            </p>
          </div>
          <div className="iconsDiv flex">
            <FaArrowLeft className="icon leftIcon" />
            <FaArrowRight className="icon rightIcon" />
          </div>
        </div>

        <div className="mainContent grid">
         {
          Data.map(({id,imgSrc,destTitle,location})=>{
            return(
              <div className="singleDestination">
              <div className="destImg">
              
              <div className="test1">
              {/* <FaHeart className="iconH " /> */}
              <img src={imgSrc}  alt="imgs" />
              </div>
             
           
                
                <div className="overlayInfo flex">
                  <div className="divLeft">
                  <h3>{destTitle}</h3>
                  <p>{location}</p>
                  <div className="starIconsDiv flex">
                    <FaStar className="icon " />
                    <FaStar className="icon " />
                    <FaStar className="icon " />
                    <FaStar className="icon " />
                    <FaStar className="icon " />
                  </div>
                  </div>
                  <div className="divRight">
                  <h3>$1200</h3>
                  <p><IoPeople className="people" />
                  10 people</p>
                  </div>
                  
                </div>
              </div>
            </div>
            )
          })
         }
        </div>
       
        {/* <div className="mainContent grid">
          <div className="singleDestination">
            <div className="destImg">
              <img src={img2} alt="imgs" />
              <div className="overlayInfo flex">
                <div className="divLeft">
                <h3>Tokyo</h3>
                <p>Japan</p>
                <div className="starIconsDiv flex">
                  <FaStar className="icon " />
                  <FaStar className="icon " />
                  <FaStar className="icon " />
                  <FaStar className="icon " />
                  <FaStar className="icon " />
                </div>
                </div>
                <div className="divRight">
                <h3>$1300</h3>
                <p><IoPeople className="people" />
                15 people</p>
                </div>
                
              </div>
            </div>
          </div>
        </div>
        <div className="mainContent grid">
          <div className="singleDestination">
            <div className="destImg">
              <img src={img3} alt="imgs" />
              <div className="overlayInfo flex">
                <div className="divLeft">
                <h3>London</h3>
                <p>USA</p>
                <div className="starIconsDiv flex">
                  <FaStar className="icon " />
                  <FaStar className="icon " />
                  <FaStar className="icon " />
                  <FaStar className="icon " />
                  <FaStar className="icon " />
                </div>
                </div>
                <div className="divRight">
                <h3>$1500</h3>
                <p><IoPeople className="people" />
                8 people</p>
                </div>
                
              </div>
            </div>
          </div>
        </div>
        <div className="mainContent grid">
          <div className="singleDestination">
            <div className="destImg">
              <img src={img4} alt="imgs" />
              <div className="overlayInfo flex">
                <div className="divLeft">
                <h3>Paris</h3>
                <p>Farance</p>
                <div className="starIconsDiv flex">
                  <FaStar className="icon " />
                  <FaStar className="icon " />
                  <FaStar className="icon " />
                  <FaStar className="icon " />
                  <FaStar className="icon " />
                </div>
                </div>
                <div className="divRight">
                <h3>$1800</h3>
                <p><IoPeople className="people" />
                6 people</p>
                </div>
                
              </div>
            </div>
          </div>
        </div> */}
        
      </div>
    </section>
  );
};

export default Popular;
