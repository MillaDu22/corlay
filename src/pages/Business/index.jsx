import { Helmet } from 'react-helmet-async';
import BusinessCard from '../../components/BusinessCard/index';
import './business.css';

function Business() {
    const business = [
        {
            title: 'Tuballiance',
            address: 'Rte de, Parc Bras, 22320 CORLAY',
            phone: '06 64 80 55 81',
            email: '#',
            website: '#',
            img: "fas fa-cogs",
            position:"left",
        },
        {
            title: 'Martin Romain - Jardin & Maison',
            address: '15 le Malabry, 22320 CORLAY',
            phone: '06 22 61 26 19',
            email: 'entreprisemartin@yahoo.com',
            website: 'https://www.facebook.com/entreprisemartinromain/',
            img: "fas fa-seedling",
            position:"left",
        },
        {
            title: 'Plomb Elec',
            address: '15 rue de Plussulien, 22320 CORLAY',
            phone: '02 96 29 51 14',
            email: 'contact@plombelec22.fr',
            website: 'https://www.facebook.com/profile.php?id=61560966060343',
            img: "fas fa-wrench",
            position:"left",
        },
        {
            title: 'Véranda Line Extensions',
            address: 'ZA de Kerjoly, 22320 LE HAUT-CORLAY',
            phone: '02 96 57 80 20',
            email: 'communication@verandaline.com',
            website: 'https://www.verandaline.com/',
            img: "fas fa-home",
            position:"left",
        },
        {
            title: 'Atelier Du Plaquiste ',
            address: 'ZA du Poteau, Rte de Jévelen, 22320 CORLAY',
            phone: '06 66 15 30 64',
            email: 'brice.adp@gmail.com',
            website: 'https://www.atelier-du-plaquiste.com/2-5.htm',
            img: "fas fa-tools",
            position:"left",
        },
        {
            title: 'Couvreur Thépot Christian',
            address: '10 Kerpoisson, 22320 CORLAY',
            phone: '02 96 29 99 43',
            email: '#',
            website: '#',
            img: "fas fa-hammer",
            position:"left",
        },
        {
            title: 'Transport Funéraire du Centre Bretagne',
            address: '3 Rue de Pontivy, 22320 CORLAY',
            phone: '06 60 85 84 81',
            email: 'tfcb@orange.fr',
            website: 'https://www.tfcb.fr/',
            img: 'fas fa-ambulance',
            position:"left",
        },
        {
            title: 'Negoce Bois Bretagne',
            address: 'Parc Bois, 22320 CORLAY',
            phone: '02 96 36 06 95',
            email: '#',
            website: '#',
            img: 'fas fa-tree',
            position:"left",
        },
        {
            title: 'Concept Graph',
            address: 'Le Malabry, 22320 CORLAY',
            phone: ' 06 75 15 20 28',
            email: '#',
            website: 'conceptgraph.fr',
            img: 'fas fa-pencil-ruler',
            position:"left",
        },
        {
            title: 'Transport Garandel',
            address: 'ZA Kerjoly, 22320 LE HAUT-CORLAY',
            phone: '06 31 91 03 36',
            email: '#',
            website: '#',
            img: 'fas fa-truck',
            position:"left",
        },
        {
            title: 'Menguy Peinture Décoration',
            address: 'ZA de Kerjoly, 22320 LE HAUT-CORLAY',
            phone: '02 96 24 31 78',
            email: 'jymenguydeco@orange.fr',
            website: 'https://menguy-decorateur.fr/',
            img: 'fas fa-paint-roller',
            position:"left",
        },
        {
            title: 'Maçonnerie Jean Connan',
            address: '1 Rue Pors Jacques, 22320 LE HAUT-CORLAY',
            phone: ' 02 96 29 54 17',
            email: 'pierrick.entrepriseconnan@gmail.com',
            website: 'https://www.facebook.com/p/Ma%C3%A7onnerie-Jean-Connan-100078233628005/',
            img: 'fas fa-tools',
            position:"left",
        },
        {
            title: 'Gaec Miel de Bretons, GAST',
            address: '20 Rue du Moulin, 22320 CORLAY',
            phone: ' 06 83 02 17 70',
            email: 'mieldebretonsgast@gmail.com',
            website: 'https://mieldebretonsgast.fr/',
            img: 'fas fa-spoon',
            position:"left",
        },
        {
            title: 'Agence Immobillère Le Meur',
            address: '2 Place du Château , 22320 CORLAY',
            phone: ' 02 96 29 90 03',
            email: 'agencelemeur@orange.fr',
            website: 'https://www.agencelemeur.com/',
            img: 'fas fa-home',
            position:"left",
        },
        {
            title: 'De Goas Louarn',
            address: '13 Rue Fargantine , 22320 CORLAY',
            phone: ' 02 79 61 05 19',
            email: '#',
            website: '#',
            img: 'fas fa-tools',
            position:"left",
        },
        {
            title: 'Espace Automobile Corlaysien',
            address: '1 Keroger , 22320 CORLAY',
            phone: ' 02 96 36 96 37',
            email: 'eac22320@gmail.com',
            website: 'https://www.facebook.com/p/Espace-Automobile-Corlaysien-Motorcraft-100063705270621/?locale=fr_FR',
            img: 'fas fa-car',
            position:"left",
        },
        {
            title: 'Le Travers Fleurs',
            address: '8 Le Travers , 22320 CORLAY',
            phone: ' 02 96 29 47 88',
            email: 'christopher.lhermite@sfr.fr',
            website: 'https://www.facebook.com/p/Le-Travers-Fleurs-100054486338857/?locale=fr_FR',
            img: 'fas fa-leaf',
            position:"left",
        },
        {
            title: 'Peinture MOPIN Christian',
            address: '7 Rue de la Croix Burlot , 22320 LE HAUT-CORLAY',
            phone: ' 02 96 57 43 68',
            email: 'christian.mopin@bbox.fr',
            website: 'https://www.facebook.com/profile.php?id=100064058143200&locale=fr_FR',
            img: 'fas fa-paint-roller',
            position:"left",
        },
        {
            title: 'Mozet Peinture',
            address: '19 Rue de Kerjean , 22320 LE HAUT-CORLAY',
            phone: ' 06 02 12 95 07',
            email: 'contactmozetpeinture@gmail.com',
            website: 'https://www.facebook.com/profile.php?id=100065235561298&locale=fr_FR',
            img: 'fas fa-paint-roller',
            position:"left",
        },
        {
            title: 'SARL Le Lay',
            address: 'Kernonen , 22320 LE HAUT-CORLAY',
            phone: ' 02 96 29 49 32',
            email: '#',
            website: '#',
            img: 'fas fa-hammer',
            position:"left",
        },
        {
            title: 'Guerin élevage',
            address: '1 Rue Pem-Poul , 22320 LE HAUT-CORLAY',
            phone: ' 02 96 29 47 19',
            email: 'guerin-elevage@outlook.fr',
            website: 'https://www.facebook.com/profile.php?id=100064061743623',
            img: 'fas fa-tractor',
            position:"left",
        },
        {
            title: 'Daniel Boscher',
            address: '1 Rue Pem-Poul , 22320 LE HAUT-CORLAY',
            phone: ' 02 96 29 47 19',
            email: 'guerin-elevage@outlook.fr',
            website: 'https://www.facebook.com/profile.php?id=100064061743623',
            img: 'fas fa-tractor',
            position:"left",
        },
        {
            title: 'Le Guevel Constructions SARL',
            address: '4 Rue Pem-Poul , 22320 LE HAUT-CORLAY',
            phone: ' 02 96 29 46 87',
            email: '#',
            website: '#',
            img: 'fas fa-hard-hat',
            position:"left",
        },
        {
            title: 'Couvreur Corbel Fabrice',
            address: '25 Rue du Relais , 22320 LE HAUT-CORLAY',
            phone: ' 02 96 29 46 85',
            email: '#',
            website: '#',
            img: 'fas fa-tools',
            position:"left",
        },
        {
            title: 'SARL Saint-Jalmes',
            address: '25 Rue des Maronnniers , 22320 LE HAUT-CORLAY',
            phone: ' 02 96 29 40 56',
            email: 'contact.stjalmes@gmail.com',
            website: 'https://saint-jalmes.bzh/',
            img: 'fas fa-cogs',
            position:"left",
        },
        {
            title: 'Pixel Inside',
            address: '1 Le Petit Lorfillec , 22320 LE HAUT-CORLAY',
            phone: ' 06 88 30 44 29',
            email: 'print@pixelinside.com',
            website: 'https://pixelinside.com/',
            img: 'fas fa-pencil-alt',
            position:"left",
        },
        {
            title: 'Mohair du Pays de Corlay',
            address: 'La Garenne Morvan , 22320 LE HAUT-CORLAY',
            phone: ' 06 07 02 02 08',
            email: 'mohairdupaysdecorlay@gmail.com',
            website: 'https://www.mohair-pays-corlay.com/',
            img: 'fas fa-tshirt',
            position:"left",
        },
        {
            title: 'Bretagne Wood Crafts',
            address: 'Kerfolliat , 22320 PLUSSULIEN',
            phone: ' 02 96 24 78 63',
            email: '#',
            website: '#',
            img: 'fas fa-cogs',
            position:"left",
        },
        {
            title: 'Ets Le Bars Rodolphe, Plomberie-chauffage-électricien',
            address: '3 Rue de Croas Névez , 22320 PLUSSULIEN',
            phone: ' 02 96 24 01 18',
            email: '#',
            website: 'https://etslebars.fr/',
            img: 'fas fa-wrench',
            position:"left",
        },
        {
            title: 'L Hermite Claude, Pompes Funêbres',
            address: '12 Rue Leïn Barten , 22320 PLUSSULIEN',
            phone: ' 02 96 24 05 29',
            email: 'claude.lhermite@gmail.com',
            website: 'https://www.marbrerie-lhermite-claude.fr/',
            img: 'fas fa-gem',
            position:"left",
        },
        {
            title: 'Treguier Paysage',
            address: '1 Rue Croas Névez , 22320 PLUSSULIEN',
            phone: ' 02 96 24 01 54',
            email: 'treguierch@orange.fr',
            website: 'https://www.treguier-paysages.fr/',
            img: 'fas fa-tree',
            position:"left",
        },
        {
            title: 'Armorine Garage',
            address: '13 Rue Leïn Barten , 22320 PLUSSULIEN',
            phone: ' 02 96 24 06 45',
            email: '#',
            website: '#',
            img: 'fas fa-car',
            position:"left",
        },
        {
            title: 'AM Création paysagiste',
            address: '1 Résidence de Kerprat , 22320 SAINT-MARTIN-DES-PRES',
            phone: ' 07 81 06 08 81',
            email: 'adrienmael.creation@gmail.com',
            website: 'https://www.facebook.com/amcreation22',
            img: 'fas fa-leaf',
            position:"left",
        },
        {
            title: 'Guedes Maçonnerie',
            address: '5 La ville Jean , 22320 SAINT-MARTIN-DES-PRES',
            phone: ' 06 34 44 43 66',
            email: 'guedesruben@outlook.fr',
            website: 'https://www.guedes-maconnerie.fr/?utm_source=gmb',
            img: 'fas fa-hammer',
            position:"left",
        },
        {
            title: 'Le Haras Gunnebourg',
            address: '3 Guennebourg , 22320 SAINT-MARTIN-DES-PRES',
            phone: '.',
            email: 'harasdeguennebourg@gmail.com',
            website: 'https://www.facebook.com/profile.php?id=100063946185911',
            img: 'fas fa-horse',
            position:"left",
        },
    ]

    const sortedBusiness = [...business].sort((a, b) => 
        a.title.localeCompare(b.title, 'fr', { sensitivity: 'base' })
    );

    return(
        <div className="body-business">
            <Helmet>
                <title>Entreprises à Corlay - Entreprises, Artisans, Fermes Agricoles et Plus</title>
                <meta
                    name="description"
                    content="Découvrez les entreprises, artisans et fermes agricoles de Corlay et ses alentours. Trouvez des professionnels locaux pour vos projets et vos besoins, du bâtiment à l'agriculture."
                />
                <meta
                    name="keywords"
                    content="Corlay, entreprises, artisans, fermes agricoles, commerces locaux, services, agriculture, bâtiment, artisans Corlay, entreprises locales, Corlay entreprises, artisanat, agriculture Corlay"
                />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://commune-de-corlay.vercel.app/#/business" />

                {/* Open Graph */}
                <meta property="og:title" content="Entreprises à Corlay - Entreprises, Artisans, Fermes Agricoles et Plus" />
                <meta property="og:description" content="Découvrez les entreprises locales, artisans et fermes agricoles à Corlay et ses environs. Trouvez des services de qualité pour vos besoins quotidiens et professionnels." />
                <meta property="og:image" content="https://commune-de-corlay.vercel.app/business-page.jpg" />
                <meta property="og:url" content="https://commune-de-corlay.vercel.app/#/business" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Entreprises à Corlay" />
                <meta property="fb:app_id" content="100063946335792" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Entreprises à Corlay - Entreprises, Artisans, Fermes Agricoles et Plus" />
                <meta name="twitter:description" content="Explorez les entreprises locales, artisans et fermes agricoles de Corlay. Trouvez des professionnels pour vos besoins en services et agriculture." />
                <meta name="twitter:image" content="https://commune-de-corlay.vercel.app/business-page.jpg" />
            </Helmet>
            <div className="typewriter">
                <h1 className="title1"><i className="fas fa-building"></i> Entreprises</h1>
            </div>
            <section className="intro-business">
            <p className= "p-intro-business">
                Découvrez les entreprises locales du Pays de Corlay, un territoire dynamique et riche en savoir-faire. 
                Ici, vous trouverez une variété d'entreprises de tous secteurs prêtes à répondre à vos besoins. 
                Que vous soyez à la recherche d'un artisan, d'un commerçant ou d'un prestataire de services, 
                ces entreprises locales sont là pour vous accompagner dans vos projets. 
                Profitez de cette opportunité pour développer des partenariats avec des acteurs locaux, passionnés par leur métier et leur région.
            </p>
            </section>
            <section className="business-section">
                {sortedBusiness.map((business, index) => (
                    < BusinessCard key={index} {...business} />
                ))}
            </section>
        </div>
    )
}
export default Business;