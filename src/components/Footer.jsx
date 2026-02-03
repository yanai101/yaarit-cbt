import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>© {new Date().getFullYear()} יערית - טיפול CBT ממוקד. כל הזכויות שמורות.</p>
        <div className="footer-links">
           <a href="#about">אודות</a>
           <a href="#contact">צור קשר</a>
        </div>
      </div>
    </footer>
  )
}
