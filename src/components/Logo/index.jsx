import React from 'react';
import './logo.css';
import logoVideo from '../../assets/videos/LogoCorlay.mp4';

const Logo = () => {
    return (
        <div className="logo-container">
            <video 
                className="logo-video" 
                src={logoVideo} 
                autoPlay 
                muted 
            >
                Votre navigateur ne supporte pas les vidéos HTML5.
            </video>
        </div>
    );
};

export default Logo;