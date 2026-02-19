import { Heart, Pencil } from 'lucide-react';
import { motion } from 'framer-motion';
import './WinningCombination.css';

export default function WinningCombination() {
  return (
    <section className="winning-combo-section">
      <div className="container winning-combo-container">
        
        <motion.div 
          className="combo-icon-wrapper"
          initial={{ scale: 0.95, opacity: 0, rotate: -20 }}
          whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
          animate={{ y: [0, -15, 0] }}
          viewport={{ once: true }}
          transition={{ 
            scale: { type: "spring", stiffness: 260, damping: 20 },
            y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <div className="icon-bg">
            <Heart size={64} className="icon-heart" />
            <Pencil size={40} className="icon-pencil" />
          </div>
        </motion.div>

        <motion.div 
          className="combo-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="section-title">השילוב המנצח: CBT והוראה מתקנת</h2>
          <p className="combo-text">
            השילוב בין כלים רגשיים לאסטרטגיות למידה מעניק לילד מעטפת שלמה. 
            אנחנו לא רק מלמדים את החומר - אנחנו בונים חוסן רגשי, מעניקים אסטרטגיות למידה מותאמות אישית, 
            והופכים את הלמידה למקור של הצלחה ותחושת מסוגלות.
          </p>
          <p className="combo-disclaimer">
            <strong>ניתן להזמין שירותי הוראה מתקנת בנפרד או כחלק מתהליך רגשי משולב.</strong>
          </p>
        </motion.div>

      </div>
    </section>
  );
}
