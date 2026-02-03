import { motion } from 'framer-motion';
import './About.css';

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container about-container">
        <div className="about-image">
          <div className="image-wrapper">
             <img src="/images/yaarit-real.png" alt="יערית - מטפלת CBT" className="profile-image" />
          </div>
        </div>
        <div className="about-content">
          <h2 className="section-title" style={{textAlign: 'right'}}>נעים מאוד, אני יערית</h2>
          <p className="lead-text">
            אני מאמינה שבכל אחד מאיתנו קיים הכוח לשנות דפוסים שמעכבים אותנו, ולחיות חיים מלאים ורגועים יותר. כמטפלת CBT, המטרה שלי היא להעניק לך – או לילדך – ארגז כלים פרקטי וממוקד, שיעזור לנווט בתוך סערות הרגש והמחשבה.
          </p>
          <p>
            הגישה שלי משלבת מקצועיות קלינית ללא פשרות יחד עם קשר אנושי, חם ובגובה העיניים. אני מאמינה שטיפול אפקטיבי מתחיל במרחב בטוח שבו אפשר להרגיש בנוח, לחקור את הקשיים ולצאת עם צעדים מעשיים ליישום כבר מהמפגש הראשון.
          </p>
          <p>
            אני מלווה ילדים (מגיל 8), בני נוער ומבוגרים המתמודדים עם חרדה, קשיים בוויסות רגשי, אתגרי הביטחון העצמי ומשברי חיים, תוך התאמה אישית של הטיפול לצרכים הייחודיים של כל אחד ואחת.
          </p>
        </div>
      </div>
    </section>
  )
}
