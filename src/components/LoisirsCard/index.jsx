import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import './loisirsCard.css';

function LoisirsCard({ name, activity, address, phone, icone, website, position }) {
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
        // Vérif visibility //
        checkVisibility();

        // Ajout gestionnaire pour le scroll //
        const handleScroll = () => checkVisibility();
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div
            ref={cardRef}
            className={`loisir-card ${isVisible ? 'visible' : ''} ${position === 'left' ? 'from-left' : 'from-right'}`}
        >
            <i className={`fa-solid ${icone}`} aria-hidden="true"></i>
            <h2 className="loisir-title">{name}</h2>
            <p className="loisir-activity">{activity}</p>
            <p className="loisir-address">
                <i className="fa-solid fa-location-dot"></i> {address}
            </p>
            <p className="loisir-phone">
                <i className="fa-solid fa-phone"></i> {phone}
            </p>
            <p className="website">
                <i className="fa-solid fa-globe"></i>
                <a className="a-loisir" href={website} target="_blank" rel="noopener noreferrer">Site Web</a>
            </p>
        </div>
    );
}

LoisirsCard.propTypes = {
    icone: PropTypes.string.isRequired,
    activity: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    website: PropTypes.string.isRequired,
    position: PropTypes.oneOf(['left', 'right']).isRequired, // left or right for animation direction //
};

export default LoisirsCard;

