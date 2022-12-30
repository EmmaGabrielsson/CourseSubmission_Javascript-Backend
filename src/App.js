import React from "react";
import Navbar from "./components/Navbar.js";
import Home from "./Pages/Home";
import "./app.css";

function App() {

return (
  <div className="App">
      <Navbar/>
      <main>
        <Home/>
      </main>
      <footer>
        <p>A Javascript app with React by Emma Gabrielsson</p>
      </footer>
    </div>
  );
}

export default App;
