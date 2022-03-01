import { Box, Grid, Typography } from "@mui/material";
import { FC, useState } from "react";

export const ProyectComponent: FC = (): JSX.Element => {
  const regex = "[a-zA-Z,0-9]+@alumno.ipn.mx";
  const [state, setState] = useState<string>("");
  const [validInput, setValidInput] = useState<boolean>(false);

  const handleChange = (e: any) => {
    setState(e.target.value.trim());
  };
  const handleClick = () => {
    const meses = new RegExp(regex);
    const results = state.matchAll(meses);
    const array = [...(results as unknown as any[])];

    if (array.length && array[0]) {
      console.log(array[0]);
    }
  };
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
            "url('https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')",
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
            <Typography variant="h6" color="text.secondary">
              {"Proyecto Analizador lexico"}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
