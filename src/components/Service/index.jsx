import React, { useEffect, useRef } from 'react';
import './service.css';

function Service({ title, address, additionalInfo, phone, email, website, cover }) {
    const serviceRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('expand');
                    } else {
                        entry.target.classList.remove('expand');
                    }
                });
            },
            {
                threshold: 0.10, // Ajustez le seuil si nécessaire.
            }
        );

        const currentRef = serviceRef.current;

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
        <div className="one-service" ref={serviceRef}>
            <span className="box-text-services">
                <h2 className="title2">{title}</h2>
                {address && <p className="address"><i className="fa-solid fa-location-dot"></i> {address}</p>}
                {additionalInfo && <p className="additional-info">{additionalInfo}</p>}
                {phone && <p className="phone"><i className="fa-solid fa-phone"></i> {phone}</p>}
                {email && <p className="email"><a className="a-service" href={`mailto:${email}`}><i className="fa-solid fa-envelope"></i>{email}</a></p>}
                {website && <p className="website"><a className="a-service" href={website} target="_blank" rel="noopener noreferrer"><i className="fas fa-globe"></i>Site Web</a></p>}
            </span>
            {cover && <img className="service-image" src={cover} alt={`${title}`} />}
        </div>
    );
}

export default Service;
