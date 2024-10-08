import React, { useEffect, useState } from "react";
import "./PensionInfo.css";

function PensionInfo() {

    const [imageSrc, setImageSrc] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const img = new Image();
        img.src = "/images/pension-advice.jpg";
        img.onload = () => {
            setImageSrc(img.src);
            setIsLoaded(true);
        };
    }, []);

    return(
        <div>
            <div className="pensionInfoHeader">
            <img src={isLoaded ? imageSrc : ''} alt="pension Advice" title="Image by freepik" className="pensionAdviceImage" rel="preload" loading="lazy"/>
            <div className="infoText">
                    <h1>פנסיה.</h1>
                    <h4>תוכנית הפנסיה היא אחת מאבני היסוד של ביטחון כלכלי לעת פרישה. כל עובד זכאי להפרשות לפנסיה לאורך תקופת העבודה, שתאפשר לו לקבל קצבה חודשית לאחר הפרישה.</h4>
                    <h3>מהי פנסיה?</h3>
                    <h4>פנסיה היא חיסכון לטווח ארוך שמטרתו לספק הכנסה חודשית קבועה לאחר הפרישה מהעבודה. תוכנית הפנסיה מורכבת מהפרשות של העובד ושל המעסיק לקרן פנסיה או ביטוח פנסיוני.</h4>
                    <h4>
                        החזר מס למשיכת פנסיה בין השנים 2018 -2023
                        חל שינוי מהותי במיסוי על משיכת פנסיה בישראל. רבים מהפורשים לפנסיה אינם מודעים לכך שהם זכאים להחזרי מס משמעותיים על הכנסותיהם הפנסיוניות. במסגרת השינויים הרגולטוריים, נקבעו הקלות והטבות מס מיוחדות המיועדות להקטין את הנטל המס על פנסיונרים.
                    </h4>
                    <h4>
                    הרפורמות כללו הקלות במס על משיכות מוקדמות של פנסיה והרחבת הפטורים השונים. בעקבות כך, קיים פוטנציאל גדול לקבלת החזרים כספיים עבור פורשים שביצעו משיכות במהלך השנים האחרונות. חשוב להדגיש כי תהליך בקשת החזר המס דורש הגשת דוחות מס מסודרים, וביצוע בדיקות מול רשות המיסים על זכאות להחזר.</h4>
                    <h2>אם ביצעתם משיכות פנסיה בין השנים 2018-2023, פנו אלינו לייעוץ מקצועי ולבדוק את זכאותכם להחזרי מס. ייתכן שמגיע לכם סכומים נכבדים שיכולים לשפר את מצבכם הכלכלי.</h2>
                </div>
            </div>
        </div>
    )
}

export default PensionInfo;