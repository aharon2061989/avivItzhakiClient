import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <footer>
            <div className="footer-container">
                <div className="footerSection">
                    <p><b style={{color:"white"}}>© 2024 כל הזכויות שמורות לאביב יצחקי</b></p>
                </div>
                <div className="footerSection">
                    <h4>צור קשר</h4>
                    <p>טלפון: <a href="tel:+97212345678">050-406-6900</a></p>
                    <p style={{direction:"rtl"}}><b style={{color:"white"}}>דוא"ל: </b><a href="mailto:avivtaxes@gmail.com">avivtaxes@gmail.com</a></p>
                </div>
                <div className="footerSection">
                    <h4>קישורים חשובים</h4>
                    <ul>
                        <li><Link to="/InformationGeneral#top" onClick={scrollToTop}>מידע כללי</Link></li>
                        <li><Link to="/ContactPage" onClick={scrollToTop}>צור קשר</Link></li>
                        <li><Link to="/PrivacyPolicy" onClick={scrollToTop}>מדיניות פרטיות ותנאי שימוש</Link></li>
                    </ul>
                </div>
                <div className="footerSection">
                    <h4>עקבו אחרי</h4>
                    <br />
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} size="2xl" style={{color: "#1877F7"}} /></a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} size="2xl" style={{color: "#f773c7"}} /></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
