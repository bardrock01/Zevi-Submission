import React from "react";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <div className="main">
        <div className="ZeviName">
          <img
            src="/my-app/src/assets/img/zevi.png"
            className="ZeviImageTag"
            alt="Zevi"
          />
        </div>
        <div className="SearchBar">
          <input type="text" placeholder="Search" className="search"></input>
        </div>
      </div>
    </div>
  );
}

export default App;
