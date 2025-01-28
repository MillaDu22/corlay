import React from 'react';
import SocialDash from '../../components/SocialDash/index';
import Service from '../../components/Service/index';
import Cover1 from '../../assets/images/services/mairie.webp';
import Cover2 from '../../assets/images/services/La_Poste_2022.webp';
import Cover3 from '../../assets/images/services/La_Poste_2022.webp';
import Cover4 from '../../assets/images/services/Logo-Sapeurs-Pompiers-768x432.webp';
import Cover5 from '../../assets/images/services/gendarmeire.webp';
import Cover6 from '../../assets/images/services/LogoFranceservices.webp';
import Cover7 from '../../assets/images/services/cerfrance_logo.webp';
import Cover8 from '../../assets/images/services/logoadmr.webp';
import Cover9 from '../../assets/images/services/resto_du_coeur.webp';
import Cover10 from '../../assets/images/services/epad.webp';
import Cover11 from '../../assets/images/services/photo-fargantine.webp';
import Cover12 from '../../assets/images/services/St-Joseph.webp';
import Cover13 from '../../assets/images/services/camping.webp';
import Cover14 from '../../assets/images/logos/LoudeacCommunaute.webp';
import Cover15 from '../../assets/images/services/gites-de-france.webp';
import Cover16 from '../../assets/images/services/gites-de-france.webp';
import Cover17 from '../../assets/images/services/gites-de-france.webp';
import Cover18 from '../../assets/images/services/gites-de-france.webp';
import Cover19 from '../../assets/images/services/chambre-hotes.webp';
import Cover20 from '../../assets/images/services/airbnb.webp';
import Cover21 from '../../assets/images/services/airbnb.webp';
import Cover22 from '../../assets/images/services/pompes-funebres.webp';
import Cover23 from '../../assets/images/services/pompes-funebres.webp';
import { Helmet } from 'react-helmet-async';
import './services.css';

const services = [
    {
        title: 'Mairie',
        address: '8, place de l\'église, 22320 Corlay',
        phone: '02 96 29 40 41',
        email: 'accueil@mairiecorlay.fr',
        website: 'https://commune-de-corlay.vercel.app',
        cover: Cover1,
    },
    {
        title: 'La Poste',
        address: 'Mairie - 8, place de l\'église, 22320 Corlay',
        phone: '02 96 29 40 41',
        website: 'https://www.carrefour.fr/magasin/express-corlay',
        cover: Cover2,
    },
    {
        title: 'La Poste',
        address: 'Carrefour Express - 5, rue de Plussulien',
        phone: '02 96 24 36 16',
        website: 'https://www.carrefour.fr/magasin/express-corlay',
        cover: Cover3,
    },
    {
        title: 'Sapeurs Pompiers',
        address: '1, rue du parc Corel, 22320 Corlay',
        phone: '18 (CODIS)',
        website: 'https://www.sdis22.fr/',
        cover: Cover4,
    },
    {
        title: 'Gendarmerie',
        address: 'Rue de Pontivy, 22320 Corlay',
        phone: '02 96 29 40 17',
        website: 'https://www.gendarmerie.interieur.gouv.fr/',
        cover: Cover5,
    },
    {
        title: 'France Services Loudeac',
        address: 'Permanences mairie - 8, place de l\'église, 22320 Corlay',
        phone: '02 96 66 48 37, 06 86 90 37 53',
        email: 'loudeac@franceservices.gouv.fr',
        website: 'https://www.bretagnecentre.bzh',
        cover: Cover6,
    },
    {
        title: 'Cerfrance',
        address: '7, rue Ste Anne, 22320 Corlay',
        phone: '02 96 29 43 71',
        website: 'https://cerfrance22.fr/',
        cover: Cover7,
    },
    {
        title: 'ADMR Corlay-Rostrenen',
        address: '7, rue Ste Anne, 22320 Corlay',
        phone: '02 96 29 41 32',
        website: 'https://www.admr22.org',
        cover: Cover8,
    },
    {
        title: 'Restos du Coeur',
        address: '4 Place du château, 22320 Corlay',
        phone: '09 83 04 86 83',
        email: 'ad22.corlay@restosducoeur.org',
        website: 'https://ad22.restosducoeur.org/centres-departementaux/centre-de-corlay/',
        cover: Cover9,
    },
    {
        title: 'Résidence Magdelaine - Epahd',
        address: '21, rue du Parc Corel',
        phone: 'Numéro non disponible',
        website: 'Site non disponible',
        cover: Cover10,
    },
    {
        title: "Ecole publique Fargantine",
        address: "4, rue Fargantine, 22320 Corlay",
        phone: "02 96 29 42 43",
        website: "https://ecole-fargantine-corlay.fr/",
        cover: Cover11,
    },
    {
        title: "Ecole St Joseph",
        address: "15 place du marché, 22320 Corlay",
        phone: "02 96 29 40 33",
        email: "eco22.stjo.corlay@e-c.bzh",
        website: "https://www.stjosephcorlay.fr/",
        cover: Cover12,
    },
    {
        title: "Camping municipal",
        address: "13 rue de l'étang, 22320 Le Haut-Corlay",
        phone: "02 96 29 40 41",
        email: "accueil@mairiecorlay.fr",
        website: "https://commune-de-corlay.vercel.app",
        cover: Cover13,
    },
    {
        title: "Déchetterie",
        address: "ZA du poteau, 22320 Corlay",
        phone: "02 96 66 40 10",
        website:"https://www.bretagnecentre.bzh/fileadmin/user_upload/horaires_dechetteries_aout_2024-site-internet.pdf",
        cover: Cover14,
    },
    {
        title: "Collectes des déchets 2025",
        address: "Communauté de communes Loudeac",
        phone: "02 96 66 40 10",
        website:"https://www.bretagnecentre.bzh/fileadmin/user_upload/12-bretagnecentre-collecte-des-dechets-calendrier-2025-corlay-plemet-plouguenast-langast-st-herve-uzel-particuliers.pdf",
        cover: Cover14,
    },
    {
        title: "Gites de France - Le sel",
        address: "2 Ven. du Colombier, 22320 Corlay",
        phone: "02 57 18 01 11",
        website: "https://www.gitesdarmor.com/fiche-hebergement-22G410207.html",
        cover: Cover15,
    },
    {
        title: "Gites de France - Kerguiel",
        address: "Kerguiel, 22320 Corlay",
        phone: "02 57 18 01 11",
        website: "https://www.gites-de-france.com/fr/bretagne/cotes-darmor/kerguiel-22g410206",
        cover: Cover16,
    },
    {
        title: "Gites de France - Ti Cremesven",
        address: "11 Cremesven, 22320 Corlay",
        phone: "02 57 18 01 11",
        website: "https://www.gitesdarmor.com/fiche-hebergement-22G410209.html",
        cover: Cover17,
    },
    {
        title: "Gites de France - Ti' gite damour",
        address: "3 Le Cordélio, 22320 Corlay",
        phone: "02 57 18 01 11",
        website: "https://www.gitesdarmor.com/fiche-hebergement-22G410208.html",
        cover: Cover18,
    },
    {
        title: "Chambre d'hôte Mara",
        address: "Route de Pontivy, 22320 Corlay",
        phone: "06 37 08 67 16",
        website: "https://katestravelexperience.eu/chambre-d-39-hote-mara-france",
        cover: Cover19,
    },
    {
        title: "Airbnb/Corlay",
        adress: "Corlay",
        website: "https://www.airbnb.fr/rooms/51098066",
        cover: Cover20,
    },
    {
        title: "Airbnb/Haut-Corlay",
        adress: "Le Haut-Corlay",
        website: "https://www.airbnb.fr/rooms/52503237",
        cover: Cover21,
    
    },
    {
        title: "Pompes funèbres Collin",
        address: "7, rue St Sauveur, 22320 Corlay",
        phone: "02 96 29 47 44",
        cover: Cover22,
    },
    {
        title: "Pompes funèbres Le Drogo",
        address: "Rue du parc Corel, 22320 Corlay",
        phone: "02 96 24 90 94",
        cover: Cover23,
    }
];

