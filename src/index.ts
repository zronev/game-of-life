import Canvas from './canvas/canvas'
import drawRect from './canvas/drawRect'

const canvas = Canvas.getInstance()
canvas.createContext()

drawRect(40, 40, 40, 40, '#2d3436')
