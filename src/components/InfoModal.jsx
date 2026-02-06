import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import './InfoModal.css';

export default function InfoModal({ isOpen, onClose, modalData }) {
  if (!isOpen || !modalData) return null;

  const { title, subtitle, content, actionLabel, onAction, subSection } = modalData;

  return (
    <AnimatePresence>
      <motion.div 
        className="modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div 
          className="modal-content"
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="modal-header">
            <button className="modal-close-btn" onClick={onClose} aria-label="סגור">
              <X size={28} />
            </button>
            <h2 className="modal-title">{title}</h2>
            {subtitle && <p className="modal-subtitle">{subtitle}</p>}
          </div>
          
          <div className="modal-body">
            <div className="info-section">
              {typeof content === 'string' ? <p className="modal-text">{content}</p> : content}
            </div>

            {subSection && (
              <div className="info-section sub-section">
                <p>{subSection}</p>
              </div>
            )}

            {actionLabel && (
              <div className="modal-actions">
                <a 
                  href={onAction || "#contact"} 
                  className="btn btn-action"
                  onClick={(e) => {
                    onClose();
                    if (!onAction || onAction === '#contact') {
                      e.preventDefault();
                      const contactSection = document.getElementById('contact');
                      if (contactSection) {
                        contactSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }
                  }}
                >
                  {actionLabel}
                </a>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
