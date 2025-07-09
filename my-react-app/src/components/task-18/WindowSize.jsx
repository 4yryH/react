import React from 'react';
import {useWindowSize} from "./useWindowSize.jsx";

export function WindowSizeDisplay() {
  const {width, height} = useWindowSize();

  return (
    <div>
      <h1>Размеры окна</h1>
      <p>Ширина: {width}px</p>
      <p>Высота: {height}px</p>
    </div>
  );
}
