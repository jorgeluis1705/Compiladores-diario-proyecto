import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import { HomeComponent } from "./components/home.component";
import { Fragment, useEffect } from "react";
import { Parcial1Component } from "./components/parcial-1/parcial1.component";
import { ProyectComponent } from "./components/proyecto/proyect.component";
import cls from "./db.json";
import P2 from "./parcial_2.json";

function App() {
  const router = useNavigate();
  useEffect(() => {
    router("/proyecto");
  }, []);
  return (
    <Fragment>
      {/*    <NavBar /> */}
      <Routes>
        <Route path="" element={<HomeComponent />} />
        <Route
          path="/p1"
          element={
            <Parcial1Component CLASSESPROP={cls.classes} title={"Parcial 1"} />
          }
        />
        <Route
          path="/p2"
          element={
            <Parcial1Component CLASSESPROP={P2.classes} title={"Parcial 2"} />
          }
        />
        <Route path="/proyecto" element={<ProyectComponent />} />
      </Routes>
    </Fragment>
  );
}

export default App;
