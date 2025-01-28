import './cadaUrba.css';


function CadaUrba() {
    return(
        <section className ="container-cadaurba">
            <h2 className= "title2"> <i className="fas fa-building"></i>Cadastre et Urbanisme</h2>
            <div className= "container-cadaurba-link">
                <a href="https://cadastre.data.gouv.fr/" className= "link-cadaurba j1" target="_blank" rel="noopener noreferrer"><i className="fas fa-map-marker-alt"></i>Cadastre</a>
                <a href="https://www.bretagnecentre.bzh/vivre/habitat-urbanisme/urbanisme" className= "link-cadaurba j2"target="_blank" rel="noopener noreferrer"><i className="fas fa-map"></i>Urbanisme</a>
            </div>
        </section>
    )
}
export default CadaUrba;