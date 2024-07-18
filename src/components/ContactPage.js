import React, { useState } from "react";
import './ContactPage.css';
import Modal from "react-modal";

Modal.setAppElement('#root');

function ContactPage() {
    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [modalIsOpen, setModalIsOpen] = useState(false);


    const openModal = () => setModalIsOpen(true);
    const closeModal = () => setModalIsOpen(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = {
            fullName,
            email,
            phoneNumber,
            subject
        };
        
        fetch('https://aviv-itzhaki-server-9c0d7550483a.herokuapp.com/email/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.text())
        .then(data => {
            openModal();
            setFullName(''); 
            setEmail('');     
            setPhoneNumber(''); 
            setSubject('');
            console.log("working!!!") 
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    

    return(
        <div className="contactUs">
            <img src="/images/contact-banner-2.jpg" alt="contact us" title="צור קשר" className="contactLogo"/>
            <div className="contactPageMain">
                <img src="/images/second-logo-contactPage.jpg" alt="contactPageLogo" title="logo" className="secondLogo" />
                <div className="contactPageForm">
                    <form className="contactFormInputs" onSubmit={handleSubmit}>
                        <input 
                            type="text"
                            id="fullName"
                            placeholder="שם מלא"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            required
                        />
                        <input 
                            type="text"
                            id="phoneNumber"
                            placeholder="טלפון"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            required
                        />
                        <input 
                            type="email"
                            id="email"
                            placeholder="מייל"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <input 
                            type="text"
                            id="contactPageSubject"
                            placeholder="נושא הפניה"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            required
                            className="subject"
                        />
                        <br/>
                        <button type="submit" className="contactPageFormButton">שליחת פרטים</button>
                    </form>
                </div>
            </div>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={{
                    overlay: {
                        backgroundColor: 'rgba(0, 0, 0, 0.6)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    },
                    content: {
                        top: '50%',
                        left: '50%',
                        right: 'auto',
                        bottom: 'auto',
                        marginRight: '-50%',
                        transform: 'translate(-50%, -50%)',
                        backgroundColor: '#fff',
                        color: '#333',
                        borderRadius: '12px',
                        padding: '20px',
                        width: '90%',
                        maxWidth: '500px',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.19)',
                    },
                }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #eee', paddingBottom: '10px', marginBottom: '15px', direction: "rtl" }}>
                    <h2 style={{ margin: '0' }}>תודה שפנית אלינו</h2>
                </div>
                <div style={{ textAlign: 'center' }}>
                    <p>.פרטיך נקלטו בהצלחה וניצור איתך קשר בהקדם האפשרי</p>
                    <button onClick={closeModal} style={{ backgroundColor: '#007bff', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer', transition: 'background-color 0.3s' }}>סגירה</button>
                </div>
            </Modal>
        </div>
    )
}

export default ContactPage;