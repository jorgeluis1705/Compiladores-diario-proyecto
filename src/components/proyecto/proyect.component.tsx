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
    const results = state.matchAll(regex);
    const array = [...(results as any)];
    if (array.length && array[0]) {
      Swal.fire(
        "Genial",
        `El correo ${state} es de un estudiante registrado del IPN`,
        "success"
      );
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `El Correo ${state} no pertence al IPN porfavor intenta de nuevo`,
        footer: '<a href="">Why do I have this issue?</a>',
      });
    }
    setState("");
    setTimeout(() => {
      setLoading(false);
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
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Grid item xs={6}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
          aspernatur repellat hic laboriosam vel consequatur explicabo amet vero
          sint? Quo repellendus fugit quis repudiandae animi, tempora iusto
          adipisci reprehenderit nesciunt.
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
