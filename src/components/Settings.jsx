import React, { useState } from 'react';
import './Settings.css';

export default function Settings() {
  // Declaramos los estados iniciales para las variables de la simulación
  const [gravity, setGravity] = useState(9.81);
  const [friction, setFriction] = useState(0.95);
  const [elasticity, setElasticity] = useState(0.7);
  const [numBalls, setNumBalls] = useState(1);

  // Función que se ejecuta cuando se envía el formulario
  const handleSubmit = (e) => { 
    e.preventDefault(); // Prevenimos el comportamiento por defecto del formulario (recargar la página)
    const formData = new FormData(e.currentTarget); // Obtenemos los datos del formulario
    // Actualizamos los estados con los valores del formulario
    setGravity(parseFloat(formData.get('gravity')));
    setFriction(parseFloat(formData.get('friction')));
    setElasticity(parseFloat(formData.get('elasticity')));
    setNumBalls(parseInt(formData.get('numBalls'), 10));
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <label>
          Gravity:
          <input
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
            type="number"
            name="numBalls"
            value={numBalls}
            onChange={(e) => setNumBalls(parseInt(e.target.value, 10))}
          />
        </label>
        <button type="submit">Submit</button>
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
