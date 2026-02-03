import { Phone, Mail, MapPin } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container contact-wrapper">
        <div className="contact-info">
          <h2 className="section-title" style={{textAlign: 'right'}}>צור קשר</h2>
          <p className="contact-desc">
            אני מזמינה אתכם לשיחת היכרות ראשונית, ללא התחייבות.
            נבדוק יחד האם הטיפול מתאים לכם או לילדכם.
          </p>
          
          <div className="contact-methods">
            <a href="https://wa.me/972506989894" target="_blank" className="contact-item whatsapp-btn">
              <Phone size={20} />
              <span>שלחו הודעת וואטסאפ (050-6989894)</span>
            </a>
            <div className="contact-item">
              <Mail size={20} color="var(--color-sage)" />
              <span>yaaritcbt@gmail.com</span>
            </div>
            <div className="contact-item">
              <MapPin size={20} color="var(--color-sage)" />
              <span>קליניקה פרטית ב[עיר], או בזום</span>
            </div>
          </div>
        </div>
        
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <h3>צעד ראשון לשינוי משמעותי</h3>
          <div className="form-group">
            <label htmlFor="name">שם מלא</label>
            <input type="text" id="name" placeholder="שם מלא" />
          </div>
          <div className="form-group">
            <label htmlFor="phone">טלפון</label>
            <input type="tel" id="phone" placeholder="מספר טלפון" />
          </div>
          <div className="form-group">
            <label htmlFor="subject">נושא הפנייה</label>
            <input type="text" id="subject" placeholder="במה מדובר?" />
          </div>
          <div className="form-group">
            <label htmlFor="message">הודעה (לא חובה)</label>
            <textarea id="message" rows="4" placeholder="כתבו כאן..."></textarea>
          </div>
          <button type="submit" className="btn btn-block">שלח הודעה</button>
        </form>
      </div>
    </section>
  )
}
