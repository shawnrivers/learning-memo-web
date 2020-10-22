import * as React from 'react';
import { CanvasRefObject } from '../types/canvas';
import { drawBackground } from '../utils/draw';
import { degToRad } from '../utils/math';

export function useDrawAnimationCanvas(
  canvasRef: CanvasRefObject
): [() => void] {
  const clearAnimationCanvas = React.useCallback(() => {
    const canvas = canvasRef.current;
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
    const ctx = canvas.getContext('2d');
    
    drawBackground(ctx, canvasWidth, canvasHeight);
  }, []);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
    const canvasX = canvas.offsetLeft;
    const canvasY = canvas.offsetTop;
    const ctx = canvas.getContext('2d');

    drawBackground(ctx, canvasWidth, canvasHeight);

    let curX: number;
    let curY: number;
    let pressed = false;

    document.onmousemove = function (e) {
      curX = window.Event
        ? e.pageX
        : e.clientX +
          (document.documentElement.scrollLeft
            ? document.documentElement.scrollLeft
            : document.body.scrollLeft);
      curY = window.Event
        ? e.pageY
        : e.clientY +
          (document.documentElement.scrollTop
            ? document.documentElement.scrollTop
            : document.body.scrollTop);
    };

    canvas.onmousedown = function () {
      pressed = true;
    };

    canvas.onmouseup = function () {
      pressed = false;
    };

    function draw() {
      if (pressed) {
        const transformedCurX = curX - canvasX;
        const transformedCurY = curY - canvasY;

        ctx.fillStyle = 'red';
        ctx.beginPath();
        ctx.arc(
          transformedCurX,
          transformedCurY,
          8,
          degToRad(0),
          degToRad(360),
          false
        );
        ctx.fill();
      }

      requestAnimationFrame(draw);
    }

    draw();
  }, []);

  return [clearAnimationCanvas];
}
