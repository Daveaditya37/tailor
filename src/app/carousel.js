// components/CustomCarousel.js
"use client"
import React, { useState } from 'react';
import styles from './CustomCarousel.module.css';
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";

const CustomCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0); // Start from the first item
  
    const carouselItems = [
      {
        text: "Brook presents your services with flexible, convenient and cdpose layouts. You can select your favorite layouts & elements for cular ts with unlimited ustomization possibilities. Pixel-perfect replica;ition of thei designers ijtls intended csents your se.",
        imageSrc: "https://preview.colorlib.com/theme/tailor/assets/img/icon/testimonial.png",
        name: "Robart Brown",
        subText: "Creative designer at Colorlib"
      },
      {
        text: "Brook presents your services with flexible, convenient and cdpose layouts. You can select your favorite layouts & elements for cular ts with unlimited ustomization possibilities. Pixel-perfect replica;ition of thei designers ijtls intended csents your se.",
        imageSrc: "https://preview.colorlib.com/theme/tailor/assets/img/icon/testimonial.png",
        name: "Robart Brown",
        subText: "Creative designer at Colorlib"
      },
      {
        text: "Brook presents your services with flexible, convenient and cdpose layouts. You can select your favorite layouts & elements for cular ts with unlimited ustomization possibilities. Pixel-perfect replica;ition of thei designers ijtls intended csents your se.",
        imageSrc: "https://preview.colorlib.com/theme/tailor/assets/img/icon/testimonial.png",
        name: "Robart Brown",
        subText: "Creative designer at Colorlib"
      },
      {
        text: "Brook presents your services with flexible, convenient and cdpose layouts. You can select your favorite layouts & elements for cular ts with unlimited ustomization possibilities. Pixel-perfect replica;ition of thei designers ijtls intended csents your se.",
        imageSrc: "https://preview.colorlib.com/theme/tailor/assets/img/icon/testimonial.png",
        name: "Robart Brown",
        subText: "Creative designer at Colorlib"
      },
      {
        text: "Brook presents your services with flexible, convenient and cdpose layouts. You can select your favorite layouts & elements for cular ts with unlimited ustomization possibilities. Pixel-perfect replica;ition of thei designers ijtls intended csents your se.",
        imageSrc: "https://preview.colorlib.com/theme/tailor/assets/img/icon/testimonial.png",
        name: "Robart Brown",
        subText: "Creative designer at Colorlib"
      },
      {
        text: "Brook presents your services with flexible, convenient and cdpose layouts. You can select your favorite layouts & elements for cular ts with unlimited ustomization possibilities. Pixel-perfect replica;ition of thei designers ijtls intended csents your se.",
        imageSrc: "https://preview.colorlib.com/theme/tailor/assets/img/icon/testimonial.png",
        name: "Robart Brown",
        subText: "Creative designer at Colorlib"
      },
      {
        text: "Brook presents your services with flexible, convenient and cdpose layouts. You can select your favorite layouts & elements for cular ts with unlimited ustomization possibilities. Pixel-perfect replica;ition of thei designers ijtls intended csents your se.",
        imageSrc: "https://preview.colorlib.com/theme/tailor/assets/img/icon/testimonial.png",
        name: "Robart Brown",
        subText: "Creative designer at Colorlib"
      }
    ];
  
    const goToPrevious = () => {
      setCurrentIndex(currentIndex === 0 ? carouselItems.length - 1 : currentIndex - 1);
    };
  
    const goToNext = () => {
      setCurrentIndex(currentIndex === carouselItems.length - 1 ? 0 : currentIndex + 1);
    };
  
    return (
      <div className={styles.carouselContainer}>
        <img className={styles.img8} src="https://preview.colorlib.com/theme/tailor/assets/img/icon/quotes-sign.png.webp"/>
        <p className={styles.paragraph}>{carouselItems[currentIndex].text}</p>
        <div className={styles.carouselItem}>
          <div className={styles.imageContainer}>
            <img 
              src={carouselItems[currentIndex].imageSrc} 
              alt="Profile" 
              className={styles.profileImage} 
            />
          </div>
          <div className={styles.textContainer}>
            <h2 className={styles.name}>{carouselItems[currentIndex].name}</h2>
            <p className={styles.subText}>{carouselItems[currentIndex].subText}</p>
          </div>
        </div>
        <div className={styles.navigation}>
          {/* Previous Button */}
          <button onClick={goToPrevious} className={styles.navButton} id={styles.nav}><GrLinkPrevious /></button>
  
          {/* Dynamic Page Number Buttons */}
          <button 
            onClick={() => setCurrentIndex(currentIndex === 0 ? 0 : currentIndex - 1)} 
            id={styles.btn} className={`${styles.pageButton} ${currentIndex === 0 ? styles.active : ''}`}
          >
            {currentIndex + 1}
          </button>
          <button 
            onClick={() => setCurrentIndex(currentIndex + 1)} 
            id={styles.btn1} className={`${styles.pageButton} ${currentIndex === 1 ? styles.active : ''}`}
          >
            {currentIndex + 2}
          </button>
          
          {/* Next Button */}
          <button onClick={goToNext} className={styles.navButton} id={styles.nav1}><GrLinkNext /></button>
        </div>
        <hr/>
      </div>
    );
  };
  
  export default CustomCarousel;