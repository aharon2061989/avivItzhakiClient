import React from "react";
import './NavbarComponent.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faSquareWhatsapp} from '@fortawesome/free-brands-svg-icons'; 
import { Link } from "react-router-dom";

function NavbarComponent() {
    return(
        <div>
            <div className="navbar">
                <div className="leftIcons">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} size="2xl" style={{color: "#1877F7",}}/></a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} size="2xl" style={{color: "#f773c7",}}/></a>
                    <a href="https://wa.me/972504066900" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faSquareWhatsapp} size="2xl" style={{color: "#028860",}}/></a>
                </div>
                <div className="rightIcons">

                <div className="links">
                    <div className="dropdown">
                        <Link className="secondNav" id="information"><h3>מידע</h3></Link>
                        <div className="dropdown-content">
                            <Link to="/SeverancePayInfo">החזר עבור משיכת פיצויים</Link>
                            <Link to="/EducationFundInfo">החזר עבור משיכת קרן השתלמות</Link>
                            <Link to="/PensionInfo">החזר עבור משיכת פנסיה</Link>
                            <Link to="/InformationGeneral">החזרי מס כללי</Link>
                        </div>
                    </div>
                    <Link to='/Forms' className="secondNav"><h3>טפסים להורדה</h3></Link>
                    <Link to='/ContactPage' className="secondNav"><h3>צור קשר</h3></Link>
                    <Link to='/' className="secondNav" id=""><h3>ראשי</h3></Link>
                </div>


                    <a className="phone" href="tel:+972504066900"><h4>050-406-6900</h4></a>
                    <FontAwesomeIcon className="icon" icon={faPhone} flip="horizontal"
                    size="xl" style={{"--fa-secondary-color": "#ffffff",}}/>
                    <a className="email" href="mailto:avivtaxes@gmail.com"><h4>avivtaxes@gmail.com</h4></a>
                    <FontAwesomeIcon className="icon" icon={faEnvelope} size="xl"/>
                </div>
            </div>
        </div>
    );
}

export default NavbarComponent;
