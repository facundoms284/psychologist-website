import { useState } from "react";

import Header from "../assets/components/Header";
import Footer from "../assets/components/Footer";
import Boxes from "../assets/components/Boxes";

import clientImg from "../assets/images/sections/About/clientImg.webp";

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

const education = [
  {
    title:
      "Licenciatura en Psicología - Universidad de Psicología de Uruguay(UDELAR)",
    description:
      "Esta licenciatura se centra en el desarrollo de la personalidad y la capacidad de pensar, comprender y actuar de manera efectiva y responsable.",
  },
  {
    title: "Licenciatura en Psicología - Universidad de Barcelona",
    description:
      "Esta licenciatura se centra en el desarrollo de la personalidad y la capacidad de pensar, comprender y actuar de manera efectiva y responsable.",
  },
  {
    title: "Licenciatura en Psicología - Universidad de Barcelona",
    description:
      "Esta licenciatura se centra en el desarrollo de la personalidad y la capacidad de pensar, comprender y actuar de manera efectiva y responsable.",
  },
];

export default function Home() {
  const clientName = "Dra. Valentina MS.";
  const profession = "Psicóloga";

  const [open, setOpen] = useState({});

  const handleClick = (index) => {
    setOpen((prevOpen) => ({
      ...prevOpen,
      [index]: !prevOpen[index],
    }));
  };

  return (
    <div className="flex flex-col justify-center items-center w-full min-h-screen bg-indigo-200">
      <Header />
      <div className="flex-1 h-full w-full flex flex-col 2xl:flex-row p-7 md:p-20 items-center justify-center gap-2 lg:gap-5 2xl:gap-20">
        <div className="border border-gray-350 p-5 2xl:w-1/2 flex flex-col items-center justify-center gap-10 h-full mb-10 w-full rounded-md ">
          <figure className="w-44 h-44 rounded-full bg-gray-300 overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={clientImg}
              alt="A therapeutic image"
            />
          </figure>
          <div className="flex flex-col items-center justify-center gap-4 min-w-full">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
              Sobre <span className=" font-great-vibes">VMS</span>
            </h1>
            <h2 className="font-semibold text-lg md:text-3xl ">{`${clientName} - ${profession}`}</h2>
            <p className="text-md md:text-xl">{`${clientName}, ${profession} clínica con más de 10 años de experiencia ayudando a las personas a alcanzar su bienestar emocional y mental. Enfocada en brindar las herramientas necesarias con el objetivo de que puedas explorar tus pensamientos y sentimientos para vivir un vida plena y satisfactoria.`}</p>
          </div>
        </div>

        <div className="flex items-center justify-center w-full max-w-2xl overflow-auto rounded-sm p-2 xl:max-w-4xl 2xl:max-w-3xl">
          <List className="w-full flex flex-col gap-1 ">
            {education.map((service, index) => (
              <div key={index} className="bg-gray-300 rounded-md shadow-md">
                <ListItemButton
                  button
                  onClick={() => handleClick(index)}
                  className="h-15 md:h-20 bg-gray-100 border-b border-gray-300"
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
      </div>
      <Footer />
    </div>
  );
}
