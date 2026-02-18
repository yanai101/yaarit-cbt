import { useState } from 'react';
import { Phone, Mail, MapPin, Loader2, Send, CheckCircle, AlertCircle } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    // Israeli phone validation: 10 digits starting with 05
    const phoneRegex = /^05\d{8}$/;
    
    // Clean phone number for validation (remove non-digits)
    const cleanPhone = formData.phone.replace(/\D/g, '');

    if (!cleanPhone) {
      newErrors.phone = 'נא להזין מספר טלפון';
    } else if (!phoneRegex.test(cleanPhone)) {
      newErrors.phone = 'מספר טלפון לא תקין (צריך להיות 10 ספרות, מתחיל ב-05)';
    }

    if (!formData.name.trim()) {
       newErrors.name = 'נא להזין שם מלא';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    // Clear error for the field when user types
    if (errors[e.target.id]) {
        setErrors({...errors, [e.target.id]: null});
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    
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
        // Reset success message after a few seconds if desired, or keep it.
        setTimeout(() => setStatus('idle'), 5000);
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
          <h2 className="section-title">צור קשר</h2>
          <p className="contact-desc">
            אני מזמינה אתכם לשיחת היכרות ראשונית, ללא התחייבות.
            נבדוק יחד האם הטיפול מתאים לכם או לילדכם.
          </p>
          
          <div className="contact-methods">
            <a href="https://wa.me/972506989894" target="_blank" rel="noopener noreferrer" className="contact-item whatsapp-btn">
              <Phone size={20} />
              <span>שלחו הודעת וואטסאפ (050-6989894)</span>
            </a>
            <a href="mailto:yaaritcbt@gmail.com" className="contact-item">
              <Mail size={20} color="var(--color-sage-dark)" />
              <span>yaaritcbt@gmail.com</span>
            </a>
            <div className="contact-item">
              <MapPin size={20} color="var(--color-sage-dark)" />
              <span>קליניקה פרטית בירוחם, או בזום</span>
            </div>
          </div>
        </div>
        
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="form-header">
             <h3>צעד ראשון לשינוי משמעותי</h3>
             <p className="form-subtitle">השאירו פרטים ואחזור אליכם בהקדם</p>
             <p className="form-reassurance">אם יש התלבטות – זה טבעי. אפשר להתחיל משיחה קצרה, ללא התחייבות, כדי לבדוק מה מתאים לכם.</p>
          </div>

          <div className="form-group">
            <label htmlFor="name">שם מלא</label>
            <input 
              type="text" 
              id="name" 
              placeholder="שמך המלא" 
              value={formData.name}
              onChange={handleChange}
              className={errors.name ? 'input-error' : ''}
            />
            {errors.name && <span className="error-text"><AlertCircle size={14}/> {errors.name}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="phone">טלפון</label>
            <input 
              type="tel" 
              id="phone" 
              placeholder="05X-XXXXXXX" 
              value={formData.phone}
              onChange={handleChange}
              className={errors.phone ? 'input-error' : ''}
              dir="ltr"
              style={{textAlign: 'right'}}
            />
             {errors.phone && <span className="error-text"><AlertCircle size={14}/> {errors.phone}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="subject">נושא הפנייה (אופציונלי)</label>
            <input 
              type="text" 
              id="subject" 
              placeholder="במה מדובר?" 
              value={formData.subject}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">הודעה (אופציונלי)</label>
            <textarea 
              id="message" 
              rows="4" 
              placeholder="כאן אפשר לפרט קצת יותר..."
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          
          <button type="submit" className={`btn btn-block ${status}`} disabled={status === 'loading' || status === 'success'}>
            {status === 'loading' ? (
              <span className="flex-center gap-2"><Loader2 className="spin" size={20}/> שולח...</span>
            ) : status === 'success' ? (
              <span className="flex-center gap-2">נשלח בהצלחה <CheckCircle size={20}/></span>
            ) : (
              <span className="flex-center gap-2">שלח הודעה <Send size={18}/></span>
            )}
          </button>
          
          {status === 'error' && (
            <div className="form-message error">
                <AlertCircle size={16}/>
                <span>אירעה שגיאה בשליחה. אנא נסו שוב או פנו בוואטסאפ.</span>
            </div>
          )}
           {status === 'success' && (
            <div className="form-message success">
                תודה פנייתך התקבלה! אצור קשר בהקדם.
            </div>
          )}
        </form>
      </div>
    </section>
  )
}
