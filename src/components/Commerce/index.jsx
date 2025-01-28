import './commerce.css';
import React, { useEffect } from 'react';

function Commerce({ type, name, address, phone, cover }) {
    useEffect(() => {
        const handleScroll = () => {
            const shops = document.querySelectorAll('.one-shop');
            shops.forEach((shop) => {
                const rect = shop.getBoundingClientRect();
                if (rect.top < window.innerHeight - 150 && rect.bottom > 150) {
                    shop.classList.add('show');
                } else {
                    shop.classList.remove('show');
                }
            });
        };

        handleScroll();

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <div className="one-shop">
            <span className="box-info-shop">
                <h2 className="title2">{type}</h2>
                <h3 className="name">{name}</h3>
                <p className="adress">{address}</p>
                {phone && <p className="adress">{phone}</p>}
            </span>
            {cover && <img className="shop-image" src={cover} alt={`${type}`} />}
        </div>
    );
}

export default Commerce;
