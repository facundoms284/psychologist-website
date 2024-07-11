import { Link } from 'react-router-dom';
import { Button } from '@mui/material'

import heroImg from '../assets/images/sections/Home/homeImg.png'

import Header from '../assets/components/Header'
import Footer from '../assets/components/Footer'

export default function Home() {

  return (
    <div className="w-full min-h-screen bg-indigo-200 ">
      <Header />
      <div className="h-full flex flex-col md:flex-row p-10 md:p-20 md:h-screen ">
        <div className="flex flex-col items-start justify-center gap-10 w-full md:w-1/2 ">
          <span className='flex flex-col gap-3'>
          <p className="text-4xl md:text-6xl text-indigo-600">Encuentra la comprensión</p>
          <p className="text-4xl md:text-6xl text-indigo-600">y descubre</p>
          <p className="text-4xl md:text-6xl text-indigo-600">tu Fuerza Interna</p>
          </span>
          <h1 className='text-lg md:text-xl '>Un lugar para todas aquellas personas interesadas en la salud mental, que buscan ayuda o terapia psicológica.</h1>
          <Link to="/contact" style={{ textDecoration: 'none' }}>
      <Button
        variant="contained"
        sx={{
          backgroundColor: 'rose.200',
          '&:hover': {
            backgroundColor: 'rose.200',
          },
        }}
      >
        PRUEBA AHORA
      </Button>
    </Link>
        </div>

        <figure className='w-full md:w-1/2 h-full flex justify-center items-center '>
          <img 
          className='w-full h-full object-contain max-w-xs mt-10 md:max-w-xl md:mt-0'
          src={heroImg} 
          alt="A therapeutic image" />
        </figure>
      </div>
      <Footer />
    </div>
  )
}   