import React from 'react';
import { Helmet } from 'react-helmet-async';
import AssoCard from '../../components/AssoCard/index';
import './asso.css';

function Asso() {
    const associations = [
        {
            icone:"fas fa-home",
            name: "Association d'Aide à Domicile en Milieu Rural - ADMR",
            siren: "339617995",
            activity: "Aide à domicile",
            address: "7, rue Ste Anne, 22320 Corlay",
            phone: "02 96 29 41 32"
        },
        {
            icone:"fas fa-horse",
            name: "Association des amis du cheval du pays de Corlay",
            siren: "381596808",
            activity: "Gestion des sites et monuments historiques et des attractions touristiques similaires",
            address: "Mairie, 22320 Corlay",
            phone: "02 96 29 40 41"
        },
        {
            icone:"fas fa-calculator",
            name: "Association de gestion et de comptabilité Côtes d'Armor",
            siren: "348155623",
            activity: "Activités comptables",
            address: "7, rue Ste Anne, 22320 Corlay",
            phone: "02 96 29 43 71"
        },
        {
            icone:"fas fa-users",
            name: "Association inter asso jeunes pays de Corlay",
            siren: "400372082",
            activity: "Autres organisations fonctionnant par adhésion volontaire",
            address: "Le château, 22320 Corlay",
            phone: "02 96 29 40 41"
        },
        {
            icone:"fas fa-utensils",
            name: "Association restaurant du coeur",
            siren: "383499308",
            activity: "Action sociale sans hébergement n.c.a.",
            address: "7, rue Ste Anne, 22320 Corlay",
            phone: "09 83 04 86 83"
        },
        {
            icone:"fas fa-store",
            name: "Association union des commerçants",
            siren: "427796735",
            activity: "Autres organisations fonctionnant par adhésion volontaire",
            address: "Le bourg, 22320 Corlay",
            phone: "02 96 29 40 41"
        },
        {
            icone:"fas fa-building",
            name: "Association de la maison de retraite",
            siren: "510611072",
            activity: "Autres organisations fonctionnant par adhésion volontaire",
            address: "21, rue du parc Corel, 22320 Corlay",
            phone: "02 96 29 41 21"
        },
        {
            icone:"fas fa-theater-masks",
            name: "Association familiale rurale",
            siren: "326232253",
            activity: "Gestion de salles de spectacles",
            address: "Le bourg, 22320 Corlay",
            phone: "02 96 29 40 41"
        },
        {
            icone:"fas fa-child",
            name: "Association familiales rurales",
            siren: "399996693",
            activity: "Autres organisations fonctionnant par adhésion volontaire",
            address: "Mairie, 22320 Corlay",
            phone: "02 96 29 40 41"
        },
        {
            icone:"fas fa-volleyball-ball",
            name: "Association Corlay volley ball club",
            siren: "447568577",
            activity: "Activités de clubs de sports",
            address: "Mairie, 22320 Corlay",
            phone: "02 96 29 40 41"
        },
        {
            icone:"fas fa-leaf",
            name: "Association centre d'études techniques agricoles de Corlay",
            siren: "444031322",
            activity: "Autres enseignements",
            address: "Mairie, 22320 Corlay",
            phone: "02 96 29 40 41"
        },
        {
            icone:"fas fa-music",
            name: "Association de l'école de musique du pays de Corlay",
            siren: "491882940",
            activity: "Autres enseignements",
            address: "7, rue Ste Anne, 22320 Corlay",
            phone: "02 96 29 98 51"
        },
        {
            icone:"fas fa-book",
            name: "Association OGEC St Joseph",
            siren: "301548962",
            activity: "Enseignement primaire",
            address: "Place du marché, 22320 Corlay",
            phone: "02 96 29 40 33"
        },
        {
            icone:"fas fa-football-ball",
            name: "Association Force 5",
            siren: "798756730",
            activity: "Activités de clubs de sports",
            address: "Mairie, 22320 Corlay",
            phone: "02 96 29 40 41"
        },
        {
            icone:"fas fa-briefcase",
            name: "Groupement d'employeurs du pays de Corlay",
            siren: "398686618",
            activity: "Autre mise à disposition de ressources humaines",
            address: "Mairie, 22320 Corlay",
            phone: "02 96 29 40 41"
        },
        {
            icone:"fas fa-globe",
            name: "Association initiative centre Bretagne européen",
            siren: "351514237",
            activity: "Autres organisations fonctionnant par adhésion volontaire",
            address: "Place Sidonie Carriere, 22320 Corlay",
            phone: "02 96 29 40 41"
        },
        {
            icone:"fas fa-dumbbell",
            name: "Association Argoat gym",
            siren: "403710361",
            activity: "Activités de clubs de sports",
            address: "Mairie, 22320 Corlay",
            phone: "02 96 29 40 41"
        },
        {
            icone:"fas fa-horse",
            name: "Association de la société hippique de Corlay",
            siren: "412658908",
            activity: "Autres activités récréatives et de loisirs",
            address: "Mairie, 22320 Corlay",
            phone: "02 96 29 40 41"
        },
        {
            icone:"fas fa-graduation-cap",
            name: "Association maison familiale rurale éducation orient",
            siren: "781626601",
            activity: "Enseignement secondaire technique ou professionnel",
            address: "Place du marché, 22320 Corlay",
            phone: "02 96 29 40 33"
        },  
        {
            icone:"fas fa-trophy",
            name: "Association de la société de courses de Corlay",
            siren: "384287322",
            activity: "Activités de clubs de sports",
            address: "Le bourg, 22320 Corlay",
            phone: "02 96 29 40 41"
        },
        {
            icone:"fas fa-map-marked-alt",
            name: "Association du syndicat d'initiative de Corlay",
            siren: "388149908",
            activity: "Activités des agences de voyage",
            address: "Mairie, 22320 Corlay",
            phone: "02 96 29 40 41"
        },
        {
            icone:"fas fa-bicycle",
            name: "Association de l'union sportive Corlaysienne",
            siren: "434754420",
            activity: "Activités de clubs de sports",
            address: "Mairie, 22320 Corlay",
            phone: "02 96 29 40 41"
        },
        {
            icone:"fas fa-car",
            name: "CSJ Compétition",
            siren: "W224004105",
            activity: "Activités de sports mécaniques",
            address: "28, Grande Rue, 22320 Corlay",
            phone: "06 11 59 18 28"
        },
        {
            icone:"fas fa-running",
            name: "Association de Trail de Guerlédan",
            siren: "511940330",
            activity: "Activités de clubs de sports",
            address: "Kermaria, 22320 Corlay",
            phone: "07.82.38.91.76"
        },
        {
            icone:"fas fa-fish",
            name: "Association agréee pour la pêche",
            siren: "W224005227",
            activity: "Activités de clubs de pêche",
            address: "Mairie, 22320 Corlay",
            phone: "02 96 29 40 41"
        },
        {
            icone:"fas fa-campground",
            name: "Association des propriétaire et chasseurs",
            siren: "W224000312",
            activity: "Activités de clubs de chasse",
            address: "Mairie, 22320 Corlay",
            phone: "02 96 29 40 41"
        },
        {
            icone:"fas fa-sun",
            name: "Association Vivre au pays de Corlay",
            siren: "W224005553",
            activity: "But commercial",
            address: "Mairie, 22320 Corlay",
            phone: "02 96 29 40 41"
        },
        {
            icone:"fas fa-fire-extinguisher",
            name: "Amicale des Sapeurs Pompiers",
            siren: "W224002834",
            activity: "Sécurité et protection civile",
            address: "Mairie, 22320 Corlay",
            phone: "02 96 29 40 41"
        },
        {
            icone:"fas fa-church",
            name: "Association église St Sauveur",
            siren: "W224006161",
            activity: "Commémorations et restaurations",
            address: "4 place du marché, 22320 Corlay",
            phone: "02 96 29 40 41"
        },
        {
            icone:"fas fa-church",
            name: "Association les amis de la chapelle Ste Anne",
            siren: "W224005239",
            activity: "Commémorations et restaurations",
            address: "Mairie, 22320 Corlay",
            phone: "02 96 29 40 41"
        }
    ];

    const sortedAssociations = [...associations].sort((a, b) => 
        a.name.localeCompare(b.name, 'fr', { sensitivity: 'base' })
    );

    return (
        <div className="body-asso">
        <Helmet>
        <title>Les Associations à Corlay - Aide, Culture, Sport, et Loisirs</title>
        <meta
            name="description"
            content="Découvrez les associations de Corlay, couvrant divers domaines tels que l'aide à domicile, le sport, la culture, et l'éducation, et comment elles contribuent à la vie locale."
        />
        <meta
            name="keywords"
            content="Corlay, associations, aide à domicile, sport, culture, loisirs, bénévolat, activités communautaires"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://commune-de-corlay.vercel.app/#/asso" />


        <meta property="og:title" content="Les Associations à Corlay - Aide, Culture, Sport, et Loisirs" />
        <meta property="og:description" content="Explorez les associations locales de Corlay dans les domaines de l'aide à domicile, du sport, de la culture et des loisirs." />
        <meta property="og:image" content="https://commune-de-corlay.vercel.app/asso-page.jpg" />
        <meta property="og:url" content="https://commune-de-corlay.vercel.app/#/asso" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Associations de Corlay" />
        <meta property="fb:app_id" content="100063946335792" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Les Associations à Corlay - Aide, Culture, Sport, et Loisirs" />
        <meta name="twitter:description" content="Découvrez les nombreuses associations locales de Corlay : aide à domicile, sports, culture et loisirs." />
        <meta name="twitter:image" content="https://commune-de-corlay.vercel.app/asso-page.jpg" />
        </Helmet>
        <div className="typewriter">
            <h1 className="title1">
            <i className="fas fa-handshake"></i> Les associations
            </h1>
        </div>
        <section className="intro-asso">
            <p className= "p-intro-asso">
                Les associations de Corlay sont le cœur battant de la vie locale. Que ce soit pour apporter une aide précieuse à domicile,
                promouvoir des activités sportives et culturelles, ou offrir des moments de partage et de loisirs, 
                ces organisations rassemblent les habitants autour d’une dynamique commune. 
                Chaque initiative contribue à tisser des liens entre générations, 
                à enrichir le quotidien et à faire de Corlay un village vivant et solidaire. 
            </p>
            <p className= "p-intro-asso">
                Rejoignez cette énergie collective et découvrez tout ce que ces associations ont à offrir !
            </p>
        </section>
        <section className="asso-section">
            {sortedAssociations.map((asso, index) => (
            <AssoCard
                key={index}
                icone={asso.icone}
                name={asso.name}
                siren={asso.siren}
                activity={asso.activity}
                address={asso.address}
                phone={asso.phone}
            />
            ))}
        </section>
        </div>
    );
}

export default Asso;
