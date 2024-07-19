import React, { useState, useEffect } from 'react';
import buttonSubmit from "../assets/buttonSubmit.mp3";
import inputSound from "../assets/inputZoom.wav";
import './Settings.css';

export default function Settings() {
  const [gravity, setGravity] = useState(9.81);
  const [friction, setFriction] = useState(0.95);
  const [elasticity, setElasticity] = useState(0.7);
  const [numBalls, setNumBalls] = useState(1);
  const [buttonSubmitAudio, setButtonSubmitAudio] = useState(null);
  const [inputAudio, setInputAudio] = useState(null);

  useEffect(() => {
    // Preload audio files
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
    setGravity(parseFloat(formData.get('gravity')));
    setFriction(parseFloat(formData.get('friction')));
    setElasticity(parseFloat(formData.get('elasticity')));
    setNumBalls(parseInt(formData.get('numBalls'), 10));
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <label>
          Gravity:
          <input
            onMouseDown={() => playSound(inputAudio)}
            type="number"
            name="gravity"
            value={gravity}
            onChange={(e) => setGravity(parseFloat(e.target.value))}
          />
        </label>
        <br />
        <label>
          Friction:
          <input
            onMouseDown={() => playSound(inputAudio)}
            type="number"
            name="friction"
            value={friction}
            onChange={(e) => setFriction(parseFloat(e.target.value))}
          />
        </label>
        <br />
        <label>
          Elasticity:
          <input
            onMouseDown={() => playSound(inputAudio)}
            type="number"
            name="elasticity"
            value={elasticity}
            onChange={(e) => setElasticity(parseFloat(e.target.value))}
          />
        </label>
        <br />
        <label>
          Number of balls:
          <input
            onMouseDown={() => playSound(inputAudio)}
            type="number"
            name="numBalls"
            value={numBalls}
            onChange={(e) => setNumBalls(parseInt(e.target.value, 10))}
          />
        </label>
        <button onMouseDown={() => playSound(buttonSubmitAudio)} type="submit">Submit</button>
      </form>
      <div className="info-box">
        <h2>Simulation Info</h2>
        <p>Gravity: {gravity}</p>
        <p>Friction: {friction}</p>
        <p>Elasticity: {elasticity}</p>
        <p>Number of balls: {numBalls}</p>
      </div>
    </div>
  );
}
