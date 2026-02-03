import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sprout, Lightbulb, Heart } from 'lucide-react';
import InfoModal from './InfoModal';
import './Hero.css';

export default function Hero() {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="hero">
      <InfoModal isOpen={showModal} onClose={() => setShowModal(false)} />
      
      <div className="container hero-container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="hero-title">
            יערית - טיפול CBT <br />
            <span className="highlight">ממוקד בגובה העיניים</span>
          </h1>
          <p className="hero-subtitle">
            כלים פרקטיים לשינוי דפוסי מחשבה והתנהגות בדרך רגישה ומכילה.
            <br />
            מיועד לילדים (מגיל 8), נוער ומבוגרים.
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
          
          <motion.div 
            className="floating-card card-1"
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            onClick={() => setShowModal(true)}
          >
            <Sprout className="icon" size={24} color="var(--color-sage)" />
            <span>צמיחה</span>
          </motion.div>
          
          <motion.div 
            className="floating-card card-2"
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
            onClick={() => setShowModal(true)}
          >
            <Lightbulb className="icon" size={24} color="#F59E0B" />
            <span>בהירות</span>
          </motion.div>
          
          <motion.div 
            className="floating-card card-3"
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 2 }}
            onClick={() => setShowModal(true)}
          >
            <Heart className="icon" size={24} color="#EF4444" />
            <span>הכלה</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
