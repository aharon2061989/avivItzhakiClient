import React from "react";
import "./InformationGeneral.css";
import ContactForm from "./ContactForm"

function InformationGeneral() {

    return(
        <div>
            <div className="informationGeneralHeader">
                <img src="/tax-return-image.jpg" alt="tax return" title="Image by freepik" className="informationGeneralImage"/>
                <div className="textInfo">
                    <h1>החזרי מס כלליים ובקשה להחזר מס.</h1>
                    <h3>סיבות נפוצות להחזרי מס:</h3>
                    <h4>עבודה חלקית: עבודה פחות משנה קלנדרית יכולה לזכות בהחזרי מס.</h4>
                    <h4>חופשת לידה: נשים שיצאו לחופשת לידה עשויות להיות זכאיות להחזר מס.</h4>
                    <h4>שינויים בשכר: שינוי בשכר במהלך השנה עשוי לזכות בהחזר מס.</h4>
                    <h4>תרומות: החזרי מס על תרומות לעמותות מוכרות.</h4>
                    <h4>הוצאות רפואיות: החזרי מס על הוצאות רפואיות חריגות.</h4>
                    <h3>איך אנחנו יכולים לעזור ?</h3>
                    <h4>אנו מציעים שירותי ייעוץ והכוונה בנושא החזרי מס לשכירים, שיעזרו לכם למצות את מלוא זכויותיכם במהירות ויעילות.</h4>
                    <h2>לפרטים נוספים ולקבלת ייעוץ אישי, אנא השאירו את פרטיכם בעמוד הקשר שלנו ואנו נחזור אליכם בהקדם האפשרי.</h2>
                </div>
            </div>
            <ContactForm/>
        </div>
    )
}

export default InformationGeneral;