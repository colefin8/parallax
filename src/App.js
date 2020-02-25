import React, { useState } from "react";
import "./App.css";

function App() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  return (
    <div
      className="background"
      style={{ backgroundPosition: `${x + 50}% ${y + 50}%` }}
      onMouseMove={e => {
        setX((e.clientX / window.innerWidth) * 20);
        setY((e.clientY / window.innerHeight) * 20);
      }}
    >
      <div className="App">Parallaxing</div>
    </div>
  );
}

export default App;
