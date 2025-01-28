import { Helmet } from 'react-helmet-async';
import Municipalite from '../../components/Municipalite/index';
import BulletinsSlider from '../../components/BulletinsSlider/index';
import Demarches from '../../components/Demarches/index';
import CadaUrba from '../../components/CadaUrba/index';
import './about.css';

function About() {

    return(
        <div className="body-about">
            <Helmet>
                {/* Meta Tags */}
                <title>Municipalité de Corlay | Élus, Services et Bulletins Officiels</title>
                <meta name="description" content="Découvrez la municipalité de Corlay : les élus, les agents municipaux et les informations pratiques sur la mairie. Consultez les bulletins municipaux pour rester informé de la vie locale en Côtes d'Armor, Bretagne." />
                <link rel="canonical" href="https://commune-de-corlay.vercel.app/#/about" />
                <meta name="keywords" content="Mairie Corlay, municipalité Corlay, élus Corlay, agents municipaux Corlay, Olivier Allain maire, bulletins municipaux Corlay, mairie 22320, Côtes d'Armor mairie, Bretagne municipalité, vie locale Corlay, informations mairie Corlay, mairie 22, mairie Bretagne, services municipaux Corlay, élus locaux Corlay, vie politique Corlay, mairie de proximité, bulletins officiels Corlay, commune Corlay" />

                {/* Open Graph tags for Social Media sharing */}
                <meta property="og:title" content="Municipalité de Corlay" />
                <meta property="og:description" content="Découvrez la municipalité de Corlay : informations pratiques sur la mairie, les élus et les agents municipaux. Accédez également aux derniers bulletins municipaux pour rester informé des actualités locales." />
                <meta property="og:image" content="https://commune-de-corlay.vercel.app/about-page.jpg" />
                <meta property="og:url" content="https://commune-de-corlay.vercel.app/#/about" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Commune de Corlay" />
                <meta property="fb:app_id" content="100063946335792" />

                {/* Twitter Card tags for sharing on Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Municipalité de Corlay" />
                <meta name="twitter:description" content="Renseignez-vous sur la municipalité de Corlay : les élus, les agents municipaux, et accédez aux bulletins officiels pour suivre les actualités locales." />
                <meta name="twitter:image" content="https://commune-de-corlay.vercel.app/about-page.jpg" />
            </Helmet>
            <div className="typewriter">
                <h1 className="title1">
                <i className="fas fa-landmark"></i> La municipalité
                </h1>
            </div>
            <Municipalite />
            <BulletinsSlider />
            <Demarches />
            <CadaUrba />
        </div>
    );
}

export default About;
