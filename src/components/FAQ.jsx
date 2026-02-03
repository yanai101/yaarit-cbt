import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import './FAQ.css';

const faqs = [
  {
    question: "כמה זמן נמשך הטיפול?",
    answer: "טיפול CBT הוא קצר מועד וממוקד, ובדרך כלל נמשך בין 12 ל-20 מפגשים. עם זאת, משך הטיפול משתנה בהתאם לצרכים האישיים, לקצב ההתקדמות ולמטרות שהוגדרו."
  },
  {
    question: "איך להסביר לילד על הטיפול?",
    answer: "אמרו לילד שאתם הולכים לפגוש את יערית, מישהי שעוזרת לילדים להבין רגשות ומחשבות, ולמצוא דרכים להרגיש טוב יותר כשיש קצת לחץ או דאגה. אפשר להגיד שזה כמו חוג שבו לומדים 'כוחות' חדשים."
  },
  {
    question: "מה מידת המעורבות של ההורים בטיפול בילדים?",
    answer: "בטיפול בילדים, ההורים הם שותפים מלאים. התהליך כולל הדרכת הורים קבועה כדי לתת לכם כלים לתמוך בילד בבית, לחזק את ההישגים מהטיפול ולהתמודד נכון עם אתגרים שעולים."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="section faq-section" id="faq">
      <div className="container faq-container">
        <h2 className="section-title">שאלות נפוצות</h2>
        
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <button 
                className={`faq-question ${activeIndex === index ? 'active' : ''}`}
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <ChevronDown className="faq-icon" size={20} />
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div 
                    className="faq-answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="faq-answer-content">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
