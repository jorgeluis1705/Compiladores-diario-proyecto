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
  return <div>proyect.component</div>;
};
