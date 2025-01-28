import React, { useState, useEffect } from "react";
import "./header.css";
import Slide1 from "../../assets/images/slider/Slide1.webp";
import Slide2 from "../../assets/images/slider/Slide2.webp";
import Slide3 from "../../assets/images/slider/Slide3.webp";
import Slide4 from "../../assets/images/slider/Slide4.webp";
import Slide5 from "../../assets/images/slider/Slide5.webp";


const images = [
        { src: Slide1, alt: "Slide 1 talus 1 grand cross de Corlay" },
        { src: Slide2, alt: "Slide 2 talus 2 grand cross de Corlay" },
        { src: Slide3, alt: "Slide 3 talus 3 grand cross de Corlay" },
        { src: Slide4, alt: "Slide 4 talus 4 grand cross de Corlay" },
        { src: Slide5, alt: "Slide 4 talus 5 grans cross de Corlay" },
    ];

    function Header() {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Change slide every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    return (
        <header className="container-hero">
        <div className="box-hero">
            {images.map((image, index) => (
            <img
                key={index}
                className={`slide ${index === currentIndex ? "active" : ""}`}
                src={image.src}
                alt={image.alt}
            />
            ))}
            <button className="chevron chevron-left" onClick={goToPrevious}>
            &lt;
            </button>
            <button className="chevron chevron-right" onClick={goToNext}>
            &gt;
            </button>
        </div>
        </header>
    );
}

export default Header;
