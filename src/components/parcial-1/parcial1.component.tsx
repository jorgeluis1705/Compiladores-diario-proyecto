import { Grid } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { axiosClient } from "../../axios/axiosclient";
import { Classes } from "../../models/clases";
import { ClassescarComponent } from "../class-card/classescard.component";

export const Parcial1Component: FC = (): JSX.Element => {
  const [classes, setClasses] = useState<Classes[]>([]);
  const datos = axiosClient.get("/classes");
  useEffect(() => {
    datos.then((e) => setClasses(e.data));
  }, []);
  return (
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
        <ClassescarComponent key={e.id} item={e} />
      ))}
    </Grid>
  );
};
