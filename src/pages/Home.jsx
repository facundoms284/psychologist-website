import { Button } from "@mui/material";

import heroImg from "../assets/images/sections/Home/homeImg.png";

import Header from "../assets/components/Header";
import Footer from "../assets/components/Footer";
import Sendmail from "../assets/components/Sendmail";

export default function Home() {
  return (
    <div className="w-full min-h-screen  bg-indigo-200 ">
      <Header />
      <div className="h-full flex flex-col md:flex-row p-10 md:p-10 md:h-screen lg:gap-20">
        <div className="flex flex-col items-start justify-center gap-10 w-full md:w-1/2 md:h-full">
          <h1 className="tracking-wide font-black text-3xl md:text-4xl lg:text-6xl ">
            Comienza con tu proceso de Autoconocimiento y Sanación
          </h1>
          <h2 className="font-bold text-sm sm:text-lg  md:text-xl ">
            Un lugar para todas aquellas personas interesadas en la salud
            mental, que buscan ayuda o terapia psicológica.
          </h2>
          <Button
            component="a"
            href={Sendmail()}
            variant="contained"
            sx={{
              backgroundColor: "rose.200",
              "&:hover": {
                backgroundColor: "rose.200",
              },
            }}
          >
            PRUEBA AHORA
          </Button>
        </div>

        <figure className="w-full md:w-1/2 h-full flex justify-center items-center ">
          <img
            className="w-full h-full object-contain max-w-xs mt-10 md:max-w-xl md:mt-0"
            src={heroImg}
            alt="A therapeutic image"
          />
        </figure>
      </div>
      <Footer />
    </div>
  );
}
