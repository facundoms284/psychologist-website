import Header from '../assets/components/Header'
import Footer from '../assets/components/Footer'

import heroImg from '../assets/images/sections/Home/homeImg.png'

export default function Home() {

  return (
    <div className="w-full min-h-screen bg-indigo-200 ">
      <Header />
      <div className="h-full flex flex-col md:flex-row p-10 md:p-20 md:h-screen ">
        <div className="flex flex-col items-start justify-center gap-10 w-full md:w-1/2 ">
        <div>Servicios</div>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque quas quaerat fugiat modi, pariatur accusantium quasi iusto totam explicabo quibusdam cupiditate nostrum perferendis cumque quod sint. Magnam laudantium ullam tempore.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque quas quaerat fugiat modi, pariatur accusantium quasi iusto totam explicabo quibusdam cupiditate nostrum perferendis cumque quod sint. Magnam laudantium ullam tempore.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque quas quaerat fugiat modi, pariatur accusantium quasi iusto totam explicabo quibusdam cupiditate nostrum perferendis cumque quod sint. Magnam laudantium ullam tempore.</p>
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