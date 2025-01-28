import FranceTravail from '../../assets/images/logos/Logo-France-Travail.webp';
import Impots from '../../assets/images/logos/Logo-impots.webp';
import Caf from '../../assets/images/logos/logoCAF.webp';
import Ameli from '../../assets/images/logos/logo-ameli.webp';
import Retraite from '../../assets/images/logos/logo-Info-retraite.webp';
import Carsat from '../../assets/images/logos/Logo_Carsat.webp';
import Formation from '../../assets/images/logos/mon-compte-formation.webp';
import Prevention from '../../assets/images/logos/logo-compte-pro-precention.webp';
import Msa from '../../assets/images/logos/logo-Msa.webp';
import Urssaf from '../../assets/images/logos/Urssaf.webp';

import './socialDash.css';

function SocialDash() {
    return(
        <section className="container-portail">
            <h2 className="title23">Portail familial et social</h2>
            <div className="box-link-portail">
                <a href="https://caf.fr/" className="link-portail p1" target="_blank" rel="noopener noreferrer" aria-label ='Ouvrir dans un autre onglet'><img className="logo-portail" src ={Caf} alt="Logo Caf"/> </a>
                <a href="https://www.ameli.fr/cotes-d-armor/assure" className="link-portail p2" target="_blank" rel="noopener noreferrer" aria-label ='Ouvrir dans un autre onglet'><img className="logo-portail" src ={Ameli} alt="Logo Ameli"/> </a>
                <a href="https://www.info-retraite.fr/portail-info/home.html" className="link-portail p3" target="_blank" rel="noopener noreferrer" aria-label ='Ouvrir dans un autre onglet'><img className="logo-portail" src ={Retraite} alt="Logo Info retraite"/> </a>
                <a href="https://www.carsat-bretagne.fr/home.html" className="link-portail p4" target="_blank" rel="noopener noreferrer" aria-label ='Ouvrir dans un autre onglet'><img className="logo-portail" src ={Carsat} alt="Logo Carsat"/> </a>
                <a href="https://armorique.msa.fr/lfp" className="link-portail p5" target="_blank" rel="noopener noreferrer" aria-label ='Ouvrir dans un autre onglet'><img className="logo-portail" src ={Msa} alt="Logo Msa"/> </a>
            </div>
            <h2 className="title23">Portail professionnel</h2>
            <div className="box-link-portail">
                <a href="https://www.francetravail.fr/accueil/" className="link-portail p6" target="_blank" rel="noopener noreferrer" aria-label ='Ouvrir dans un autre onglet'><img className="logo-portail" src ={FranceTravail} alt="Logo de France Travail candidat"/> </a>
                <a href="https://www.impots.gouv.fr/particulier/jaccede-mon-espace-particulier-et-mes-services-en-ligne" className="link-portail p7" target="_blank" rel="noopener noreferrer" aria-label ='Ouvrir dans un autre onglet'><img className="logo-portail" src ={Impots} alt="Logo Impôts"/> </a>
                <a href="https://www.moncompteformation.gouv.fr/espace-prive/html/#/" className="link-portail p8" target="_blank" rel="noopener noreferrer" aria-label ='Ouvrir dans un autre onglet'><img className="logo-portail" src ={Formation} alt="Logo Mon compte de formation"/> </a>
                <a href="https://salarie.compteprofessionnelprevention.fr/espacesalarie/#/" className="link-portail p9" target="_blank" rel="noopener noreferrer" aria-label ='Ouvrir dans un autre onglet'><img className="logo-portail" src ={Prevention} alt="Logo compte professionnel de prévention"/> </a>
                <a href="https://www.urssaf.fr/accueil.html" className="link-portail p10" target="_blank" rel="noopener noreferrer" aria-label ='Ouvrir dans un autre onglet'><img className="logo-portail" src ={Urssaf} alt="Logo Urssaf"/> </a>
            </div>
        </section>
    )
}
export default SocialDash;