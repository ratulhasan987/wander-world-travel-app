import React from 'react';
import './home.css'
import { FaSearch } from "react-icons/fa";


const Home = () => {
    return (
       <section className='home'>
        <div className="secContainer container">
            <div className="homeText">
               <h1 className="title">
                Discover the world's wonders with wander world.
               </h1>
               <p className="subTitle">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate, praesentium.
               </p>

            </div>

            <div className="homeCard grid">

                <div className="locationDiv">
                    <label htmlFor="location">Location</label>
                    <input type="text" placeholder='Where Your Destination' />
                </div>
                <div className="checkInDiv">
                    <label htmlFor="checkin">Check In</label>
                    <input type="text" placeholder='mm/dd/yyyy' />
                </div>
                <div className="checkOutDiv">
                    <label htmlFor="checkout">Check Out</label>
                    <input type="text" placeholder='mm/dd/yyyy' />
                </div>
              
                <div className="guestDiv">
                    <label htmlFor="guest">Guests</label>
                    <input type="text" placeholder='Add Guest' />
                </div>
                <div>
                    <button className='searchbtn'>
                    <FaSearch className='icon'/>
                     {/* Search */}
                    </button>
                </div>

            </div>

        </div>

       </section>
    );
};

export default Home;