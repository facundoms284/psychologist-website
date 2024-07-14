// White icons.
import WhatsApp from '../icons/footer/WhatsApp.svg';
import Instagram from '../icons/footer/Instagram.svg';
import LinkedIn from '../icons/footer/LinkedIn.svg';

// Pink icons.
import WhatsAppPink from '../icons/footer/WhatsAppPink.svg';
import InstagramPink from '../icons/footer/InstagramPink.svg';
import LinkedInPink from '../icons/footer/LinkedInPink.svg';

import { useState } from 'react';

export default function Footer() {
  const phoneNumber = '+59891251969';
  const message = 'Hola, me gustaría obtener información sobre la terapia.';
  
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  const instagramLink = 'https://www.instagram.com/tu-instagram';
  const linkedInLink = 'https://www.linkedin.com/in/tu-linkedin';

  const socialMediaLinks = [
    {
      icon: WhatsApp,
      iconHover: WhatsAppPink,
      href: {whatsappLink},
    },
    {
      icon: Instagram,
      iconHover: InstagramPink,
      href: {instagramLink},
    },
    {
      icon: LinkedIn,
      iconHover: LinkedInPink,
      href: {linkedInLink},
    }
  ];

  const [isIconHovered, setIsIconHovered] = useState(null);

  return (
    <footer className="w-full h-20 md:flex md:items-center md:justify-between bg-gray-400 px-5 py-2 md:px-10 rounded-t-sm">
      <div className="flex gap-5 items-center justify-center mb-2 md:mb-0">
        {socialMediaLinks.map(({ icon, iconHover, href }, index) => (
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-pink-200"
          >
            <img 
              className='w-8 h-8 md:w-10 md:h-10'
              src={isIconHovered === index ? iconHover : icon}
              alt="WhatsApp icon" 
              onMouseEnter={() => setIsIconHovered(index)}
              onMouseLeave={() => setIsIconHovered(null)}
              />
          </a>
        ))}
      </div>
      <div className="flex items-center justify-center">
        <p className="text-white text-sm md:text-base">
          © 2024 VMS. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}