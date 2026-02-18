import { motion } from 'framer-motion';
import { Phone, Users, Home } from 'lucide-react';
import './TheProcess.css';

export default function TheProcess() {
  const processSteps = [
    {
      icon: <Phone size={48} color="white" />,
      title: "שיחת היכרות",
      desc: "הבנת הצרכים שלכם כהורים ומיפוי האתגרים.",
      color: "var(--color-sage-dark)"
    },
    {
      icon: <Users size={48} color="white" />,
      title: "מפגשים מותאמים",
      desc: "עבודה חווייתית עם הילד המשלבת כלים רגשיים ואסטרטגיות למידה במידת הצורך.",
      color: "var(--color-terracotta)"
    },
    {
      icon: <Home size={48} color="white" />,
      title: "ליווי הורי",
      desc: "הדרכה שוטפת להורים כדי ליישם את השינוי גם בבית.",
      color: "var(--color-sky)"
    }
  ];

  return (
    <section className="section process-section">
      <div className="container">
        <h2 className="section-title">איך זה נראה בפועל?</h2>
        
        <div className="process-timeline">
          {processSteps.map((step, index) => (
            <motion.div 
              key={index} 
              className="process-step"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="step-icon-wrapper">
                 <div className="icon-circle" style={{backgroundColor: step.color}}>
                   {step.icon}
                 </div>
                 {index < processSteps.length - 1 && <div className="step-connector-line"></div>}
              </div>
              <div className="step-content">
                <span className="step-number">{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
