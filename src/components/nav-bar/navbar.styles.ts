import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  toolbar: {
    height: "8vh",
    backgroundColor: "#454545",
  },
  menuButton: {
    marginRight: 2,
  },
  title: {
    flexGrow: 1,
  },
  home: {
    textDecoration: "none",
    color: "white",
    height: "7.5vh",
    margin: "5px 0 0 0",
    width: "250px",
    backgroundImage:
      "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg31b0-ZKTVSJtxcbvSXuaU8A2DxFjnOQdWg&usqp=CAU)",
    objectFit: "cover",
    objectPosition: "center",
    borderRadius: "25px",
  },
  signIn: {
    margin: "0 0 0 73vw",
    width: "13vw",
  },
  noneText: {
    textDecoration: "none",
    color: "white",
    width: "150px",
    margin: "0 0 0 0",
  },
});
