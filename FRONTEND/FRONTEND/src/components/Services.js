import React from 'react';
import './Services.css';
import { useState } from 'react';
import { Link } from "react-router-dom";
// import Navbar from './Navbar';
const images = [
    {
      src: 'https://trueso.in/wp-content/uploads/2018/12/antique-jewellery-2.jpg',
      text: 'PHOTOGRAPHY'
    },
    {
      src: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/fd17b420-b388-4c8a-aaaa-e0a98ddf175f/dunk-high-retro-mens-shoe-dTVTCk.png',
      text: 'MEHENDI ARTIST',
    },
    {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyM5ahXqYgRbCcFH1fr10JBuLH2yFReTV7zw&usqp=CAU',
      text: 'MAKEUP ARTIST',
    },
    {
      src: 'https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/21857350/2023/2/7/80faeb4b-e8fe-494a-932b-6105ed61e71f1675751032671eCraftIndiaCopper-TonedWhiteTexturedContemporaryWallClock1.jpg',
      text: 'DECORATORS',
    },
    {
      src: 'https://m.media-amazon.com/images/I/71jKhQsY8XL.jpg',
      text: 'VIDEOGRAPHER',
    },
    {
      src: 'https://5.imimg.com/data5/SELLER/Default/2022/4/JD/IA/BI/20937698/ktc-v-08-kids-wooden-toys.jpg',
      text: 'WEDDING CARDS',
    },
    {
      src: 'https://c4.wallpaperflare.com/wallpaper/919/843/709/tesla-black-coupe-wallpaper-preview.jpg',
      text: 'VINTAGE TESLA',
    },
    {
      src: 'https://static.toiimg.com/thumb/imgsize-23456,msid-82160523,width-600,resizemode-4/82160523.jpg',
      text: 'JEWELLERY',
    }
  ];
  const Antique = () => {
   
  
    const handleAddToCart = () => {
      // Logic to add the product to the cart
    };
  return (
    <div>
      {/* <Navbar/> */}
      <div className="departments">
        <div className="departmentcontainer">
          {images.map((image, index) => (
            <div key={index} className="grid-item">
              <img src={image.src} width={'200px'} height={'200px'}></img>
              <h3>{image.text}</h3>
              {image.auction && (
                <div>
                  <h3>{image.auction}</h3>
                </div>
              )}
              <br />
              
              <button className="product-page__add-to-cart-button" onClick={handleAddToCart}>
                VIEW DETAILS
              </button>
            </div>
          ))}
        </div>
      </div>
      </div>
      );
};

export default Antique;