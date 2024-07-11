import WhatsApp from '../icons/footer/WhatsApp.svg';
import Instagram from '../icons/footer/Instagram.svg';
import LinkedIn from '../icons/footer/LinkedIn.svg';

export default function Footer() {
  const phoneNumber = '+59891251969';
  const message = 'Hola, me gustaría obtener información sobre la terapia.';
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <footer className="w-full h-20 md:flex md:items-center md:justify-between bg-indigo-600 px-5 py-2 md:px-10 rounded-t-sm ">
      <div className="flex gap-5 items-center">
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-pink-300"
        >
          <img 
            className='w-8 h-8 md:w-10 md:h-10'
            src={WhatsApp} 
            alt="WhatsApp icon" />
        </a>
        <a
          href="https://www.instagram.com/tu-instagram"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-pink-300"
        >
          <img 
            className='w-8 h-8 md:w-10 md:h-10'
            src={Instagram} 
            alt="Instagram icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/tu-linkedin"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-pink-300"
        >
          <img 
            className='w-8 h-8 md:w-10 md:h-10'
            src={LinkedIn} 
            alt="LinkedIn icon" />
        </a>
      </div>
      <div className="flex items-center justify-center">
        <p className="text-white text-sm md:text-base">
          © 2024 VMS. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}