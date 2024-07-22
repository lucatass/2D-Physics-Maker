import React, { useRef, useEffect, useState } from 'react'; 
import './Canvas.css'; 

const Canvas = ({ ballSize, locationX, locationY }) => {
  const canvasRef = useRef(null); 
  const [ball, setBall] = useState({
    x: locationX,
    y: locationY,
    radius: ballSize,
    vx: 0, // Velocidad en la dirección x
    vy: 0, // Velocidad en la dirección y
    gravity: 0.1, // Fuerza de la gravedad
    bounce: 0.7 // Factor de amortiguación del rebote
  });

  useEffect(() => {
    const canvas = canvasRef.current; 
    const ctx = canvas.getContext('2d'); 

    // Define el tamaño del canvas
    canvas.width = 750;
    canvas.height = 550;

    const drawBall = (x, y, r) => {
      ctx.beginPath(); // Comienza un nuevo camino
      ctx.arc(x, y, r, 0, 2 * Math.PI); // Dibuja un arco (círculo) en la posición (x, y) con radio r
      ctx.strokeStyle = 'black'; // Establece el color del borde del círculo
      ctx.stroke(); // Dibuja el borde del círculo
      ctx.fillStyle = 'red'; // Establece el color de relleno del círculo
      ctx.fill(); // Rellena el círculo con el color establecido
      ctx.closePath(); // Cierra el camino actual
    };

    const update = () => {
      setBall(prevBall => {
        let { x, y, vx, vy, gravity, bounce, radius } = prevBall;
        vy += gravity; // Aplica la gravedad a la velocidad
        x += vx; // Actualiza la posición x basada en la velocidad
        y += vy; // Actualiza la posición y basada en la velocidad

        // Verifica colisiones con el suelo
        if (y + radius > canvas.height) {
          y = canvas.height - radius; // Coloca la bola en el suelo
          vy *= -bounce; // Invierte la velocidad y aplica el factor de rebote
        }

        // Verifica colisiones con el techo
        if (y - radius < 0) {
          y = radius; // Coloca la bola en la parte superior
          vy *= -bounce; // Invierte la velocidad y aplica el factor de rebote
        }

        // Verifica colisiones con las paredes
        if (x + radius > canvas.width) {
          x = canvas.width - radius; // Coloca la bola contra la pared derecha
          vx *= -bounce; // Invierte la velocidad y aplica el factor de rebote
        }

        if (x - radius < 0) {
          x = radius; // Coloca la bola contra la pared izquierda
          vx *= -bounce; // Invierte la velocidad y aplica el factor de rebote
        }

        return { ...prevBall, x, y, vx, vy };
      });

      // Limpia el canvas antes de dibujar
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Dibuja la bola en las coordenadas actualizadas
      drawBall(ball.x, ball.y, ball.radius);

      // Solicita el siguiente cuadro
      requestAnimationFrame(update);
    };

    // Inicia el bucle de animación
    requestAnimationFrame(update);
  }, [ball]);

  // Efecto para actualizar el estado de la bola cuando cambian las propiedades
  useEffect(() => {
    setBall({
      x: locationX,
      y: locationY,
      radius: ballSize,
      vx: 0,
      vy: 0,
      gravity: 0.1,
      bounce: 0.7
    });
  }, [ballSize, locationX, locationY]);

  return (
    <canvas ref={canvasRef} id="canvas" /> 
  );
};

export default Canvas;

