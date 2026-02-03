import { motion, AnimatePresence } from 'framer-motion';
import { X, Brain, Heart, Footprints } from 'lucide-react';
import './InfoModal.css';

export default function InfoModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div 
        className="modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div 
          className="modal-content"
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="modal-header">
            <button className="modal-close-btn" onClick={onClose} aria-label="סגור">
              <X size={28} />
            </button>
            <h2 className="modal-title">מהו טיפול CBT?</h2>
            <p className="modal-subtitle">טיפול קוגניטיבי-התנהגותי (Cognitive Warren Behavior Therapy)</p>
          </div>
          
          <div className="modal-body">
            <div className="info-section">
              <p>
                טיפול CBT הוא טיפול רגשי קצר וממוקד, המתמקד בכאן ועכשיו ובקשיים שמלווים את האדם בחיי היום-יום.
              </p>
              
              <div className="triangle-graphic">
                <div>
                   <Brain size={32} color="var(--color-sage)" style={{marginBottom: '0.5rem'}} />
                   <div>מחשבות</div>
                </div>
                <div style={{fontSize: '1.5rem', color: 'var(--color-text-light)'}}>↔</div>
                <div>
                   <Heart size={32} color="var(--color-terracotta)" style={{marginBottom: '0.5rem'}} />
                   <div>רגשות</div>
                </div>
                <div style={{fontSize: '1.5rem', color: 'var(--color-text-light)'}}>↔</div>
                <div>
                   <Footprints size={32} color="var(--color-sky)" style={{marginBottom: '0.5rem'}} />
                   <div>התנהגות</div>
                </div>
              </div>
              <p style={{textAlign: 'center', fontSize: '0.95rem', color: 'var(--color-text-light)'}}>
                הטיפול מבוסס על ההבנה שיש קשר הדוק בין מחשבות-רגשות-התנהגות, וכי שינוי בדפוסי חשיבה והתנהגות יכול להוביל להקלה רגשית ולשיפור משמעותי בתפקוד.
              </p>
            </div>

            <div className="info-section">
              <h3>במה מתמקד הטיפול?</h3>
              <ul className="info-list">
                <li><strong>זיהוי מצבים:</strong> משברים, קשיים רגשיים (חרדה, דיכאון, לחץ, כעסים, קשיים בין-אישיים ועוד).</li>
                <li><strong>הבנת דפוסים:</strong> חקירת דפוסי החשיבה והתגובות הרגשיות במצבים אלו.</li>
                <li><strong>לימוד כלים מעשיים:</strong> הקניית מיומנויות לוויסות רגשי, הרגעה, פתרון בעיות, חשיבה גמישה ושינוי הרגלים.</li>
                <li><strong>חיזוק:</strong> העצמת תחושת המסוגלות, השליטה והביטחון העצמי.</li>
              </ul>
            </div>

            <div className="info-section">
              <h3>במה הטיפול פחות עוסק?</h3>
              <p>
                הטיפול אינו מתמקד בניתוח ממושך של אירועי העבר, אלא ב-<strong>מה קורה בהווה</strong> ומה ניתן לשנות כדי להרגיש טוב יותר ולהתפקד בצורה מיטבה יותר.
              </p>
            </div>

            <div className="info-section">
              <h3>איך נראה הטיפול בפועל?</h3>
              <ul className="info-list">
                <li>טיפול מובנה ומותאם אישית.</li>
                <li>שיח פתוח וממוקד מטרה.</li>
                <li>תרגול כלים בתוך המפגש ובין מפגש למפגש (משימות בית).</li>
                <li>שיתוף פעולה פעיל של המטופל בתהליך.</li>
              </ul>
            </div>

             <div className="info-section" style={{marginBottom: 0, padding: '1.5rem', backgroundColor: 'rgba(156, 175, 136, 0.1)', borderRadius: 'var(--radius-md)'}}>
              <h3 style={{marginBottom: '0.5rem', border: 'none'}}>מטרת הטיפול</h3>
              <p>
               לאפשר לאדם להבין את עצמו טוב יותר, לרכוש כלים יישומיים להתמודדות עם מצבים רגשיים מאתגרים, וליצור שינוי משמעותי ויציב באיכות החיים.
              </p>
            </div>


          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
