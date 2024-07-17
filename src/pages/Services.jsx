import { useState } from "react";

import Header from "../assets/components/Header";
import Footer from "../assets/components/Footer";

import FlowersImg from "../assets/images/sections/Services/Flower.jpg";
import FreedomImg from "../assets/images/sections/Services/Freedom.jpg";
import OceanImg from "../assets/images/sections/Services/Ocean.jpeg";
import SunImg from "../assets/images/sections/Services/Sun.jpg";

import {
  ListItem,
  List,
  ListItemButton,
  ListItemText,
  Collapse,
  Typography,
} from "@mui/material";

// Icons
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import WhatsApp from "../assets/icons/footer/WhatsApp.svg";

const services = [
  {
    title: "Psicoterapia Individual - Modalidad Virtual",
    description:
      "Sesiones de terapia individual enfocadas en el desarrollo personal, manejo del estrés y resolución de problemas.",
    details:
      "Esta terapia incluye técnicas como la terapia cognitivo-conductual y la terapia de aceptación y compromiso.",
    image: FlowersImg,
  },
  {
    title: "Psicoterapia para Adolescentes - Modalidad Virtual",
    description:
      "La terapia para adolescentes aborda problemas comunes en esta etapa de desarrollo, como la ansiedad, la depresión y los desafíos escolares. Proporciona un espacio seguro para que los adolescentes hablen sobre sus preocupaciones y aprendan estrategias de afrontamiento.",
    details: (
      <ul className="list-disc mt-3 ml-10">
        <li>
          Terapia de Juego: Utiliza el juego como medio para que los
          adolescentes expresen sus emociones y resuelvan conflictos.
        </li>
        <li>
          Entrenamiento en Habilidades Sociales: Enseña habilidades de
          comunicación y manejo de relaciones interpersonales.
        </li>
        <li>
          Terapia Cognitivo-Conductual para Adolescentes: Ayuda a los
          adolescentes a identificar y cambiar pensamientos y comportamientos
          negativos.
        </li>
      </ul>
    ),
    image: SunImg,
  },
  {
    title: "Supervisión a acompañantes terapéuticos",
    description:
      "Servicio especializado que proporciona orientación y apoyo continuo a aquellos profesionales que trabajan directamente con pacientes en el ámbito de la salud mental. Diseñado para asegurar que los acompañantes terapéuticos puedan brindar la mejor atención posible, manteniendo altos estándares de calidad y ética profesional.",
    details: (
      <ul className="list-disc mt-3 ml-10 flex flex-col gap-3">
        <li>
          Apoyo Profesional: Brindar un espacio seguro y confidencial donde los
          acompañantes terapéuticos puedan discutir casos, compartir
          experiencias y recibir orientación sobre situaciones complejas que
          enfrentan en su práctica diaria.
        </li>
        <li>
          Desarrollo de Habilidades: Ayudar a mejorar las habilidades
          terapéuticas, como la comunicación, la empatía y las técnicas de
          intervención, a través de la retroalimentación constructiva y el
          entrenamiento continuo.
        </li>
        <li>
          Resolución de Dudas: Proporcionar respuestas y soluciones a dudas y
          desafíos específicos que puedan surgir en la relación con los
          pacientes.
        </li>
        <li>
          Prevención del Burnout: Fomentar el autocuidado y la gestión del
          estrés para prevenir el agotamiento profesional, garantizando así la
          sostenibilidad y el bienestar del acompañante terapéutico.
        </li>
        <li>
          Cumplimiento Ético: Asegurar que los acompañantes terapéuticos actúen
          de acuerdo con los principios éticos y las mejores prácticas del campo
          de la salud mental.
        </li>
      </ul>
    ),
    image: FreedomImg,
  },
  {
    title:
      "Espacio de acompañamiento/asesoramiento a referentes afectivos (madre, padre, tutor u otros)",
    description:
      "Diseñado para proporcionar orientación y apoyo emocional a aquellos individuos que desempeñan roles significativos en la vida de una persona en tratamiento psicológico, como padres, madres, tutores u otros cuidadores. Este servicio busca fortalecer las habilidades de los referentes afectivos para manejar mejor las situaciones difíciles, comprender las necesidades emocionales del paciente y promover un entorno de apoyo positivo en el hogar.",
    details: (
      <ul className="list-disc mt-3 ml-10 flex flex-col gap-3">
        <li>
          Apoyo Emocional: Brindar un espacio seguro y confidencial donde los
          referentes afectivos puedan expresar sus preocupaciones, miedos y
          desafíos relacionados con el bienestar emocional del paciente.
        </li>
        <li>
          Educación y Orientación: Proporcionar información educativa sobre las
          condiciones psicológicas del paciente, estrategias de manejo de
          síntomas y técnicas de comunicación efectiva para mejorar la relación.
        </li>
        <li>
          Fomento del Autoconocimiento: Ayudar a los referentes afectivos a
          comprender mejor sus propias reacciones emocionales y cómo estas
          pueden influir en la dinámica familiar y en el proceso terapéutico del
          paciente.
        </li>
        <li>
          Resolución de Conflictos: Facilitar la resolución constructiva de
          conflictos dentro de la familia o el entorno cercano, promoviendo la
          armonía y el entendimiento mutuo.
        </li>
        <li>
          Empoderamiento: Capacitar a los referentes afectivos con herramientas
          prácticas y estrategias específicas para apoyar de manera efectiva el
          proceso terapéutico del paciente fuera del consultorio.
        </li>
      </ul>
    ),
    image: OceanImg,
  },
];

export default function Home() {
  const [open, setOpen] = useState({});

  const handleClick = (index) => {
    setOpen((prevOpen) => ({
      ...prevOpen,
      [index]: !prevOpen[index],
    }));
  };

  return (
    <div className="flex flex-col h-full min-h-screen bg-indigo-200">
      <Header />
      <div className="flex-1 flex flex-col-reverse items-center justify-center gap-12 p-7 md:p-20 lg:flex-row h-full w-full  ">
        <div className="flex items-center justify-center w-full md:max-w-2xl overflow-auto rounded-sm">
          <List className="w-full flex flex-col gap-1 ">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-300 rounded-lg shadow-md p-1">
                <ListItemButton
                  onClick={() => handleClick(index)}
                  className="h-20 bg-gray-100 border-b border-gray-300"
                >
                  <ListItemText
                    primary={service.title}
                    primaryTypographyProps={{ fontWeight: 600 }}
                  />
                  {open[index] ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open[index]} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItem sx={{ pl: 3 }}>
                      <ListItemText>
                        <Typography variant="body2">
                          {service.description}
                        </Typography>
                        <Typography variant="body2">
                          {service.details}
                        </Typography>
                      </ListItemText>
                    </ListItem>
                  </List>
                </Collapse>
              </div>
            ))}
          </List>
        </div>

        <div className="w-full h-full flex justify-center items-center">
          <span className="flex items-center justify-center gap-4 min-w-full">
            <h1 className="tracking-wide font-bold text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl md:text-center lg:text-start ">
              Explora las Soluciones Terapéuticas que te llevarán a alcanzar tu
              Bienestar!
            </h1>
          </span>
        </div>
      </div>
      <Footer />
    </div>
  );
}
