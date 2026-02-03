import { motion } from 'framer-motion';
import { Brain, Heart, Footprints } from 'lucide-react';
import './HowItWorks.css';

export default function HowItWorks() {
  const steps = [
    {
      title: "מחשבות (Thoughts)",
      icon: <Brain size={32} color="white" />,
      desc: "זיהוי דפוסי חשיבה שליליים או מעכבים שמייצרים סבל.",
      color: "var(--color-sage)"
    },
    {
      title: "רגשות (Feelings)",
      icon: <Heart size={32} color="white" />,
      desc: "הבנה של העולם הרגשי שלנו ואיך הוא מושפע מהפרשנות שלנו למציאות.",
      color: "var(--color-terracotta)"
    },
    {
      title: "התנהגויות (Behaviors)",
      icon: <Footprints size={32} color="white" />,
      desc: "שינוי דפוסי פעולה כדי לשבור מעגלים שליליים וליצור מציאות חדשה.",
      color: "var(--color-sky)"
    }
  ];

  return (
    <section className="section how-it-works">
      <div className="container">
        <h2 className="section-title">איך זה עובד? משולש ה-CBT</h2>
        <p style={{textAlign: 'center', marginBottom: '3rem', maxWidth: '700px', margin: '0 auto 3rem'}}>
           אנחנו עובדים על שלושה רבדים כדי ליצור שינוי ומעגלים חיוביים. השיטה מאפשרת זיהוי מהיר של מוקדי הקושי ומתן כלים מעשיים להתמודדות.
        </p>
        
        <div className="pillars-grid">
          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              className="pillar-card" 
              style={{borderTop: `4px solid ${step.color}`}}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              whileHover={{ y: -10 }}
            >
              <div className="pillar-icon" style={{backgroundColor: step.color}}>
                {step.icon}
              </div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
