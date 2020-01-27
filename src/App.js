import React from "react";
import "./App.css";
import WindowArea from "./components/WindowArea";
import Square from "./components/Square";
import Circle from "./components/Circle";
import Rectangle from "./components/Rectangle";
import Line from "./components/Line";

function App() {
  return (
    <div className="App">
      <div className="flexbox">

        <WindowArea id="window-1" className="windowArea">
          <Square id="Square" className="square" draggable="true">
            <p>Square</p>
          </Square>
          <Circle  id="Circle" className="circle" draggable="true">
            <p>Circle</p>
          </Circle>
          <Rectangle id="Rectangle" className="rectangle" draggable="true">
            <p>Rectangle</p>
          </Rectangle>
          <Line id="Line" className="line" draggable="true">
            {/* <p>Line One</p> */}
          </Line>
        </WindowArea>

        <WindowArea id="window-2" className="windowArea">
          
        </WindowArea>


      </div>
    </div>
  );
}

export default App;
