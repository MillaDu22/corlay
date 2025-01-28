import { Helmet } from 'react-helmet-async';
import Commerce from '../../components/Commerce/index';
import Cover1 from '../../assets/images/shop/fleuriste.webp';
import Cover2 from '../../assets/images/shop/BarTabac.webp';
import Cover3 from '../../assets/images/shop/BarTabac.webp';
import Cover4 from '../../assets/images/shop/pharmacie.webp';
import Cover5 from '../../assets/images/shop/pain.webp';
import Cover6 from '../../assets/images/shop/pierre-amethyste.webp';
import Cover7 from '../../assets/images/shop/presse.webp';
import Cover8 from '../../assets/images/shop/epicerie.webp';
import Cover9 from '../../assets/images/shop/express.webp';
import Cover10 from '../../assets/images/shop/cmb.webp';
import Cover11 from '../../assets/images/shop/CA.webp';
import Cover12 from '../../assets/images/shop/Logo-groupama.webp';
import Cover13 from '../../assets/images/shop/coiffeur.webp';
import Cover14 from '../../assets/images/shop/coiffeur.webp';
import Cover15 from '../../assets/images/shop/point-vert.webp';
import Cover16 from '../../assets/images/shop/restaurant.webp';
import Cover17 from '../../assets/images/shop/pizza.webp';
import Cover18 from '../../assets/images/shop/restaurant.webp';
import Cover20 from '../../assets/images/shop/restaurant.webp';
import Cover21 from '../../assets/images/shop/restaurant.webp';

import './shop.css';

const commerces = [
    {
        type: "fleuriste",
        name: "La Bouquetiere",
        address: "4 Grande Rue - 22320 Corlay",
        phone: "02 96 29 49 04",
        cover: Cover1,
    },
    {
        type: "Bar Tabac",
        name: "Carpe Diem",
        address: "6 Grande Rue - 22320 Corlay",
        phone: "",
        cover: Cover2,
    },
    {
        type: "Bar Tabac Restaurant",
        name: "Le Relax",
        address: "5 rue de la gare - 22320 Corlay",
        phone: "02 96 29 40 03",
        cover: Cover3,
    },
    {
        type: "Pharmacie",
        name: "Pharmacie Simon",
        address: "12 Grande Rue - 22320 Corlay",
        phone: "02 96 29 40 26",
        cover: Cover4,
    },
    {
        type: "Boulangerie Patisserie",
        name: "Le délice de Corlay",
        address: "1 place de l'église - 22320 Corlay",
        phone: "02 96 29 40 23",
        cover:Cover5,
    },
    {
        type: "Isothérisme",
        name: "Pierres et Minéraux",
        address: "9 Grande Rue - 22320 Corlay",
        phone: "02 96 36 92 31",
        cover:Cover6,
    },
    {
        type: "Tabac Presse FDJ",
        name: "Point Nickel",
        address: "15 Grande Rue - 22320 Corlay",
        phone: "02 96 29 44 65",
        cover: Cover7,
    },
    {
        type: "Epicerie",
        name: "Votre marché",
        address: "10 place du marché - 22320 Corlay",
        phone: "02 96 36 63 55",
        cover: Cover8,
    },
    {
        type: "Superette",
        name: "Carrefour Express",
        address: "5 rue de Plussulien - 22320 Corlay",
        phone: "02 96 24 36 16",
        cover: Cover9,
    },
    {
        type: "Banque",
        name: "Crédit Mutuel de Bretagne",
        address: "5 place du marché - 22320 Corlay",
        phone: "02 96 57 80 30",
        cover: Cover10,
    },
    {
        type: "Banque",
        name: "Crédit Agricole",
        address: "5 place Sidonie Carriere - 22320 Corlay",
        phone: "02 96 57 80 40",
        cover: Cover11,
    },
    {
        type: "Assurance",
        name: "Groupama",
        address: "2 place Sidonie Carriere - 22320 Corlay",
        phone: "02 96 29 49 12",
        cover: Cover12,
    },
    {
        type: "Coiffeur",
        name: "Art & Styles",
        address: "12 place Sidonie Carriere - 22320 Corlay",
        phone: "02 96 29 40 58",
        cover: Cover13,
    },
    {
        type: "Coiffeur",
        name: "MI Coiffure",
        address: "11 Grande Rue - 22320 Corlay",
        phone: "02 96 29 40 13",
        cover: Cover14,
    },
    {
        type: "Brico & Jardin",
        name: "Point Vert",
        address: "Le Poteau - 22320 Corlay",
        phone: "02 96 29 46 32",
        cover: Cover15,
    },
    {
        type: "Restaurant",
        name: "La récré des papilles",
        address: "16 place du marché - 22320 Corlay",
        phone: "02 96 29 01 46",
        cover: Cover16,
    },
    {
        type: "À emporter",
        name: "Top Pizza",
        address: "14 Grande Rue - 22320 Corlay",
        phone: "02 96 29 93 64",
        cover: Cover17,
    },
    {
        type: "Bar Restaurant PMU",
        name: "Le Jockey",
        address: "32 Grande Rue - 22320 Corlay",
        phone: "02 96 29 40 15",
        cover: Cover18,
    },
    {
        type: "Sur place ou à emporter",
        name: "Chez Martell",
        address: "2 impasse des Lauriers - 22320 Le Haut-Corlay",
        phone: "02 56 25 90 03",
        cover: Cover20,
    },
    {
        type: "Restaurant",
        name: "Le relais de la Croix",
        address: "9 rue du Relais - 22320 Le Haut-Corlay",
        phone: "02 96 29 48 70",
        cover: Cover21,
    }
];

