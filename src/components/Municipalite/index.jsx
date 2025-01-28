
import React from "react";
import "./municipalite.css";
import Mairie from '../../assets/images/services/mairie.webp';
import Olivier from "../../assets/images/municipalite/Olivier-Allain.webp"; 

const Municipalite = () => {
    const elus = [
        "Mylène COURTOT",
        "Jacky SOUNDRON",
        "Daniel TRENDA",
        "Luc LE BARS",
        "Marie-Pierre RAOULT",
        "Marielle THOMAS",
        "Stéphane FRELAU",
        "Jacky BURLOT",
        "Victor COSTE",
        "Isabelle GANNE",
        "Candice GUDEMARD",
    ];

    const agents = [
        "Sylvie OGER",
        "Virginie MARCHAND",
        "Jérôme LE GUEVEL",
        "Kévin CHELIN",
    ];

    return (
        <section className="municipalite-section">
        <div className="municipalite-container">
            <MunicipaliteCard
            icon="fa-building"
            title="Mairie"
            content={
                <>
                <img src={ Mairie } className="mairie" alt="Mairie de Corlay" />
                <p>
                    <i className="fa-solid fa-location-dot"></i> 8, place de l'église
                </p>
                <p>22320 Corlay</p>
                <p>
                    <i className="fa-solid fa-phone"></i> 02 96 29 40 41
                </p>
                <p>
                    <i className="fa-solid fa-envelope"></i>{" "}
                    <a href="mailto:accueil@mairiecorlay.fr">accueil@mairiecorlay.fr</a>
                </p>
                </>
            }
            />

            <MunicipaliteCard
            icon="fa-user-tie"
            title="Le maire"
            content={
                <>
                <img
                    src={Olivier}
                    className="tof-maire"
                    alt="Portrait de Mr le maire de Corlay"
                />
                <p className="name">Olivier ALLAIN</p>
                </>
            }
            />

            <MunicipaliteCard
            icon="fa-users"
            title="Les élus"
            content={
                <ul className="list-items">
                {elus.map((elu, index) => (
                    <li key={index}>{elu}</li>
                ))}
                </ul>
            }
            />

            <MunicipaliteCard
            icon="fa-users-cog"
            title="Les agents municipaux"
            content={
                <ul className="list-items">
                {agents.map((agent, index) => (
                    <li key={index}>{agent}</li>
                ))}
                </ul>
            }
            />
        </div>
        </section>
    );
    };

    const MunicipaliteCard = ({ icon, title, content }) => (
    <div className="municipalite-card">
        <h2>
        <i className={`fa-solid ${icon}`}></i> {title}
        </h2>
        <div className="card-content">{content}</div>
    </div>
);

export default Municipalite;
