import { FC } from "react";
import { axiosClient } from "../axios/axiosclient";

export const HomeComponent: FC = (): JSX.Element => {
  const datos = axiosClient.get("/posts");
  datos.then((e) => console.log(e.data));
  return <div>home.component</div>;
};
