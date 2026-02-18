import { motion } from 'framer-motion';
import './About.css';

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container about-container">
        <motion.div 
          className="about-image"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="image-wrapper">
             <img src="/images/yaarit-real.webp" alt="יערית - מטפלת CBT" className="profile-image" width="770" height="1024" loading="lazy" />
          </div>
        </motion.div>
        <motion.div 
          className="about-content"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="section-title" style={{textAlign: 'right'}}>נעים מאוד, אני יערית</h2>
          <p className="lead-text">
            אני מלווה ילדים והורים מתוך ניסיון חינוכי רב שנים, ובהבנה עמוקה של האתגרים היומיומיים בבית ובמסגרות החינוכיות. אני מאמינה שבכל אחד מאיתנו קיים הכוח לשנות דפוסים שמעכבים אותנו, ולחיות חיים מלאים ורגועים יותר. כמטפלת CBT, המטרה שלי היא להעניק לך – או לילדך – ארגז כלים פרקטי וממוקד, שיעזור לנווט בתוך סערות הרגש והמחשבה.
          </p>
          <p>
            אני מגיעה לעולם הטיפול עם ניסיון מקצועי עשיר של מעל 20 שנים בליווי ילדים והורים ובפיתוח תהליכי צמיחה. הגישה שלי משלבת מקצועיות קלינית ללא פשרות יחד עם קשר אנושי, חם ובגובה העיניים. אני מאמינה שטיפול אפקטיבי מתחיל במרחב בטוח שבו אפשר להרגיש בנוח, לחקור את הקשיים ולצאת עם צעדים מעשיים ליישום כבר מהמפגש הראשון.
          </p>
          <p>
            אני מלווה ילדים (מגיל 8), בני נוער ומבוגרים המתמודדים עם חרדה, קשיים בוויסות רגשי, אתגרי הביטחון העצמי ומשברי חיים, תוך התאמה אישית של הטיפול לצרכים הייחודיים של כל אחד ואחת.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
