import './medicalSection.css';

function MedicalSection({ title, address, phone, items, icon }) {
    return (
        <figure className="medi-section">
            <h2 className="title2">
                <i className={`fa-solid ${icon}`}></i> {title}
            </h2>
            <span className="adress">
                <i className="fa-solid fa-location-dot"></i> {address} <br />
                <i className="fa-solid fa-phone"></i> {phone}<br /><br />
            </span>
            <ul>
                {items.map((item, index) => (
                    <li key={index} className="adress-mairie">{item}</li>
                ))}
            </ul>
        </figure>
    );
}
export default MedicalSection;
