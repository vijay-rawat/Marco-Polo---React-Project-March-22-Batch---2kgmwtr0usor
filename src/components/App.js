import React, { useState } from "react";
import "../styles/App.css";

const App = () => {
  const [getState, setState] = useState(false);

  const toggleText = () => {
    setState(!getState);
  };

  return (
    <div id="main">
      <h1 id="marco-polo">{getState ? "Polo" : "Marco"}</h1>
      <button id="marco-polo-toggler" onClick={toggleText}>
        {getState ? "Marco" : "Polo"}
      </button>
    </div>
  );
};

export default App;
