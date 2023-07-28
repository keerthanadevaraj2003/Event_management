import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import About from './About';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import './Event.css';
import AdminNavbar from './AdminNavbar';
function AdminHome() {
    // Create state variables for the index and image array
    const [index, setIndex] = useState(0);
    const images = ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFFUEZMfSY5hfiKjnNbx1cARgSVYC06HQIUg&usqp=CAU','https://i.pinimg.com/originals/1b/b3/1f/1bb31f9700291da319ecf5227d4efbc9.jpg','https://ribordycontemporary.com/wp-content/uploads/2022/02/34.jpg','https://kalapeet.com/wp-content/uploads/2021/04/corporate-eents.jpg'];
    
    
    useEffect(() => {
        const intervalId = setInterval(() => {
            setIndex(prevIndex => (prevIndex + 1) % images.length);
        }, 2000);

        return () => clearInterval(intervalId);
    }, []);
    
    // Render the current image
    return (
        <>
         <><><AdminNavbar />
        <div style={{ position: "relative" }}></div><img src={images[index]} alt='Slide' style={{ width: '1800px', height: '700px', top: '50%', position: 'top 120px' }} /><div
          style={{
            position: 'absolute',
            top: '60%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            background: 'rgb(0, 0, 0)',
            background: 'rgba(0, 0, 0, 0.5)',
            padding: '10px',
            borderRadius: '4px',
            width: '70%',
            color: 'white'
          }}
        >
          <center> <h1>
            "Unforgettable Moments, Flawlessly Orchestrated!"</h1>
            {/* <Link to="/org"><button className='product-page__add-to-cart-button'>REGISTER</button></Link> */}
          </center>

        </div></>
        </>
        
        <div id="about">
        <About />
        </div>
        <div id="footer">
        <Footer/>
        </div>
        </>
        );
}

export default AdminHome;