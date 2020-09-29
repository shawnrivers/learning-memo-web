export function drawBackground(
  context: CanvasRenderingContext2D,
  canvasWidth: number,
  canvasHeight: number
) {
  context.fillStyle = 'rgb(0, 0, 0)';
  context.fillRect(0, 0, canvasWidth, canvasHeight);
}
