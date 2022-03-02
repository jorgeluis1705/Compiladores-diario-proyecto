import { FC, useEffect, useState } from "react";
import { axiosClient } from "../axios/axiosclient";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Rutas } from "../models/rutas";

interface Classes {
  id: number;
  date: string;
  content: string;
  image?: string;
}
export const HomeComponent: FC = (): JSX.Element => {
  let navigate = useNavigate();

  const secciones: Rutas[] = [
    {
      id: 1,
      image: "",
      seccion: "Diario de clase Parcial 1",
      route: "/p1",
    },
    {
      id: 2,
      image: "",
      seccion: "Diario de clase Parcial 2",
      route: "/p1",
    },
    {
      id: 3,
      image: "",
      seccion: "Diario de clase Parcial 3",
      route: "/p1",
    },
    {
      id: 4,
      image: "",
      seccion: "Proyecto",
      route: "/proyecto",
    },
  ];
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          backgroundImage:
            "url('https://images.pexels.com/photos/7207641/pexels-photo-7207641.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260')",
          height: "60%",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Grid
          sx={{
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            height: "100%",
          }}
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={6}>
            <Typography gutterBottom variant="h5" component="div">
              {"Peña Real Jorge Luis"}
            </Typography>
            <Typography variant="h6" color="text.secondary">
              {"4NM59"}
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
          sx={{
            marginTop: "5rem",
          }}
          spacing={5}
        >
          {secciones.map((e) => (
            <Grid
              onClick={() => {
                navigate(e.route);
              }}
              key={e.id}
              item
              xs={4}
            >
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={e.image}
                    alt="Imagen relacionada"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {e.seccion}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};
