import { Helmet } from 'react-helmet-async';
import './history.css';
import Castle from '../../assets/images/histoire/chateau-de-corlay.webp';
import Eglise from '../../assets/images/histoire/corlay-eglise-saint-sauveur.webp';
import Chapelle from '../../assets/images/histoire/corlay-chapelle-sainte-anne.webp';
import GrandRue from '../../assets/images/histoire/corlay-grandrue.webp';
import CafeHotel from '../../assets/images/histoire/corlay-cafe-hotel.webp';
import Hotel from '../../assets/images/histoire/Corlay-hotel.webp';
import FontaineStAlain from '../../assets/images/histoire/FontaineStAlain.webp';

function History() {
    return(
        <div className="history-page">
            <Helmet>
                {/* Meta Tags */}
                <title>Histoire de Corlay | Monuments et Patrimoine de la Commune</title>
                <meta name="description" content="Découvrez l'histoire de Corlay en Bretagne : son château médiéval, l'église Saint-Sauveur et la chapelle Sainte-Anne. Explorez le patrimoine de la commune au cœur des Côtes-d'Armor." />
                <meta name="keywords" content="histoire Corlay, patrimoine Corlay, château de Corlay, église Saint-Sauveur, chapelle Sainte-Anne, monuments Corlay, Bretagne historique, patrimoine breton, commune Corlay, Côtes-d'Armor" />
                <link rel="canonical" href="https://commune-de-corlay.vercel.app/#/history" />

                {/* Open Graph tags for social media sharing */}
                <meta property="og:title" content="Histoire de Corlay | Monuments et Patrimoine de la Commune" />
                <meta property="og:description" content="Découvrez l'histoire de Corlay en Bretagne : son château médiéval, l'église Saint-Sauveur et la chapelle Sainte-Anne. Explorez le patrimoine de la commune au cœur des Côtes-d'Armor." />
                <meta property="og:image" content="https://commune-de-corlay.vercel.app/history-page.jpg" />
                <meta property="og:url" content="https://commune-de-corlay.vercel.app/#/history" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Commune de Corlay" />
                <meta property="fb:app_id" content="100063946335792" />

                {/* Twitter Card tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Histoire de Corlay | Monuments et Patrimoine de la Commune" />
                <meta name="twitter:description" content="Découvrez l'histoire de Corlay en Bretagne : son château médiéval, l'église Saint-Sauveur et la chapelle Sainte-Anne. Explorez le patrimoine de la commune au cœur des Côtes-d'Armor." />
                <meta name="twitter:image" content="https://commune-de-corlay.vercel.app/history-page.jpg" />
            </Helmet>

            <section className="history-section animate-fade">
                <div className="history-content">
                    <div className="typewriter">
                        <h1 className="title1">L'histoire de Corlay</h1>
                    </div>
                    <p className="history-intro">
                        Située au cœur des Côtes-d'Armor, en Bretagne, la petite commune de Corlay 
                        est riche en histoire et en patrimoine. Connu autrefois pour ses haras et 
                        son élevage de chevaux de trait bretons, Corlay a su conserver des traces 
                        de son passé médiéval.
                    </p>
                </div>
                
                <div className="monuments">
                    <h2 className="title2">Les monuments emblématiques</h2>
                    <div className="monuments-content">
                        <img src={Castle} alt="Le château de Corlay" className="float-image left-image" />
                        <p>
                            <strong>Le château de Corlay :</strong>  Construit en 1195 par Henri de Corlay, il servait de résidence aux seigneurs locaux jusqu'au XIVᵉ siècle. 
                            Au cours de la guerre de Cent Ans, le château subit des destructions importantes, le laissant en ruines. 
                            Il fut reconstruit entre 1475 et 1493 par Jean II de Rohan, vicomte de Rohan, 
                            à l'emplacement d'une place forte qui existait au XIIᵉ siècle et qui fut détruite.
                            Le château est inscrit au titre des monuments historiques depuis 1926. 
                            Aujourd'hui, les vestiges du château de Corlay offrent un aperçu précieux de l'architecture médiévale bretonne et 
                            constituent un site historique d'intérêt pour les visiteurs. Aujourd'hui, il 
                            surplombe toujours fièrement la vallée. Bien que partiellement en ruine, il reste 
                            un témoignage important de l'époque médiévale.
                        </p>
                    </div>
                    <div className="monuments-content">
                        <img src={Eglise} alt="Église Saint-Sauveur" className="float-image right-image" />
                        <p>
                            <strong>Église Saint-Sauveur :</strong> Cette église paroissiale, dont la construction a débuté en 1575. 
                            À l'origine, elle servait de chapelle privée pour le château des Rohan. Au début 
                            du XVIIe siècle,  elle est devenue l'église paroissiale, remplaçant ainsi l'ancienne église située sur la route de Plouha. 
                            L'église est inscrite au titre des monuments historiques depuis le 27 juin 1925.
                            Elle est composée d'une nef de sept travées avec bas-côtés, d'une abside à chevet carré, 
                            et d'un clocher sur la façade occidentale dont la partie inférieure sert de porche d'entrée.
                            À l'intérieur, les voûtes sont en charpente lambrissée et ses vitraux sont remarquables. 
                            L'église Saint-Sauveur de Corlay est un exemple remarquable de l'architecture religieuse bretonne du XVIᵉ siècle, 
                            témoignant de l'histoire et du patrimoine de la région.
                        </p>
                    </div>
                    <div className="monuments-content">
                        <img src={Chapelle} alt="La chapelle Ste-Anne" className="float-image left-image" />
                        <p>
                            <strong>La chapelle Sainte Anne :</strong> La Chapelle Sainte-Anne de Corlay est un édifice religieux 
                            qui revêt une importance particulière pour la commune de Corlay et ses environs.
                            Construite à une époque indéterminée, mais souvent rattachée aux traditions religieuses bretonnes consacrées à Sainte Anne, 
                            la sainte patronne des Bretons.
                            Elle aurait été un lieu de pèlerinage local pour les fidèles de la région, 
                            qui venaient demander protection ou formuler des vœux, notamment liés à la famille ou à la santé.
                            Sainte Anne est vénérée en Bretagne comme la grand-mère de Jésus, et les chapelles qui lui sont dédiées jouent souvent un rôle central dans les fêtes religieuses locales.
                            Une fête ou un pardon ont lieu en son honneur à Corlay, suivant une tradition très répandue dans la région.
                        </p>
                    </div>
                    <div className="monuments-content">
                        <img src={GrandRue} alt="La GrandRue de Corlay" className="float-image right-image" />
                        <p>
                            <strong>La Grande Rue :</strong> La Grande Rue de Corlay, est un témoin privilégié de l'histoire locale. Au XIXᵉ siècle, 
                            cette artère principale était le cœur battant de la commune, animée par le commerce, les échanges et la vie quotidienne des habitants.
                            À cette époque, les chevaux de trait étaient essentiels pour le transport de marchandises et de personnes. 
                            La rue était donc fréquentée par des attelages tirés par ces chevaux robustes, qui circulaient lentement, 
                            chargés de fardeaux ou de passagers. Les sabots résonnaient sur la terre battue, 
                            et les crissements des roues en bois des charrettes accompagnaient le bruit ambiant.
                            Les bâtiments de la rue, souvent en pierre, étaient dotés de devantures en bois et de fenêtres à petits carreaux. 
                            Les échoppes et les ateliers artisanaux s'alignaient, offrant une variété de produits locaux. Les habitants, 
                            vêtus de manière traditionnelle, se retrouvaient sur les trottoirs étroits, échangeant des nouvelles et des sourires.
                            Les marchés hebdomadaires étaient des événements majeurs, où les agriculteurs et les commerçants exposaient leurs produits frais. 
                            Les étals colorés, les odeurs de pain frais et de fromages, ainsi que les rires des enfants jouant dans les ruelles adjacentes, 
                            contribuaient à l'atmosphère vivante de la rue.
                            Les chevaux de trait, véritables moteurs de l'économie locale, étaient également utilisés pour des tâches agricoles, comme le labourage des champs environnants. 
                            Leur présence dans la rue symbolisait le lien étroit entre la vie rurale et le développement de la commune.
                            Ainsi, la Grande Rue de Corlay, avec ses chevaux de trait et son activité effervescente, incarnait le dynamisme et la convivialité d'une époque révolue, 
                            où chaque coin de rue racontait une histoire de labeur et de solidarité.
                        </p>
                    </div>
                    <div className="monuments-content">
                        <img src={CafeHotel} alt="L'hotel et le café de l'hotel" className="float-image left-image" />
                        <p>
                            <strong>L'hotel et le café de l'hotel, place de l'église :</strong> L'Hôtel de la place de l'église à Corlay, tel qu'immortalisée ici, 
                            se distingue par son architecture traditionnelle bretonne. La façade blanche, ornée de fenêtres à petits carreaux ainsi que le café de l'hotel orné, lui, d'une enseigne en bois, 
                            reflète le charme d'antan, où les habitants et les voyageurs se retrouvaient autour d'un verre, 
                            échangeant nouvelles et histoires locales. Les chevaux de trait, essentiels à l'époque, étaient souvent attachés devant l'établissement, 
                            témoignant de l'importance de l'hôtellerie et du commerce dans la vie quotidienne de Corlay.
                        </p>
                    </div>
                    <div className="monuments-content">
                        <img src={FontaineStAlain} alt="La fontaine Saint-Alain" className="float-image right-image" />
                        <p>
                            <strong>La fontaine St-Alain :</strong> La Fontaine Saint-Alain, est un lieu emblématique de la commune, chargé d'histoire et de tradition. 
                            Ce site est notamment lié à la légende de Saint Alain, un ermite breton du VIIe siècle, qui aurait vécu dans la région. 
                            La fontaine porte son nom en hommage à ce saint local, souvent invoqué pour ses pouvoirs de guérison.
                            La fontaine a longtemps été un point central pour les habitants du village, servant à l'approvisionnement en eau, 
                            mais aussi comme lieu de rassemblement social. Elle a une architecture typique de la région, avec un bassin en pierre.
                            Au fil des siècles, la Fontaine Saint-Alain a acquis une dimension sacrée, les gens venant y chercher de l'eau non seulement pour leurs besoins quotidiens, 
                            mais aussi pour ses propriétés miraculeuses, selon les croyances populaires. Elle était parfois considérée comme un lieu de pèlerinage, 
                            en particulier pour ceux qui cherchaient à guérir de certaines maladies. En Bretagne, de nombreuses fontaines sont associées à des cultes anciens et à des rites populaires liés à la guérison, 
                            et la Fontaine Saint-Alain ne fait pas exception.
                            Bien que la fontaine ait perdu son rôle central dans l'approvisionnement en eau avec les infrastructures modernes, elle reste un élément patrimonial important,
                            symbolisant le lien entre la nature, la culture bretonne et les croyances populaires de la région. Aujourd'hui encore, la Fontaine Saint-Alain est un lieu de passage 
                            et de mémoire pour les habitants de Corlay et pour les visiteurs désireux de découvrir l'histoire de cette commune bretonne.
                        </p>
                    </div>
                    <div className="monuments-content">
                        <img src={Hotel} alt="L'hotel des voyageurs à Corlay" className="float-image left-image" />
                        <p>
                            <strong>L'hotel des voyageurs :</strong> L'Hôtel des Voyageurs à Corlay, tel qu'immortalisé sur une carte postale ancienne au début du XXᵉ siècle, 
                            se distingue par son architecture traditionnelle bretonne. La façade en pierre, ornée de fenêtres à petits carreaux, 
                            reflète le charme d'antan. Le rez-de-chaussée abrite le café de l'hôtel, où les habitants et les voyageurs se retrouvaient autour d'un verre, 
                            échangeant nouvelles et histoires locales. 
                            Ce bâtiment témoignant de l'importance de l'hôtellerie et du commerce dans la vie quotidienne de Corlay.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default History;