import "./App.css";
import { Routes, Route } from "react-router-dom";
import { HomeComponent } from "./components/home.component";
import NavBar from "./components/nav-bar/navbar.component";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <NavBar />
      <Routes>
        <Route path="" element={<HomeComponent />} />
      </Routes>
    </Fragment>
  );
}

export default App;
