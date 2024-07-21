import React, { useRef, useEffect } from 'react'; 
import './Canvas.css'; 

const Canvas = () => {
  const canvasRef = useRef(null); 
  useEffect(() => {
    const canvas = canvasRef.current; 
    const ctx = canvas.getContext('2d'); 

    //define el tamaño del canvas
    canvas.width = 750;
    canvas.height = 550;

    const drawBall = (x, y, r) => {
      ctx.beginPath(); // Inicia un nuevo camino en el contexto
      ctx.arc(x, y, r, 0, 2 * Math.PI); // Dibuja un arco (círculo) en la posición (x, y) con radio r
      ctx.strokeStyle = 'black'; // Define el color del borde del círculo
      ctx.stroke(); // Dibuja el borde del círculo
      ctx.fillStyle = 'red'; // Define el color de relleno del círculo
      ctx.fill(); // Rellena el círculo con el color definido
      ctx.closePath(); // Cierra el camino actual
    };

    // Llama a la función dos veces para dibujar dos círculos
    drawBall(100, 100, 20);
    drawBall(200, 200, 30);
  }, []); 
  return (
    <canvas ref={canvasRef} id="canvas" /> 
  );
};

export default Canvas; 
