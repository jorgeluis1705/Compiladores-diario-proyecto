import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import { FC } from "react";
import { Classes } from "../../models/clases";

export const ClassescarComponent: FC<{ item: Classes }> = ({
  item,
}): JSX.Element => {
  return (
    <Grid key={item.id} item xs={4}>
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={item.image}
            alt="Imagen relacionada"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Clase {item.id} {new Date(item.date).toDateString()}
            </Typography>
            <Typography variant="h6" color="text.secondary">
              {item.content.slice(0, 80) + " ..."}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};
