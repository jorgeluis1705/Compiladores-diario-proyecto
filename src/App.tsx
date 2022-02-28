import "./App.css";
import { Routes, Route } from "react-router-dom";
import { HomeComponent } from "./components/home.component";
import NavBar from "./components/navbar.component";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="" element={<HomeComponent />} />
      </Routes>
    </div>
  );
}

export default App;
