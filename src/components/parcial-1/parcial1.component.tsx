import { Box, Grid, Typography } from "@mui/material";
import { FC, useState } from "react";
import { Classes } from "../../models/clases";
import { ClassescarComponent } from "../class-card/classescard.component";
export const Parcial1Component: FC<{
  CLASSESPROP: Classes[];
  title: string;
}> = ({ CLASSESPROP, title }): JSX.Element => {
  const [classes] = useState<Classes[]>(CLASSESPROP);

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
        ></Grid>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={4}>
            <Typography gutterBottom variant="h5" component="div">
              {"Peña Real Jorge Luis"}
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h6" color="text.secondary">
              {"4NM59"}
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography gutterBottom variant="h5" component="div">
              {"Diario de clase "} {title}
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
          sx={{
            marginTop: 5,
          }}
          spacing={5}
        >
          {classes.map((e) => (
            <ClassescarComponent key={e.id} item={e} />
          ))}
        </Grid>
      </Box>
    </Box>
  );
};
