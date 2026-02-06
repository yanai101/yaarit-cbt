import { useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, Heart, Pencil, House, Footprints } from 'lucide-react';
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
            יערית – טיפול CBT <br />
            <span className="highlight">ממוקד בגובה העיניים</span>
          </h1>
          <p className="hero-subtitle">
            מטפלת CBT מוסמכת ומומחית להוראה מתקנת. ליווי רגשי וכלים פרקטיים לשינוי משמעותי עבור ילדים (מגיל 8), נוער ומבוגרים.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-lg">לתיאום שיחת היכרות ראשונית</a>
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
          <img src="/images/hero-bg.png" alt="Growth Abstract" className="hero-image-bg" />
          
          {/* Card 1: CBT - Blue */}
          <motion.div 
            className="floating-card card-1"
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            onClick={() => setActiveModal('cbt')}
          >
            <Brain className="icon" size={24} color="var(--color-sky)" />
            <span>טיפול CBT ממוקד</span>
          </motion.div>
          
          {/* Card 2: Remedial - Green (Sage) with Composite Icon */}
          <motion.div 
            className="floating-card card-2"
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
            onClick={() => setActiveModal('remedial')}
          >
            <Footprints className="icon" size={24} color="var(--color-sage)" />
            <span>הוראה מתקנת וכלים</span>
          </motion.div>
          
          {/* Card 3: Parents - Terracotta/Red */}
          <motion.div 
            className="floating-card card-3"
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 2 }}
            onClick={() => setActiveModal('parents')}
          >
            <Heart className="icon" size={24} color="var(--color-terracotta)" />
            <span>ליווי והדרכה להורים</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
