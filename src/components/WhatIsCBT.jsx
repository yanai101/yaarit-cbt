import './WhatIsCBT.css';

export default function WhatIsCBT() {
  return (
    <section id="cbt" className="section cbt-info">
      <div className="container">
        <h2 className="section-title">מה זה CBT?</h2>
        <div className="cbt-explanation">
          <p>
            CBT (טיפול קוגניטיבי-התנהגותי) הוא טיפול קצר מועד וממוקד מטרה, המתמקד בקשר שבין המחשבות, הרגשות וההתנהגות שלנו.
            בניגוד לשיטות אחרות המתמקדות בעבר, ב-CBT אנחנו מתמקדים ב"כאן ועכשיו" - בבעיות שמפריעות לנו היום ובדרכים הפרקטיות לפתור אותן.
          </p>
          <div className="cbt-tags">
            <span className="tag">חרדה</span>
            <span className="tag">לחץ</span>
            <span className="tag">מיומנויות חברתיות</span>
            <span className="tag">ביטחון עצמי</span>
            <span className="tag">ויסות רגשי</span>
          </div>
        </div>
      </div>
    </section>
  )
}
