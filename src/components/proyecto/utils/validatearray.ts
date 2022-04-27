export const isValidArray = (array: any[]): boolean =>
  array.length &&
  array[0] &&
  (array[0].input as string).split("@")[1] === "alumno.ipn.mx"
    ? true
    : false;

export const isValidArrayProfe = (array: any[]): boolean =>
  array.length &&
  array[0] &&
  (array[0].input as string).split("@")[1] === "ipn.mx"
    ? true
    : false;
