import Canvas from "./canvas";

const drawRect = (
  x: number,
  y: number,
  width: number,
  height: number,
  color?: string
) => {
  const canvas = Canvas.getInstance();
  const ctx = canvas.getContext();
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
};

export default drawRect;
