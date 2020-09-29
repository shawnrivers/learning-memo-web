import * as React from 'react';
import { CanvasRefObject } from '../types/canvas';
import { drawBackground } from '../utils/draw';

export function useDrawBasicCanvas(canvasRef: CanvasRefObject) {
  React.useEffect(() => {
    const canvas = canvasRef.current;

    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;

    const ctx = canvas.getContext('2d');

    drawBackground(ctx, canvasWidth, canvasHeight);

    ctx.lineWidth = 5;
    ctx.strokeStyle = 'rgb(255, 255, 255)';
    ctx.strokeRect(25, 25, 200, 200);

    ctx.fillStyle = 'rgb(255, 0, 0)';
    ctx.beginPath();
    ctx.moveTo(50, 50);
    ctx.lineTo(200, 50);
    ctx.lineTo(125, 125);
    ctx.lineTo(50, 50);
    ctx.fill();

    ctx.fillStyle = 'red';
    ctx.font = '36px georgia';
    ctx.fillText('Canvas text', 25, 275);

    const image = new Image();
    image.src = '/nogizaka.png';
    image.onload = () => {
      ctx.drawImage(image, 100, 75, 100, 125);
    };
  }, []);
}