const sortedServices = [...services].sort((a, b) => 
    a.title.localeCompare(b.title, 'fr', { sensitivity: 'base' })
);

function Services() {
    return(
        <div className="body-services">
            <Helmet>
                <title>Services à Corlay - Services Publics, Aides à Domicile, Services Locaux</title>
                <meta
                    name="description"
                    content="Explorez les services publics et d'aide à domicile à Corlay, y compris l'assistance sociale, les soins à domicile, les aides financières, et autres services destinés à améliorer la vie quotidienne."
                />
                <meta
                    name="keywords"
                    content="Corlay, services publics, aide à domicile, assistance sociale, soins à domicile, services d'aides, services locaux Corlay, aides financières Corlay"
                />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://commune-de-corlay.vercel.app/#/services" />

                {/* Open Graph */}
                <meta property="og:title" content="Services à Corlay - Services Publics, Aides à Domicile, Services Locaux" />
                <meta property="og:description" content="Découvrez les services publics et d'aide à domicile à Corlay, incluant l'assistance sociale, les soins à domicile, les aides financières et plus." />
                <meta property="og:image" content="https://commune-de-corlay.vercel.app/services-page.jpg" />
                <meta property="og:url" content="https://commune-de-corlay.vercel.app/#/services" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Services de Corlay" />
                <meta property="fb:app_id" content="100063946335792" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Services à Corlay - Services Publics, Aides à Domicile, Services Locaux" />
                <meta name="twitter:description" content="Trouvez les services publics et d'aide à domicile à Corlay : assistance sociale, soins à domicile, aides financières et plus." />
                <meta name="twitter:image" content="https://commune-de-corlay.vercel.app/services-page.jpg" />
            </Helmet>

            <div className="typewriter">
                <h1 className="title1"><i className="fas fa-hands-helping"></i> Services</h1>
            </div>
            <section className="intro-services">
                <p className= "p-intro-services">
                    Découvrez les Services Locaux à Corlay.
                    Que vous soyez un habitant de Corlay ou simplement de passage, 
                    cette page vous propose un aperçu des principaux services locaux disponibles dans la région. 
                    Des institutions publiques aux entreprises locales, en passant par les associations et les hébergements, 
                    vous trouverez ici toutes les informations nécessaires pour répondre à vos besoins. 
                </p>
                <p className= "p-intro-services">
                    Profitez des coordonnées, adresses et sites web pour accéder rapidement à chaque service.
                </p>
            </section>
            <SocialDash />
            <section className= "services">
                <h2 className="title2-local-services">Les services locaux</h2>
                <div className="container-local-services">
                    {sortedServices.map((service, index) => (
                        <Service key={index} {...service} />
                    ))}
                </div>
            </section>
        </div>
    )
}
export default Services;