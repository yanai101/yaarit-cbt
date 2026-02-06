import { House } from 'lucide-react';

export default function ParentingInfoContent() {
  return (
    <div className="parenting-content-wrapper">
      <div className="info-section center-text">
        <div className="icon-header">
           <House size={48} color="var(--color-terracotta)" />
        </div>
        <p className="intro-text">
          אנחנו כאן כדי ליצור עבור הילד סביבה תומכת ומקדמת גם בבית. 
          ההדרכה מאפשרת לייצר גשר בין הטיפול בקליניקה לבין חיי היומיום, ולהפוך אתכם לשותפים פעילים בתהליך השינוי של ילדכם.
        </p>
      </div>

      <div className="info-section">
        <h3>מה כולל הליווי?</h3>
        <ul className="info-list">
          <li><strong>שותפות בדרך:</strong> ליווי כחלק בלתי נפרד מהטיפול הרגשי של הילד.</li>
          <li><strong>ניהול שגרה:</strong> כלים לניהול שגרה והתארגנות ללא מאבקי כוח.</li>
          <li><strong>למידה בבית:</strong> שילוב אסטרטגיות למידה (הוראה מתקנת) בחיי היומיום.</li>
          <li><strong>הקשר הורה-ילד:</strong> חיזוק הסמכות ההורית והקשר הקרוב עם הילד.</li>
        </ul>
      </div>

      <div className="info-section highlight-box">
        <p>
          <strong>ביחד יוצרים שינוי:</strong> כאשר הבית והטיפול מדברים באותה שפה, הילד מרגיש בטוח יותר והדרך להצלחה מתקצרת.
        </p>
      </div>
    </div>
  );
}
