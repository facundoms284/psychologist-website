import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material";

export default function Boxes() {
  return (
    <div className="flex flex-col items-center justify-center  w-full md:w-full h-full sm:flex-col md:flex-col ">
      <Box className="w-full p-2">
        <Card className="shadow-sm transition-shadow duration-300 hover:shadow-md">
          <CardContent className="bg-gray-300">
            <Typography variant="h3" gutterBottom>
              <h3 className="text-xl font-semibold">Formación profesional.</h3>
            </Typography>
            <Typography variant="body1" paragraph>
              <List>
                <ListItem>
                  <ListItemText primary="Licenciatura en Psicología - Universidad de Barcelona" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Licenciatura en Psicología - Universidad de Barcelona" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Licenciatura en Psicología - Universidad de Barcelona" />
                </ListItem>
              </List>
            </Typography>
          </CardContent>
        </Card>
      </Box>
      <Box className="w-full p-2">
        <Card className="shadow-sm transition-shadow duration-300 hover:shadow-md">
          <CardContent className="bg-gray-300">
            <Typography variant="h3" gutterBottom>
              <h3 className="text-xl font-semibold">Enfoque terapéutico.</h3>
            </Typography>
            <Typography variant="body1" paragraph>
              <List>
                <ListItem>
                  <ListItemText primary="Mi enfoque terapéutico es integrador, combinando técnicas de la terapia cognitivo-conductual, la terapia de aceptación y compromiso, y el mindfulness. Creo firmemente en la capacidad de cada individuo para superar sus dificultades y alcanzar su máximo potencial. Mi filosofía se basa en la empatía, el respeto y el compromiso con el bienestar de mis pacientes." />
                </ListItem>
              </List>
            </Typography>
          </CardContent>
        </Card>
      </Box>
      <Box className="w-full p-2">
        <Card className="transition-shadow duration-300 hover:shadow-md">
          <CardContent className="bg-gray-300">
            <Typography variant="h3" gutterBottom>
              <h3 className="text-xl font-semibold">Enfoque terapéutico.</h3>
            </Typography>
            <Typography variant="body1" paragraph>
              <List>
                <ListItem>
                  <ListItemText primary="Mi enfoque terapéutico es integrador, combinando técnicas de la terapia cognitivo-conductual, la terapia de aceptación y compromiso, y el mindfulness. Creo firmemente en la capacidad de cada individuo para superar sus dificultades y alcanzar su máximo potencial. Mi filosofía se basa en la empatía, el respeto y el compromiso con el bienestar de mis pacientes." />
                </ListItem>
              </List>
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
}
