import React from "react";
import { useState } from "react";
import "./App.scss";

function App() {
  const [query, setQuery] = useState("");
  const [boolChildWindow, setboolChildWindow] = useState(false);
  console.log(boolChildWindow);
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
          <input
            type="text"
            placeholder="Search"
            className="search"
            onClick={() => setboolChildWindow(!boolChildWindow)}
          ></input>
          {
            boolChildWindow 
            ? <div className="OverlayFather">
            <div className="OverlayDiv">hello</div>
           </div> : null
          }
          
        </div>
      </div>
    </div>
  );
}

export default App;