const sortedCommerces = [...commerces].sort((a, b) => 
    a.name.localeCompare(b.name, 'fr', { sensitivity: 'base' })
);

function Shop() {
    return(
        <div className="body-shop">
            <Helmet>
                <title>Commerces à Corlay - Boutiques, Restaurants, Services Locaux</title>
                <meta
                    name="description"
                    content="Explorez les commerces à Corlay, y compris les fleuristes, restaurants, bars, pharmacies, supermarchés, banques, et plus. Trouvez les coordonnées des commerces locaux."
                />
                <meta
                    name="keywords"
                    content="Corlay, commerces, restaurants, boutiques, pharmacie, services Corlay, supermarché Corlay, fleuriste Corlay, bar Corlay, banque Corlay"
                />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://commune-de-corlay.vercel.app/#/shop" />

                {/* Open Graph */}
                <meta property="og:title" content="Commerces à Corlay - Boutiques, Restaurants, Services Locaux" />
                <meta property="og:description" content="Découvrez les commerces locaux à Corlay : fleuristes, restaurants, bars, pharmacies, banques et plus encore." />
                <meta property="og:image" content="https://commune-de-corlay.vercel.app/shop-page.jpg" />
                <meta property="og:url" content="https://commune-de-corlay.vercel.app/#/shop" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Commerces de Corlay" />
                <meta property="fb:app_id" content="100063946335792" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Commerces à Corlay - Boutiques, Restaurants, Services Locaux" />
                <meta name="twitter:description" content="Trouvez tous les commerces de Corlay, des restaurants aux supermarchés, en passant par les pharmacies et plus encore." />
                <meta name="twitter:image" content="https://commune-de-corlay.vercel.app/shop-page.jpg" />
            </Helmet>
            <div className="typewriter">
                <h1 className = "title1"><i className="fas fa-shopping-cart"></i> Les commerces</h1>
            </div>
            <section className="intro-shop">
                <p className= "p-intro-shop">
                    Découvrez le charme de Corlay et ses commerces locaux.
                    Situé au cœur des Côtes-d’Armor, Corlay vous accueille avec une sélection de commerces variés et un marché animé chaque vendredi matin sur la place du marché. 
                    Ce rendez-vous hebdomadaire est idéal pour profiter des produits locaux et de l’ambiance conviviale du village.
                </p>
                <p className= "p-intro-shop">
                    Que vous soyez habitant, vacancier ou de passage, Corlay propose également plusieurs options de restauration pour tous les goûts, 
                    du déjeuner rapide au dîner en famille ou entre amis. 
                    Les professionnels travaillant dans la région y trouveront également des lieux parfaits pour se restaurer durant leur journée.
                </p>
                <p className= "p-intro-shop">
                    Cependant, Corlay offre aussi des opportunités pour de nouveaux commerces. 
                    Plusieurs locaux commerciaux sont disponibles et n’attendent qu’à être investis par des entrepreneurs prêts à enrichir l’offre du village. 
                    Cette diversité naissante et ces besoins en évolution font de Corlay un village en plein dynamisme, 
                    prêt à accueillir des idées nouvelles pour attirer et satisfaire habitants comme visiteurs.
                </p>
            </section>
            <section className="shop">
                {sortedCommerces.map((commerce, index) => (
                    <Commerce
                        key={index}
                        type={commerce.type}
                        name={commerce.name}
                        address={commerce.address}
                        phone={commerce.phone}
                        cover = {commerce.cover}
                    />
                ))}
            </section>   
        </div>
    )
}
export default Shop;