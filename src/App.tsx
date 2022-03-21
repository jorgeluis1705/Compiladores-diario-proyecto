import "./App.css";
import { Routes, Route } from "react-router-dom";
import { HomeComponent } from "./components/home.component";
import { Fragment } from "react";
import { Parcial1Component } from "./components/parcial-1/parcial1.component";
import { ProyectComponent } from "./components/proyecto/proyect.component";
import cls from "./db.json";
import P2 from "./parcila_2.json";

function App() {
  return (
    <Fragment>
      {/*    <NavBar /> */}
      <Routes>
        <Route path="" element={<HomeComponent />} />
        <Route
          path="/p1"
          element={<Parcial1Component CLASSESPROP={cls.classes} />}
        />
        <Route
          path="/p2"
          element={<Parcial1Component CLASSESPROP={P2.classes} />}
        />
        <Route path="/proyecto" element={<ProyectComponent />} />
      </Routes>
    </Fragment>
  );
}

export default App;
