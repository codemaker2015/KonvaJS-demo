import React, { Component } from "react";
import Konva from "konva";
import { render } from "react-dom";
import { Stage, Layer, Rect } from "react-konva";

const ThemeContext = React.createContext("red");

const ThemedRect = () => {
  const value = React.useContext(ThemeContext);
  return (
    <Rect x={20} y={50} width={100} height={100} fill={value} shadowBlur={10} />
  );
};

const Canvas = () => {
  return (
    <ThemeContext.Consumer>
      {value => (
        <Stage width={window.innerWidth} height={window.innerHeight}>
          <ThemeContext.Provider value={value}>
            <Layer>
              <ThemedRect />
            </Layer>
          </ThemeContext.Provider>
        </Stage>
      )}
    </ThemeContext.Consumer>
  );
};

class ThemeDemo extends Component {
  render() {
    return (
      <ThemeContext.Provider value="blue">
        <Canvas />
      </ThemeContext.Provider>
    );
  }
}

export default ThemeDemo;
