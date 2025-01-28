import { Helmet } from 'react-helmet-async';
import MedicalSection from '../../components/MedicalSection/index';
import './medical.css';

function Medical() {
    return (
        <div className="body-medical">
            <Helmet>
                <title>Services Médicaux à Corlay - Médecins, Infirmiers, Dentistes et Plus</title>
                <meta name="description" content="Retrouvez tous les services médicaux à Corlay, y compris les médecins généralistes, les infirmiers, les kinésithérapeutes, et les services d'urgences. Découvrez les coordonnées des professionnels de santé locaux." />
                <meta name="keywords" content="Corlay, médecins généralistes, infirmiers, kinésithérapeutes, cabinet dentaire, pharmacie, urgences, santé Corlay, Corlay santé, professionnels de santé Bretagne" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://commune-de-corlay.vercel.app/#/medical" />

                {/* Open Graph */}
                <meta property="og:title" content="Services Médicaux à Corlay - Médecins, Infirmiers, Dentistes et Plus" />
                <meta property="og:description" content="Retrouvez tous les services médicaux à Corlay, y compris les médecins généralistes, les infirmiers, les kinésithérapeutes, et les services d'urgences." />
                <meta property="og:image" content="https://commune-de-corlay.vercel.app/medical-page.jpg" />
                <meta property="og:url" content="https://commune-de-corlay.vercel.app/#/medical" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Santé Commune de Corlay" />
                <meta property="fb:app_id" content="100063946335792" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Services Médicaux à Corlay - Médecins, Infirmiers, Dentistes et Plus" />
                <meta name="twitter:description" content="Retrouvez tous les services médicaux à Corlay, y compris les médecins généralistes, les infirmiers, les kinésithérapeutes, et les services d'urgences." />
                <meta name="twitter:image" content="https://commune-de-corlay.vercel.app/medical-page.jpg" />
            </Helmet>
            <div className="typewriter">
                <h1 className="title1">
                <i className="fas fa-user-md"></i> La santé
            </h1>
            </div>
            <section className="pro-medicaux">
                <div className="left-right">

                    <figure className="medi-section urgences">
                        <h2 className="title2">
                            <i className="fa-solid fa-phone"></i> Numéros d'urgences
                        </h2>
                        <ul>
                            <li>Samu <i className="fa-solid fa-phone"></i> 15</li>
                            <li >Sapeurs pompiers <i className="fa-solid fa-phone"></i> 18</li>
                            <li >Gendarmerie <i className="fa-solid fa-phone"></i> 17</li>
                            <li>N° européen Urgences <i className="fa-solid fa-phone"></i> 112</li>
                            <li>Enfance en danger <i className="fa-solid fa-phone"></i> 119</li>
                            <li>Prévention suicides <i className="fa-solid fa-phone"></i> 3114</li>
                            <li>Violences conjugales <i className="fa-solid fa-phone"></i> 3919</li>
                            <li>Centre anti-poison <i className="fa-solid fa-phone"></i> 0 800 59 59 59</li>
                        </ul>
                    </figure>

                    <MedicalSection
                        title="Médecins généralistes"
                        address="10 rue Ste Anne, 22320 Corlay"
                        phone="02 96 29 40 88"
                        items={["Sylvie JULIEN", "Cécile RIOU"]}
                        icon="fa-user-md"
                    />

                    <MedicalSection
                        title="Cabinets infirmiers"
                        address="25 place Sidonie Carriere, 22320 Corlay"
                        phone="02 96 24 06 58"
                        items={["Gaëlle KERFOURN", "Julie HAMET", "Marion DELANNEE", "Véronique RAULT"]}
                        icon="fa-user-nurse"
                    />
                    <MedicalSection
                        title="Cabinets infirmiers"
                        address="1B place Sidonie Carriere, 22320 Corlay"
                        phone="02 96 29 48 25"
                        items={["Adeline JULIEN", "Marianne LE GALL", "Mathilde PHILIPPE"]}
                        icon="fa-user-nurse"
                    />

                    {/* Masseurs kinésithérapeutes */}
                    <MedicalSection
                        title="Masseurs kinésithérapeutes"
                        address="21 place Sidonie Carriere, 22320 Corlay"
                        phone="02 96 29 45 66"
                        items={["Julien HUET", "Pascale CHARLES", "Pascal ARCURI"]}
                        icon="fa-hand-holding-medical"
                    />

                    {/* Cabinet dentaire */}
                    <MedicalSection
                        title="Cabinet dentaire"
                        address="11 place Sidonie Carriere, 22320 Corlay"
                        phone="02 96 29 78 27"
                        items={["Philippe CARON", "Nicolas LERUSTE"]}
                        icon="fa-tooth"
                    />

                    <MedicalSection
                        title="Ostéopathe"
                        address="10 rue Ste Anne, 22320 Corlay"
                        phone="06 15 69 67 23"
                        items={["Eva PROD'HOMME"]}
                        icon="fa-user-md"
                    />

                    <MedicalSection
                        title="Pharmacie"
                        address="12 grande rue, 22320 Corlay"
                        phone="02 96 29 40 26"
                        items={["Pharmacie SIMON"]}
                        icon="fa-prescription-bottle-medical"
                    />

                    <MedicalSection
                        title="Ambulances & Taxis"
                        address="9 place du marché, 22320 Corlay"
                        phone="02 96 29 47 44"
                        items={["Sté COLLIN"]}
                        icon="fa-truck-medical"
                    />

                    <MedicalSection
                        title="Santé animale"
                        address="ZA de Kerjoly, 22320 Le Haut-Corlay"
                        phone="02 96 29 40 07"
                        items={["Clinique vétérinaire du Haut-Corlay"]}
                        icon="fa-paw"
                    />

                </div>
            </section>
        </div>
    );
}

export default Medical;