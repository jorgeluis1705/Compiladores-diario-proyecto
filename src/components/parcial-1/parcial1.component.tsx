import { Grid } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { axiosClient } from "../../axios/axiosclient";
import { Classes } from "../../models/clases";
import { ClassescarComponent } from "../class-card/classescard.component";
import cls from "../../db.json";
export const Parcial1Component: FC = (): JSX.Element => {
  const [classes, setClasses] = useState<Classes[]>(cls.classes);

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
