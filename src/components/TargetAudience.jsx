import { motion } from 'framer-motion';
import { Baby, User } from 'lucide-react';
import './TargetAudience.css';

export default function TargetAudience() {
  return (
    <section id="target-audience" className="section target-audience">
      <div className="container">
        <h2 className="section-title">למי הטיפול מתאים?</h2>
        
        <div className="audience-grid">
          <motion.div 
            className="audience-card"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="card-header">
              <div className="icon-wrapper">
                <Baby size={40} color="var(--color-terracotta)" />
              </div>
              <h3>ילדים ונוער</h3>
            </div>
            <p>
              התמודדות עם קשיים בוויסות רגשי, אתגרים בבית הספר ובמסגרות, חרדות וקשיים חברתיים. הטיפול משלב עבודה עם ההורים.
            </p>
          </motion.div>
          
          <motion.div 
            className="audience-card"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="card-header">
              <div className="icon-wrapper">
                <User size={40} color="var(--color-sage)" />
              </div>
              <h3>מבוגרים</h3>
            </div>
            <p>
              ליווי בצמתים ומשברי חיים, שיפור הרווחה הנפשית (Well-being), התמודדות עם חרדה ושינוי דפוסים מעכבים.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
