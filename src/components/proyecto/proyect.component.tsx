import { AccountCircle } from "@mui/icons-material";
import {
  Box,
  Grid,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { FC, useState } from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import Swal from "sweetalert2";
import { isValidArray, isValidArrayProfe } from "./utils/validatearray";
import { otrosRegex as regularExpp } from "./utils/regularExp";
export const ProyectComponent: FC = (): JSX.Element => {
  const [state, setState] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const regex = new RegExp(/[a-zA-Z,0-9]+@alumno.ipn.mx/gm);
  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setState(e.target.value.trim());
  };
  const handleClick = () => {
    setLoading(true);
    const results = state.matchAll(regularExpp);
    const array = [...(results as any)];
    setTimeout(() => {
      if (isValidArray(array)) {
        Swal.fire(
          "Genial",
          `El correo <h3 style="color: green;">${state} </h3>  es de un estudiante registrado del IPN`,
          "success"
        );
      } else if (isValidArrayProfe(array)) {
        Swal.fire(
          "Genial",
          `El correo <h3 style="color: green;">${state} </h3>  es de un profesor registrado del IPN`,
          "success"
        );
      } else {
        Swal.fire(
          "Oops...",
          `El Correo  <h3 style="color: red;">${state} </h3>  no pertence al IPN porfavor intenta de nuevo`,
          "error"
        );
      }
      setLoading(false);
      setState("");
    }, 2500);
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
          <Grid item xs={6} sx={{ color: "white" }}>
            <Typography gutterBottom variant="h5" component="div">
              {"Peña Real Jorge Luis"}
            </Typography>
            <Typography variant="h6">{"4NM59"}</Typography>
            <Typography variant="h6">
              {"Proyecto Analizador lexico en JavaScript"}
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Grid item xs={6}>
          <Typography gutterBottom variant="h4" component="div">
            {"En la parte de abajo hay un area de texto para ingresar un correo electronico" +
              " La validacion se encargara de saber si es un correo valido del IPN o no " +
              " En ambos casos se mostrara una notificacion "}
          </Typography>
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2}
            sx={{
              marginTop: 5,
            }}
          >
            <TextField
              id="input-with-icon-textfield"
              label="Ingresa un correo"
              sx={{
                width: "100%",
              }}
              className={"xd"}
              type="email"
              required={true}
              placeholder={"correo@alumno.ipn.mx"}
              value={state}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
              variant="standard"
              onChange={handleChange}
            />
            <LoadingButton
              onClick={handleClick}
              loading={loading}
              variant="outlined"
              disabled={state.length < 6}
              sx={{
                width: "100%",
              }}
            >
              Validar Correo
            </LoadingButton>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};
