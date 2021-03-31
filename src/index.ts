import Canvas from "./utils/canvas/canvas";
import drawRect from "./utils/canvas/drawRect";

const canvas = Canvas.getInstance();
canvas.createContext();

drawRect(40, 40, 40, 40, "#2d3436");
