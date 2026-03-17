import { MessageCircle } from 'lucide-react';
import './WhatsAppFAB.css';

export default function WhatsAppFAB() {
  const phoneNumber = "972506989894";
  const message = "שלום יערית, הגעתי דרך האתר";
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <a 
      href={whatsappUrl} 
      className="whatsapp-fab" 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={32} color="white" />
    </a>
  );
}
