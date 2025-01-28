import React, { useState } from 'react';
import './demarches.css';

const DemarchesEnLigne = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const handleButtonClick = (category) => {
    setActiveCategory(activeCategory === category ? null : category);
  };

  const categories = [
    {
      name: "Particulier",
      icon: "fa-user",
      items: [
        { link: "https://passeport.ants.gouv.fr/", label: "Carte d'identité" },
        { link: "https://passeport.ants.gouv.fr/", label: "Passeport" },
        { link: "https://permisdeconduire.ants.gouv.fr/demarches-en-ligne", label: "Permis de conduire" },
        { link: "https://immatriculation.ants.gouv.fr/", label: "Cartes grises" },
        { link: "https://www.service-public.fr/particuliers/vosdroits/R16396", label: "Demande d'inscription sur les listes électorales" },
        { link: "https://www.service-public.fr/particuliers/vosdroits/R2054", label: "Recensement citoyen obligatoire" },
        { link: "https://www.service-public.fr/particuliers/vosdroits/R11193", label: "Changement d'adresse en ligne" },
        { link: "https://www.service-public.fr/particuliers/vosdroits/R1406", label: "Demande d'acte de naissance : copie intégrale ou extrait (naissance en France)" },
        { link: "https://www.service-public.fr/particuliers/vosdroits/R1405", label: "Demande d'acte de naissance : copie intégrale ou extrait (naissance à l'étranger)" },
        { link: "https://www.service-public.fr/particuliers/vosdroits/R46526", label: "Signaler une fraude à la carte bancaire (Perceval)" },
        { link: "https://www.service-public.fr/particuliers/vosdroits/N31138", label: "Signalement ou dépôt de plainte d’arnaque sur internet" },
        { link: "https://www.service-public.fr/particuliers/vosdroits/F868", label: "Déclaration de changement de nom d'usage (nom de l'époux ou de l'épouse)" },
        { link: "https://www.service-public.fr/particuliers/vosdroits/N142", label: "Mariage" },
        { link: "https://www.service-public.fr/particuliers/vosdroits/R42837", label: "Demande d'acte de mariage (célébré en France)" },
        { link: "https://www.service-public.fr/particuliers/vosdroits/R42839", label: "Demande d'acte de mariage (célébré à l'étranger)" },
        { link: "https://www.service-public.fr/particuliers/vosdroits/R42838", label: "Demande d'acte de décès (survenu en France)" },
        { link: "https://www.service-public.fr/particuliers/vosdroits/R42839", label: "Demande d'acte de décès (survenu à l'étranger)" },
        { link: "https://www.service-public.fr/particuliers/vosdroits/R43241", label: "S'inscrire à l'opération tranquillité vacances" },
        { link: "https://www.service-public.fr/particuliers/vosdroits/R46162", label: "Pré-demande de Pacs" },
        { link: "https://www.service-public.fr/particuliers/vosdroits/R43250", label: "Registre des français à l'étranger - Renouvellement de l'inscription consulaire" },
        { link: "https://www.service-public.fr/particuliers/vosdroits/R43248", label: "Registre des français à l'étranger - Inscription consulaire" },
        { link: "https://www.service-public.fr/particuliers/vosdroits/R43249", label: "Registre des français à l'étranger - Actualisation" },
        { link: "https://www.service-public.fr/particuliers/vosdroits/R43251", label: "Registre des français à l'étranger - Radiation" },
        { link: "https://www.service-public.fr/particuliers/vosdroits/R45780", label: "Demander ses certificats (inscription ou radiation) et sa carte consulaire" },
        { link: "https://www.service-public.fr/particuliers/vosdroits/R49454", label: "Demande de correction d'état civil auprès de l'Insee" },
        { link: "https://www.service-public.fr/particuliers/vosdroits/R17897", label: "Déclarer en mairie des chambres d'hôtes" },
        { link: "https://www.service-public.fr/particuliers/vosdroits/R14321", label: "Déclarer en mairie un meublé de tourisme" },
        { link: "https://www.service-public.fr/particuliers/vosdroits/R51235", label: "Demande de publication au Journal officiel d'annonce préalable de changement de nom pour motif légitime" },
        { link: "https://www.service-public.fr/particuliers/vosdroits/R57680", label: "Demande en ligne de certificat de non-Pacs" },
        { link: "https://www.service-public.fr/particuliers/vosdroits/R52221", label: "Assistance pour votre demande d'autorisation d'urbanisme" },
      ]
    },
    {
      name: "Professionnel",
      icon: "fa-briefcase",
      items: [
        { link: "https://entreprendre.service-public.fr/vosdroits/R42920", label: "Déclaration en ligne d'une installation classée pour la protection de l'environnement (ICPE)" },
        { link: "https://entreprendre.service-public.fr/vosdroits/R62282", label: "Déposer une demande d'autorisation simplifiée (enregistrement)" },
        { link: "https://entreprendre.service-public.fr/vosdroits/R62929", label: "Déposer une déclaration IOTA (Installations, Ouvrages, Travaux et Activités)" },
        { link: "https://entreprendre.service-public.fr/vosdroits/R31441", label: "Demande de certificat individuel professionnel produits phytopharmaceutiques" },
        { link: "https://entreprendre.service-public.fr/vosdroits/R52861", label: "Demande d'examen préalable à la réalisation d'une étude d'impact" },
        { link: "https://entreprendre.service-public.fr/vosdroits/R57779", label: "Déposer une demande d'autorisation environnementale" },
        { link: "https://entreprendre.service-public.fr/vosdroits/R57298", label: "Demander l'agrément pour le crédit d'impôt recherche et/ou innovation (Cir-CII) - Organisme" },
        { link: "https://entreprendre.service-public.fr/vosdroits/R57297", label: "Demander l'agrément pour le crédit d'impôt recherche - Expert individuel" }
      ]
    },
    {
      name: "Association",
      icon: "fa-users",
      items: [
        { link: "https://www.service-public.fr/particuliers/vosdroits/R1757", label: "Création d'une association (e-création)" },
        { link: "https://www.service-public.fr/particuliers/vosdroits/R37933", label: "Modification d'une association (e-modification)" }
      ]     
    }
  ];

  return (
    <section className="adm">
      <h2 className="title21">
        <i className="fa-solid fa-pen"></i>Démarches en ligne
      </h2>

      <div className="buttons-container">
        {categories.map((category) => (
          <button
            key={category.name}
            className={`category-button ${activeCategory === category.name ? 'active' : ''}`}
            onClick={() => handleButtonClick(category.name)}
          >
            <i className={`fa-solid ${category.icon}`}></i>
            <p>{category.name}</p>
          </button>
        ))}
      </div>

      <div className="links-container">
        {activeCategory &&
          categories
            .find((category) => category.name === activeCategory)
            .items.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="link-card"
              >
                <i className="fa-solid fa-link"></i> {item.label}
              </a>
            ))}
      </div>
    </section>
  );
};

export default DemarchesEnLigne;
