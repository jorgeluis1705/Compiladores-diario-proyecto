import "./App.css";
import { Routes, Route } from "react-router-dom";
import { HomeComponent } from "./components/home.component";
import NavBar from "./components/nav-bar/navbar.component";
import { Fragment } from "react";
import { Parcial1Component } from "./components/parcial-1/parcial1.component";

function App() {
  return (
    <Fragment>
      <NavBar />
      <Routes>
        <Route path="" element={<HomeComponent />} />
        <Route path="/p1" element={<Parcial1Component />} />
      </Routes>
    </Fragment>
  );
}

export default App;
