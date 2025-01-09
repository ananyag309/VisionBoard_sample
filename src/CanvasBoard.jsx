import React, { useRef } from "react";
import "./CanvasBoard.css"; // Import the CanvasBoard styling

const CanvasBoard = () => {
  const canvasRef = useRef(null);

  const drawOnCanvas = (e) => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    context.fillStyle = "#000";
    context.fillRect(x, y, 5, 5);
  };

  return (
    <div className="canvas-board">
      <h2>Your Vision Board</h2>
      <div className="canvas-wrapper">
        <canvas
          ref={canvasRef}
          width="600"
          height="400"
          onMouseMove={drawOnCanvas}
        />
      </div>
    </div>
  );
};

export default CanvasBoard;
