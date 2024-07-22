import React, { useEffect, useState } from 'react';
import buttonSubmit from "../assets/buttonSubmit.mp3";
import inputSound from "../assets/inputZoom.wav";
import './Settings.css';

const Settings = ({ size, setSize, positionX, setPositionX, positionY, setPositionY }) => {
  const [buttonSubmitAudio, setButtonSubmitAudio] = useState(null);
  const [inputAudio, setInputAudio] = useState(null);

  useEffect(() => {
    // Pre-carga de archivos de audio
    const buttonSubmitAudio = new Audio(buttonSubmit);
    const inputAudio = new Audio(inputSound);
    setButtonSubmitAudio(buttonSubmitAudio);
    setInputAudio(inputAudio);
  }, []);

  function playSound(audio) {
    if (audio) {
      audio.currentTime = 0;
      audio.play();
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const newSize = parseInt(formData.get('size'), 10);
    const newPositionX = parseInt(formData.get('positionX'), 10);
    const newPositionY = parseInt(formData.get('positionY'), 10);

    setSize(newSize);
    setPositionX(newPositionX);
    setPositionY(newPositionY);
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <label>
          Tamaño:
          <input
            onMouseDown={() => playSound(inputAudio)}
            type="number"
            name="size"
            value={size}
            onChange={(e) => setSize(parseInt(e.target.value))}
          />
        </label>
        <br />
        <label>
          Posición X:
          <input
            onMouseDown={() => playSound(inputAudio)}
            type="number"
            name="positionX"
            value={positionX}
            onChange={(e) => setPositionX(parseInt(e.target.value))}
          />
        </label>
        <br />
        <label>
          Posición Y:
          <input
            onMouseDown={() => playSound(inputAudio)}
            type="number"
            name="positionY"
            value={positionY}
            onChange={(e) => setPositionY(parseInt(e.target.value))}
          />
        </label>
        <br />
        <button onMouseDown={() => playSound(buttonSubmitAudio)} type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Settings;
