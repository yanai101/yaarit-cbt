import { Key, Pencil } from 'lucide-react';

export default function RemedialInfoContent() {
  return (
    <div className="remedial-content-wrapper">
      <div className="info-section center-text">
        <div className="icon-header">
           <div className="icon-composite-large">
             <Key size={48} color="var(--color-sage)" />
             <Pencil size={24} color="var(--color-text)" className="icon-overlay-large" />
           </div>
        </div>
        <p className="intro-text">
          יותר מאשר "עזרה בשיעורי בית" – מדובר בבניית ארגז כלים לחיים. 
          תהליך המקנה אסטרטגיות למידה מותאמות אישית לילדים עם הפרעות קשב ולקויות למידה, 
          במטרה להפוך את הלמידה לחוויה של מסוגלות.
        </p>
      </div>

      <div className="info-section">
        <h3>מה כולל התהליך?</h3>
        <ul className="info-list">
          <li><strong>אסטרטגיות למידה:</strong> כלים להתארגנות, זיכרון וניהול זמן.</li>
          <li><strong>צמצום פערים:</strong> עבודה ממוקדת על קריאה, כתיבה וחשבון בהתאם לקצב האישי.</li>
          <li><strong>חיזוק תחושת המסוגלות:</strong> חוויות הצלחה הבונות ביטחון עצמי לימודי.</li>
          <li><strong>מענה רגשי:</strong> התייחסות לתסכולים וחרדות הקשורים לבית הספר וללמידה.</li>
        </ul>
      </div>

      <div className="info-section highlight-box">
        <p>
          <strong>גמישות מלאה:</strong> השירות ניתן כתהליך הוראה מתקנת ממוקד, 
          או כחלק משולב בטיפול הרגשי (CBT) למעטפת שלמה לילד.
        </p>
      </div>
    </div>
  );
}
