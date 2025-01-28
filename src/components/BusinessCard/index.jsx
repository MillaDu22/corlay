import React, { useEffect, useState, useRef } from 'react';
import './businessCard.css';

function BusinessCard({ title, address, additionalInfo, phone, email, website, img, position }) {
    const [isVisible, setIsVisible] = useState(false);
    const cardRef = useRef();

    const checkVisibility = () => {
        if (cardRef.current) {
            const rect = cardRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;
            const isInViewport = rect.top <= windowHeight && rect.bottom >= 0;
            setIsVisible(isInViewport);
        }
    };

    useEffect(() => {
        checkVisibility();  // Check visibility when component is mounted //
        const handleScroll = () => checkVisibility();
        window.addEventListener('scroll', handleScroll);
        
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div
            ref={cardRef}
            className={`one-business ${isVisible ? 'visible' : ''} ${position === 'left' ? 'from-left' : 'from-right'}`}
        >
            <i className={`img fa-solid ${img}`} aria-hidden="true"></i>
            <span className="box-text-business">
                <h2 className="title2">{title}</h2>
                {address && <p className="address"><i className="fa-solid fa-location-dot"></i> {address}</p>}
                {additionalInfo && <p className="additional-info">{additionalInfo}</p>}
                {phone && <p className="phone"><i className="fa-solid fa-phone"></i> {phone}</p>}
                {email && <p className="email"><i className="fa-solid fa-envelope"></i><a className="a-business" href={`mailto:${email}`}>{email}</a></p>}
                {website && <p className="website"><i className="fas fa-globe"></i><a className="a-business" href={website} target="_blank" rel="noopener noreferrer">Site Web</a></p>}
            </span>
        </div>
    );
}

export default BusinessCard;

