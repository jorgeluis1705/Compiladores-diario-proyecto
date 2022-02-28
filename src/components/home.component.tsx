import { FC } from "react";
import { axiosClient } from "../axios/axiosclient";
import Box from "@mui/material/Box";

export const HomeComponent: FC = (): JSX.Element => {
  const datos = axiosClient.get("/posts");
  datos.then((e) => console.log(e.data));
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
      }}
    ></Box>
  );
};
