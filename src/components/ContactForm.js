import React from "react";
import { useState } from "react";
import Modal from "react-modal";
import "./ContactForm.css";

Modal.setAppElement('#root');

function ContactForm() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
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
        
        fetch('http://localhost:8080/email/register', {
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

    const isFormValid = fullName && email && phoneNumber;

    return(
        <div className="contactForm">
            <h1 className="formHeader">לפגישת ייעוץ חינם השאר פרטים</h1>
            <form className="form" onSubmit={handleSubmit}>
                <input type="text" id="name" value={fullName} placeholder="שם מלא" required onChange={(e) => setFullName(e.target.value)}></input>
                <input type="email" id="email" value={email} placeholder="אימייל" required onChange={(e) => setEmail(e.target.value)}></input>
                <input type="tel" id="phone" value={phoneNumber} placeholder="טלפון" required onChange={(e) => setPhoneNumber(e.target.value)}></input>
                <input type="text" id="subject" value={subject} placeholder="נושא פניה" required onChange={(e) => setSubject(e.target.value)}></input>
                <button type="submit" className="formSubmitButton" disabled={!isFormValid}>שלח</button>
            </form>
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
    );
}

export default ContactForm;
