import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import './assoCard.css';

function AssoCard({ name, siren, activity, address, phone, icone }) {
    const cardRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    } else {
                        entry.target.classList.remove('visible');
                    }
                });
            },
            {
                threshold: 0.1, // Seuil de déclenchement de l'animation.
            }
        );

        const currentRef = cardRef.current;

        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    return (
        <div className="asso-card"  ref={cardRef}>
            <i className={`fa-solid ${icone}`} aria-hidden="true"></i>
            <h2 className="asso-title">{name}</h2>
            <p className="asso-siren">SIREN : {siren}</p>
            <p className="asso-activity">{activity}</p>
            <p className="asso-address">
                <i className="fa-solid fa-location-dot"></i> {address}
            </p>
            <p className="asso-phone">
                <i className="fa-solid fa-phone"></i> {phone}
            </p>
        </div>
    );
}

AssoCard.propTypes = {
    name: PropTypes.string.isRequired,
    icone: PropTypes.string.isRequired,
    siren: PropTypes.string.isRequired,
    activity: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
};

export default AssoCard;
