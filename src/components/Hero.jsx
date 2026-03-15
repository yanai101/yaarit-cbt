import { useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, Heart, Pencil, House, Footprints, CheckCircle2 } from 'lucide-react';
import InfoModal from './InfoModal';
import CBTInfoContent from './CBTInfoContent';
import ParentingInfoContent from './ParentingInfoContent';
import RemedialInfoContent from './RemedialInfoContent';
import './Hero.css';

const MODAL_CONTENT = {
  cbt: {
    title: "מהו טיפול CBT?",
    subtitle: "טיפול קוגניטיבי-התנהגותי (Cognitive Behavioral Therapy)",
    content: <CBTInfoContent />,
    actionLabel: "תיאום שיחת היכרות",
    onAction: "#contact"
  },
  remedial: {
    title: "כשהלמידה הופכת להזדמנות להצלחה",
    content: <RemedialInfoContent />,
    actionLabel: "לתיאום פגישת אבחון ושיחת הכרות",
    onAction: "#contact"
  },
  parents: {
    title: "השותפים המרכזיים להצלחה",
    content: <ParentingInfoContent />,
    actionLabel: "לתיאום שיחת ייעוץ להורים",
    onAction: "#contact"
  }
};

export default function Hero() {
  const [activeModal, setActiveModal] = useState(null);

  const handleClose = () => setActiveModal(null);

  return (
    <section className="hero">
      <InfoModal 
        isOpen={!!activeModal} 
        onClose={handleClose} 
        modalData={activeModal ? MODAL_CONTENT[activeModal] : null}
      />
      
      <div className="container hero-container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="hero-title">
            MindStep<br />
            <span className="highlight" style={{ fontSize: '0.8em', color: 'var(--color-sage-dark)' }}>צעד קטן לשינוי גדול</span>
          </h1>
          <p className="hero-subtitle" style={{ marginBottom: '1.5rem' }}>
            <strong>טיפול CBT והוראה מתקנת לילדים, נוער ומבוגרים.</strong><br />
            ליווי רגשי ומעשי לבניית ביטחון עצמי, התמודדות עם חרדה והצלחה בלימודים ובחיים.
          </p>

          <div className="hero-audience">
            <p className="audience-title">הטיפול מתאים למי שמתמודד עם:</p>
            <motion.ul 
              className="audience-list"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
              }}
            >
              {[
                "חרדה או פחדים",
                "חוסר ביטחון עצמי",
                "קשיי למידה או ריכוז",
                "תסכול בלימודים או בעבודה"
              ].map((item, idx) => (
                <motion.li 
                  key={idx}
                  variants={{
                    hidden: { opacity: 0, x: 20 },
                    visible: { opacity: 1, x: 0 }
                  }}
                >
                  <CheckCircle2 size={18} className="check-icon" aria-hidden="true" /> {item}
                </motion.li>
              ))}
            </motion.ul>
          </div>

          <div className="hero-actions-container">
            <a href="#contact" className="btn btn-lg pulse-hover">קבעו שיחת היכרות קצרה</a>
            <div className="trust-badges" style={{ marginTop: '0.8rem', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '1rem', fontSize: '0.85rem', color: 'var(--color-text-light)' }}>
              <span><CheckCircle2 size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '0.2rem', color: 'var(--color-sage-dark)' }} /> מפגש היכרות ללא התחייבות</span>
              <span><CheckCircle2 size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '0.2rem', color: 'var(--color-sage-dark)' }} /> דיסקרטיות מלאה</span>
              <span><CheckCircle2 size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '0.2rem', color: 'var(--color-sage-dark)' }} /> טיפול מותאם אישית</span>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Abstract Growth Illustration */}
          <div className="circle-bg"></div>
          <img src="/images/hero-bg.webp" alt="Growth Abstract" className="hero-image-bg" width="1024" height="1024" />
          
          {/* Card 1: CBT - Blue */}
          <motion.button 
            className="floating-card card-1"
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            onClick={() => setActiveModal('cbt')}
            aria-label="מידע על טיפול CBT"
            aria-expanded={activeModal === 'cbt'}
          >
            <Brain className="icon" size={24} color="var(--color-sky)" aria-hidden="true" />
            <span>טיפול CBT ממוקד</span>
          </motion.button>
          
          {/* Card 2: Remedial - Green (Sage) with Composite Icon */}
          <motion.button 
            className="floating-card card-2"
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
            onClick={() => setActiveModal('remedial')}
            aria-label="מידע על הוראה מתקנת וכלים להצלחה"
            aria-expanded={activeModal === 'remedial'}
          >
            <Footprints className="icon" size={24} color="var(--color-sage-dark)" aria-hidden="true" />
            <span>הוראה מתקנת וכלים להצלחה</span>
          </motion.button>
          
          {/* Card 3: Parents - Terracotta/Red */}
          <motion.button 
            className="floating-card card-3"
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 2 }}
            onClick={() => setActiveModal('parents')}
            aria-label="מידע על ליווי והדרכת הורים"
            aria-expanded={activeModal === 'parents'}
          >
            <Heart className="icon" size={24} color="var(--color-terracotta)" aria-hidden="true" />
            <span>ליווי והדרכה להורים</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
