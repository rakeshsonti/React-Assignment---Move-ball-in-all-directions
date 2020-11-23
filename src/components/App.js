import React, { Component, useState, useEffect } from "react";
import "../styles/App.css";

const App = () => {
  const [renderBall, setRenderBall] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [ballPosition, setBallPosition] = useState({
    left: "0px",
    top: "0px",
  });
  useEffect(() => {

    const keyListener=(evt)=>{
    if(evt.keyCode===37)
    {
      // setX(x-5);
      updateXY(x-5,y);
    }
    if(evt.keyCode===38)
    {
      // setY(y-5);
      updateXY(x,y-5);
    }
    if(evt.keyCode===39)
    {
      updateXY(x+5,y);
      // setX(x+5);
    }
    if(evt.keyCode===40)
    {
      updateXY(x,y+5);
      // setY(y+5);
    }
    // setBallPosition({
    //   left:x+'px',
    //   top:y+'px',
    // })
    }
    document.addEventListener("keydown",keyListener);
    //clean up code
    return ()=>{
      document.removeEventListener("keydown",keyListener);
    }
  });
  const updateXY=(newX,newY)=>{
    setX(newX);
    setY(newY);
    setBallPosition({
      left:newX+'px',
      top:newY+'px'
    })
  }
  const reset = () => {
    setRenderBall(false);
    setX(0);
    setY(0);
    setBallPosition({
      left: "0px",
      top: "0px",
    });
  };
  const start = () => {
    setRenderBall(true);
  };
  const renderChoice = () => {
    return renderBall ? (
      <div
        className="ball"
        style={{
          position: "absolute",
          left: ballPosition.left,
          top: ballPosition.top,
        }}
      ></div>
    ) : (
      <button onClick={start} className="start">
        Start
      </button>
    );
  };

  return (
    <div className="playground">
      <button onClick={reset} className="reset">
        Reset
      </button>
      {renderChoice()}
    </div>
  );
};

export default App;
