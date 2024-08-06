import React from 'react';
import './app.css'
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Popular from './components/popular/Popular';
import Footer from './components/footer/Footer';


const App = () => {
    return (
        <>
        
            <Navbar/>
            <Home/>
            <Popular/>
            {/* <Footer/> */}
        </>
    );
};

export default App;