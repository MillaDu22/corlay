import React from 'react';
import './logo2.css';
import logoVideo from '../../assets/videos/LogoCorlay2.mp4';

const Logo2 = () => {
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

export default Logo2;