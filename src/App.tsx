import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "@mui/material/Button";
import { count } from "console";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function App() {
  const [cunter, setCounter] = React.useState<number>(0);
  const [clases, setClases] = React.useState<any[]>([
    {
      id: 1,
      contenido:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheet",
    },
  ]);
  return (
    <div className="App">
      <h1>Diario {cunter}</h1>
      <Button
        variant="outlined"
        href="#outlined-buttons"
        onClick={() => {
          setCounter((oldState) => {
            let aux = oldState + 1;
            return aux;
          });
          const aux = {
            id: Math.random(),
            contenido:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheet",
          };
          setClases([...clases, aux]);
        }}
      >
        Link
      </Button>
      {clases.map((e) => (
        <Card sx={{ minWidth: 275 }} key={e.id}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Word of the Day
            </Typography>

            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              adjective
            </Typography>
            <Typography variant="body2">{e.contenido}</Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}

export default App;
