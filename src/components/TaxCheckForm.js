import React, { useState } from "react";
import './TaxCheckForm.css';
import Modal from "react-modal";

function TaxCheckForm() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const openModal = () => setModalIsOpen(true);
    const closeModal = () => setModalIsOpen(false);
    const [isFormComplete, setIsFormComplete] = useState(true);

    const [formData, setFormData] = useState({
        salary:"",
        partnerSalary:"",
        cashWithdrawal:"",
        jobChange:"",
        babyBirth:"",
        capitalMarketLose:"",
        unemployed:"",
        divorceAndPayFoods:"",
        taxPaid:"",
        fullName:"",
        phoneNumber:"",
        email:"",
        agreeToContact:false
    });

    const isFormValid = () => {
        const { salary, partnerSalary, cashWithdrawal, jobChange, fullName, phoneNumber, email, agreeToContact } = formData;
        console.log('Form Data:', formData);
        return salary && partnerSalary && cashWithdrawal && jobChange && fullName && phoneNumber && email && agreeToContact;
    };

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    
        if (!isFormValid()) {
            console.log('Form is not valid');
            setIsFormComplete(false);
            openModal();
            console.log(formData)
            return;
        }

        console.log(formData);

        
    
        fetch('https://aviv-itzhaki-server-9c0d7550483a.herokuapp.com/email/taxCheckForm', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        .then(response => response.text())
        .then(data => {
            console.log('Success:', data);
            setIsFormComplete(true);
            openModal();
        })
        .catch(error => {
            console.error('Error:', error);
            setIsFormComplete(false);
            openModal();
        });
    };

    return(
        <div className="formConteiner">
            <h1>בצעו בדיקת זכאות להחזר מס כעת</h1>
            <div className="questionsConteiner">
                <div className="question">
                    <label>משכורת חודשית ממוצעת (ברוטו):</label>
                    <select name="salary" value={formData.salary} onChange={handleChange}>
                        <option value="">יש לבחור משכורת מהרשימה</option>
                        <option> עד 6000  ש"ח</option>
                        <option> כ- 7000 ש"ח</option>
                        <option> כ- 8000 ש"ח</option>
                        <option> כ- 9000 ש"ח</option>
                        <option> כ- 10,000 ש"ח</option>
                        <option> כ- 11,000 ש"ח</option>
                        <option> כ- 12,000 ש"ח</option>
                        <option> כ- 13,000 ש"ח</option>
                        <option> כ- 14,000 ש"ח</option>
                        <option> כ- 15,000 ש"ח</option>
                        <option> כ- 16,000 ש"ח</option>
                        <option> כ- 17,000 ש"ח</option>
                        <option> כ- 18,000 ש"ח</option>
                        <option> כ- 19,000 ש"ח</option>
                        <option> כ- 20,000 ש"ח</option>
                        <option> כ- 21,000 ש"ח</option>
                        <option> כ- 22,000 ש"ח</option>
                        <option> כ- 23,000 ש"ח</option>
                        <option> כ- 24,000 ש"ח</option>
                        <option> כ- 25,000 ש"ח</option>
                        <option> כ- 26,000 ש"ח</option>
                        <option> כ- 27,000 ש"ח</option>
                        <option> כ- 28,000 ש"ח</option>
                        <option> כ- 29,000 ש"ח</option>
                        <option> כ- 30,000 ש"ח</option>
                        <option> מעל- 30,000 ש"ח</option>
                    </select>
                </div>

                <div className="question">
                    <label>משכורת בן/בת הזוג:</label>
                    <select name="partnerSalary" value={formData.partnerSalary} onChange={handleChange}>
                        <option value="">בחר</option>
                        <option>אין לי בן/בת זוג</option>
                        <option> עד 6000  ש"ח</option>
                        <option> כ- 7000 ש"ח</option>
                        <option> כ- 8000 ש"ח</option>
                        <option> כ- 9000 ש"ח</option>
                        <option> כ- 10,000 ש"ח</option>
                        <option> כ- 11,000 ש"ח</option>
                        <option> כ- 12,000 ש"ח</option>
                        <option> כ- 13,000 ש"ח</option>
                        <option> כ- 14,000 ש"ח</option>
                        <option> כ- 15,000 ש"ח</option>
                        <option> כ- 16,000 ש"ח</option>
                        <option> כ- 17,000 ש"ח</option>
                        <option> כ- 18,000 ש"ח</option>
                        <option> כ- 19,000 ש"ח</option>
                        <option> כ- 20,000 ש"ח</option>
                        <option> כ- 21,000 ש"ח</option>
                        <option> כ- 22,000 ש"ח</option>
                        <option> כ- 23,000 ש"ח</option>
                        <option> כ- 24,000 ש"ח</option>
                        <option> כ- 25,000 ש"ח</option>
                        <option> כ- 26,000 ש"ח</option>
                        <option> כ- 27,000 ש"ח</option>
                        <option> כ- 28,000 ש"ח</option>
                        <option> כ- 29,000 ש"ח</option>
                        <option> כ- 30,000 ש"ח</option>
                        <option> מעל- 30,000 ש"ח</option>
                    </select>
                </div>

                <div className="question">
                    <label>האם משכת כספים מקרן הפנסיה, קופת גמל, פיצויים או קרן השתלמות ושילמת מס?</label>
                    <select name="cashWithdrawal" value={formData.cashWithdrawal} onChange={handleChange}>
                        <option value="">בחר</option>
                        <option>כן</option>
                        <option>לא</option>
                    </select>
                </div>

                <div className="question">
                    <label>האם ב-6 השנים האחרונות החלפת עבודות?</label>
                    <select name="jobChange" value={formData.jobChange} onChange={handleChange}>
                        <option value="">בחר</option>
                        <option>כן</option>
                        <option>לא</option>
                    </select>
                </div>
            </div>

            <div className="questionsConteiner">
                <div className="question">
                    <label>האם נולד לך ילד / ילדה ב- 6 השנים האחרונות?</label>
                    <select name="babyBirth" value={formData.babyBirth} onChange={handleChange}>
                        <option value="">בחר</option>
                        <option>כן</option>
                        <option>לא</option>
                    </select>
                </div>

                <div className="question">
                    <label>האם ספגת הפסדים בשוק ההון ב-6 השנים האחרונות?</label>
                    <select name="capitalMarketLose" value={formData.capitalMarketLose} onChange={handleChange}>
                        <option value="">בחר</option>
                        <option>כן</option>
                        <option>לא</option>
                    </select>
                </div>

                <div className="question">
                    <label>האם הייתה לך תקופה ללא תעסוקה ב-6 השנים האחרונות?</label>
                    <select name="unemployed" value={formData.unemployed} onChange={handleChange}>
                        <option value="">בחר</option>
                        <option>כן</option>
                        <option>לא</option>
                    </select>
                </div>

                <div className="question">
                    <label>האם אתה גרוש ומשלם מזונות?</label>
                    <select name="divorceAndPayFoods" value={formData.divorceAndPayFoods} onChange={handleChange}>
                        <option value="">בחר</option>
                        <option>כן</option>
                        <option>לא</option>
                    </select>
                </div>
            </div>

            <div className="questionsConteiner">

                <div className="question">
                    <label>האם שילמת מס הכנסה ב-6 השנים האחרונות?</label>
                    <select name="taxPaid" value={formData.taxPaid} onChange={handleChange}>
                        <option value="">בחר</option>
                        <option>כן</option>
                        <option>לא</option>
                    </select>
                </div>

                <div className="questionsConteiner">
                    <div className="question">
                        <input
                            className="nameInput"
                            type="text"
                            placeholder="שם מלא"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="question">
                        <input
                            className="nameInput"
                            type="text"
                            placeholder="טלפון"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="question">
                        <input
                            className="nameInput"
                            type="email"
                            placeholder="מייל"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="custom-checkbox">
                    <input
                        type="checkbox"
                        name="agreeToContact"
                        id="checkbox"
                        checked={formData.agreeToContact}
                        onChange={handleChange}
                    />
                    <label htmlFor="checkbox">אני מאשר/ת שיחזרו אלי להמשך התהליך</label>
                </div>

            </div>

            <div className="questionsConteiner">
                <button className="sendButton" onClick={handleSubmit}>שלח</button>
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
                {isFormComplete ? (
                    <div style={{ textAlign: 'center', direction: "rtl" }}>
                        <h2>תודה שפנית אלינו</h2>
                        <p>פרטיך נקלטו בהצלחה וניצור איתך קשר בהקדם האפשרי.</p>
                        <button onClick={closeModal} style={{ backgroundColor: '#007bff', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer', transition: 'background-color 0.3s' }}>סגירה</button>
                    </div>
                ) : (
                    <div style={{ textAlign: 'center', direction: "rtl" }}>
                        <h2>שגיאה</h2>
                        <p>יש למלא את כל השדות ולסמן את הצ'קבוקס.</p>
                        <button onClick={closeModal} style={{ backgroundColor: '#ff0000', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer', transition: 'background-color 0.3s' }}>סגירה</button>
                    </div>
                )}
            </Modal>

        </div>
    )
}

export default TaxCheckForm;
