import { useState } from 'react';
import { Phone, Mail, MapPin, Loader2, Send } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', phone: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
    }
  };

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
              <span>קליניקה פרטית בירוחם, או בזום</span>
            </div>
          </div>
        </div>
        
        <form className="contact-form" onSubmit={handleSubmit}>
          <h3>צעד ראשון לשינוי משמעותי</h3>
          <div className="form-group">
            <label htmlFor="name">שם מלא</label>
            <input 
              type="text" 
              id="name" 
              placeholder="שם מלא" 
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">טלפון</label>
            <input 
              type="tel" 
              id="phone" 
              placeholder="מספר טלפון" 
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="subject">נושא הפנייה</label>
            <input 
              type="text" 
              id="subject" 
              placeholder="במה מדובר?" 
              value={formData.subject}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">הודעה (לא חובה)</label>
            <textarea 
              id="message" 
              rows="4" 
              placeholder="כתבו כאן..."
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          
          <button type="submit" className="btn btn-block" disabled={status === 'loading' || status === 'success'}>
            {status === 'loading' ? (
              <span className="flex-center gap-2"><Loader2 className="spin" size={20}/> שולח...</span>
            ) : status === 'success' ? (
              <span className="flex-center gap-2">ההודעה נשלחה בהצלחה!</span>
            ) : (
              <span className="flex-center gap-2">שלח הודעה <Send size={18}/></span>
            )}
          </button>
          
          {status === 'error' && (
            <p className="form-error">אירעה שגיאה בשליחה. אנא נסו שוב או פנו בוואטסאפ.</p>
          )}
        </form>
      </div>
    </section>
  )
}
