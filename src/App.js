import React from "react";
import Navbar from "./components/Navbar.js";
import Home from "./Pages/Home";
import "./CSS/app.css";

function App() {

return (
  <div className="App">
      <Navbar/>
      <main>
        <Home/>
      </main>
      <footer>
        <p>A Javascript App with React</p>
      </footer>
    </div>
  );
}

export default App;
