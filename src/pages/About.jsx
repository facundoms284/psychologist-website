import Header from '../assets/components/Header';
import Footer from '../assets/components/Footer';
import Boxes from '../assets/components/Boxes';

import clientImg from '../assets/images/sections/About/clientImg.webp';


export default function Home() {
  const clientName = 'Valentina Malacrida Soria';
  const profession = 'Psicóloga';

  return (
    <div className="w-full min-h-screen bg-indigo-200">
      <Header />
      <div className="h-full flex flex-col lg:flex-row p-2 md:p-20 items-center">
        <div className='p-3 lg:w-1/2 flex flex-col items-center justify-center gap-10 h-full mb-10'>
          <figure className='w-44 h-44 rounded-full bg-gray-300 overflow-hidden'>
            <img className='w-full h-full object-cover' src={clientImg} alt="A therapeutic image" />
          </figure>
          <div className='flex flex-col items-center justify-center gap-4 min-w-full'>
            <h1 className='italic text-2xl md:text-4xl lg:text-6xl font-bold'>Sobre <span className=' font-great-vibes'>VMS</span></h1>
            <h2 className='font-semibold text-sm md:text-2xl'>{`${clientName} - ${profession}`}</h2>
            <p>{`${clientName}, ${profession} clínica con más de 10 años de experiencia ayudando a las personas a alcanzar su bienestar emocional y mental. Enfocada en brindar las herramientas necesarias con el objetivo de que puedas explorar tus pensamientos y sentimientos para vivir un vida plena y satisfactoria.`}</p>
          </div>
        </div>
        <Boxes />
      </div>
      <Footer />
    </div>
  );
}