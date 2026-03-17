import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
          <img src="/mindstep-logo.jpg" alt="לוגו MindStep" style={{ width: '80px', height: '80px', objectFit: 'contain' }} />
        </div>
        <p>MindStep – טיפול CBT בגובה העיניים. מטפלת CBT מוסמכת ומומחית להוראה מתקנת.</p>
        <p className="contact-info">
          טלפון: <a href="tel:0506989894">050-6989894</a> | דוא"ל: <a href="mailto:yaaritcbt@gmail.com">yaaritcbt@gmail.com</a>
        </p>
        <p className="location-info">קליניקה פרטית בירוחם | טיפול אונליין בזום</p>
        <div className="footer-links">
           <a href="#about">אודות</a>
           <a href="#contact">צור קשר</a>
        </div>
        <p className="copyright">© {new Date().getFullYear()} כל הזכויות שמורות.</p>
      </div>
    </footer>
  )
}
