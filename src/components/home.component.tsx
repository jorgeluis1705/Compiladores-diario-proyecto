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
import { format } from "date-fns";
interface Classes {
  id: number;
  date: string;
  content: string;
  image?: string;
}
export const HomeComponent: FC = (): JSX.Element => {
  const [classes, setClasses] = useState<Classes[]>([]);
  const datos = axiosClient.get("/classes");
  useEffect(() => {
    datos.then((e) => setClasses(e.data));
  }, []);
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
      }}
    >
      <h1>Primer partcial</h1>
      <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        sx={{
          margin: "20 40",
        }}
        spacing={5}
      >
        {classes.map((e) => (
          <Grid key={e.id} item xs={4}>
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
                    Clase {e.id} {new Date(e.date).toDateString()}
                  </Typography>
                  <Typography variant="h6" color="text.secondary">
                    {e.content.slice(0, 80) + " ..."}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
