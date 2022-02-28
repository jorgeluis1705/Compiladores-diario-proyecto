import "./App.css";
import { Routes, Route } from "react-router-dom";
import { HomeComponent } from "./components/home.component";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="" element={<HomeComponent />} />
      </Routes>
    </div>
  );
}

export default App;
