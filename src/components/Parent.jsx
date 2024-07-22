import React, { useState } from 'react';
import Settings from './Settings';
import Canvas from './Canvas';

const Parent = () => {
  const [size, setSize] = useState(50); // Initial ball size
  const [positionX, setPositionX] = useState(100); // Initial X coordinate
  const [positionY, setPositionY] = useState(100); // Initial Y coordinate

  return (
    <div className="container">
      <Settings
        size={size}
        setSize={setSize}
        positionX={positionX}
        setPositionX={setPositionX}
        positionY={positionY}
        setPositionY={setPositionY}
      />
      <Canvas ballSize={size} locationX={positionX} locationY={positionY} />
    </div>
  );
};

export default Parent;
