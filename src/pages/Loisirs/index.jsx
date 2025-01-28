import { Helmet } from 'react-helmet-async';
import LoisirsCard from '../../components/LoisirsCard/index';
import './loisirs.css';

function Loisirs() {
    const loisirs = [
        {
            icone:"fas fa-book",
            name: "Bibliothèque Municipale",
            activity: "Lecture",
            address: "Mairie - 22320 Corlay",
            phone: "02 96 29 40 41",
            website: "https://commune-de-corlay.vercel.app",
            position:"left",
        },
        {
            icone:"fas fa-volleyball-ball",
            name: "Corlay Volley",
            activity: "Volley-ball",
            address: "Gymnase de Corlay - Rue des écoles - 22320 Corlay",
            phone: "07 89 00 23 53",
            website: "https://corlay-volleyball.fr/",
            position:"left",
        },
        {
            icone:"fas fa-futbol",
            name: "F.C. LA CROIX CORLAY",
            activity: "Football",
            address: "Stade de Keroger 1 & 2 - 22320 Corlay",
            phone: "02 96 29 40 41",
            website: "https://www.facebook.com/fc.lacroixcorlay/?locale=fr_FR",
            position:"left",
        },
        {
            icone:"fas fa-music",
            name: "Graines de musique",
            activity: "Musique",
            address: "7 rue Ste Anne - 22320 Corlay",
            phone: "02 96 29 98 51",
            website: "https://emacorlay.wixsite.com/emacorlay",
            position:"left",
        },
        {
            icone:"fas fa-hammer",
            name: "L'outil en main",
            activity: "Activités manuelles",
            address: "7 rue Ste Anne - 22320 Corlay",
            phone: " 02 96 29 45 73",
            website: "https://www.loutilenmain.fr/profile-detail/185800-loutil-en-main-du-pays-de-corlay",
            position:"left",
        },
        {
            icone:"fas fa-scissors",
            name: "Club Couture",
            activity: "Artisanat, bricolage, expositions",
            address: "7 rue Ste Anne - 22320 Corlay",
            phone: ".",
            website: "#",
            position:"left",
        },
        {
            icone:"fas fa-horse",
            name: "Courses de Corlay",
            activity: "Club de loisirs, relations, sports",
            address: "Hippodrome de Corlay",
            phone: "02 96 29 46 31",
            website: "www.guidedugalop.fr",
            position:"left",
        },
        {
            icone:"fas fa-car",
            name: "CSJ-Compétition",
            activity: "Sports mécaniques",
            address: "28 GrandRue - 22320 Corlay",
            phone: "06 11 59 18 28",
            website: "#",
            position:"left",
        },
        {
            icone:"fas fa-running",
            name: "Trail de Guerlédan",
            activity: "clubs de sports",
            address: "Kermaria - 22320 Corlay",
            phone: "07 82 38 91 76",
            website: "https://www.traildeguerledan.com/", 
            position:"left",
        },
    ]

    const sortedLoisirs = [...loisirs].sort((a, b) => 
        a.name.localeCompare(b.name, 'fr', { sensitivity: 'base' })
    );

    return(
        <div className="body-loisirs">
            <Helmet>
                <title>Loisirs à Corlay - Clubs de Sport, Lecture, Musique, Randonnée et Plus</title>
                <meta
                    name="description"
                    content="Découvrez les loisirs à Corlay : clubs de sport (volley, foot, tennis, multisport), club de lecture, musique, bricolage, randonnée et balades autour de l'étang. Des activités pour tous les âges et intérêts."
                />
                <meta
                    name="keywords"
                    content="Corlay, loisirs, clubs de sport, volley, football, tennis, multisport, club de lecture, bibliothèque, musique, randonnée, balade autour de l'étang, bricolage, activité de plein air"
                />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://commune-de-corlay.vercel.app/#/loisirs" />

                {/* Open Graph */}
                <meta property="og:title" content="Loisirs à Corlay - Clubs de Sport, Lecture, Musique, Randonnée et Plus" />
                <meta property="og:description" content="Rejoignez les clubs de sport à Corlay, profitez des activités culturelles à la bibliothèque, apprenez à bricoler ou partez en randonnée. Des loisirs pour tous les goûts !" />
                <meta property="og:image" content="https://commune-de-corlay.vercel.app/loisirs-page.jpg" />
                <meta property="og:url" content="https://commune-de-corlay.vercel.app/#/loisirs" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Loisirs de Corlay" />
                <meta property="fb:app_id" content="100063946335792" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Loisirs à Corlay - Clubs de Sport, Lecture, Musique, Randonnée et Plus" />
                <meta name="twitter:description" content="Explorez les clubs de sport, les activités culturelles et les loisirs à Corlay. Participez à des événements sportifs, des clubs de lecture, de musique et bien plus encore !" />
                <meta name="twitter:image" content="https://commune-de-corlay.vercel.app/loisirs-page.jpg" />
            </Helmet>
            <div className="typewriter">
                <h1 className="title1"><i className="fas fa-futbol"></i> Loisirs</h1>
            </div>
            <section className="intro-loisirs">
            <p className= "p-intro-loisirs">
                Les loisirs à Corlay offrent une multitude d'opportunités pour se détendre, se divertir et se connecter avec les autres. 
                Que vous soyez passionné de sport, amateur de musique, fervent lecteur ou curieux de découvrir de nouvelles activités, 
                vous trouverez votre bonheur parmi les clubs et associations locaux. Avec des options variées telles que le volley-ball, 
                le football, la musique, le bricolage ou encore les randonnées autour de l'étang, 
                chaque habitant et visiteur peut s'épanouir en suivant ses passions. 
            </p>
            <p className= "p-intro-loisirs">
                Découvrez tout ce que Corlay a à offrir et rejoignez une communauté dynamique où le plaisir et le partage sont au rendez-vous !
            </p>
            </section>
            <section className="loisir-section">
                {sortedLoisirs.map((loisirs, index) => (
                    <LoisirsCard
                        key={index}
                        icone={loisirs.icone}
                        name={loisirs.name}
                        activity={loisirs.activity}
                        address={loisirs.address}
                        phone={loisirs.phone}
                        website= {loisirs.website}
                        position={loisirs.position}
                    />
                ))}
            </section>
        </div>
    )
}
export default Loisirs;