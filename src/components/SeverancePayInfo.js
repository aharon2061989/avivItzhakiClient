import React from "react";
import "./SeverancePayInfo.css";
import ContactForm from "./ContactForm"

function SeverancePayInfo() {

    return(
        <div>
            <div className="severancePayInfoHeader">
                <img src="/images/severance-pay.jpg" alt="Severance Pay" title="Image by freepik" className="secerancePayImage"/>
                <div className="infoText">
                    <h1>פיצויי פיטורין והחזרי מס.</h1>
                    <h4>פיצויי פיטורין הם סכום כסף המשולם לעובד שפוטר ממקום עבודתו, או התפטר בתנאים מסוימים. עובדים רבים אינם מודעים לזכויותיהם ולמיסים הכרוכים בקבלת פיצויים אלה. בעמוד זה נסקור את נושא פיצויי הפיטורין והחזר המס עבור עובדים ששילמו מס מירבי בעת משיכת הפיצויים מחברת הביטוח בין השנים 2018 ועד 2023.</h4>
                    <h4>בעת קבלת פיצויי פיטורין, ישנם מקרים בהם העובד נדרש לשלם מס על הסכום שקיבל. המיסוי נקבע לפי שיעורי המס הנהוגים באותה שנה, וכמות הפיצויים שנמשכה.</h4>
                    <h3><b
                        >משיכת  כספי פיצויים מחברת הביטוח בשנים 2018-2023  
                        בשנים האחרונות, רבים משכו את הפיצויים מחברת הביטוח ושילמו מס מירבי.
                         עם זאת, ישנם מצבים בהם ניתן להגיש בקשה להחזר מס ולזכות בהחזר חלק מהמס ששולם.
                    </b></h3>
                    <h2>אם ביצעתם משיכת כפסי פיצויי פיטורין מחברת הביטוח בין השנים 2018-2023, פנו אלינו לייעוץ מקצועי ולבדוק את זכאותכם להחזרי מס. ייתכן שמגיע לכם סכומים נכבדים שיכולים לשפר את מצבכם הכלכלי.</h2>


                </div>
            </div>
            <ContactForm/>
        </div>

    )
}

export default SeverancePayInfo;