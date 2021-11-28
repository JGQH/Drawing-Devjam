function drawCircle(context:CanvasRenderingContext2D, color:string, size:number, x:number, y:number, lastPosition?:{ x:number, y:number }) {
  context.fillStyle = color
  context.beginPath()
  context.arc(x, y, size / 2, 0, 2 * Math.PI, true)
  context.closePath()
  context.fill()

  if(lastPosition) {
    context.beginPath()
    context.strokeStyle = color
    context.lineWidth = size
    context.moveTo(lastPosition.x, lastPosition.y)
    context.lineTo(x, y)
    context.closePath()
    context.stroke()
  }
}

function drawRectangle(context:CanvasRenderingContext2D, color:string, size:number, x:number, y:number, lastPosition?:{ x:number, y:number }) {
  context.fillStyle = color
  context.beginPath()
  context.fillRect(x - size / 2, y - size / 2, size, size)
  
  if(lastPosition) {
    if((lastPosition.x > x && y > lastPosition.y) || (x > lastPosition.x && lastPosition.y > y)) {
      //From right to left
      context.moveTo(lastPosition.x + size / 2, lastPosition.y + size / 2)
      context.lineTo(x + size / 2, y + size / 2)
      context.lineTo(x - size / 2, y - size / 2)
      context.lineTo(lastPosition.x - size / 2, lastPosition.y - size / 2)
    } else {
      //From left to right
      context.moveTo(lastPosition.x - size / 2, lastPosition.y + size / 2)
      context.lineTo(x - size / 2, y + size / 2)
      context.lineTo(x + size / 2, y - size / 2)
      context.lineTo(lastPosition.x + size / 2, lastPosition.y - size / 2)
    }
  }

  context.closePath()
  context.fill()
}

function drawStar(context:CanvasRenderingContext2D, color:string, size:number, x:number, y:number) {
  const points = 8 + 2 * Math.floor(Math.random() * 5)

  context.fillStyle = color
  context.beginPath()
  context.moveTo(x + size, y)

  for(let i = 1; i < points; i++) {
    const angle = (2 * Math.PI) * (i / points)
    const radius = (i % 2) ? size / 3 : size

    const newX = x + radius * Math.cos(angle)
    const newY = y - radius * Math.sin(angle)

    context.lineTo(newX, newY)
  }

  context.closePath()
  context.fill()
}

type BrushFunction = (context:CanvasRenderingContext2D, color:string, size:number, x:number, y:number, lastPosition?:{ x:number, y:number }) => void

interface BrushListInterface {
  circle: BrushFunction
  rect: BrushFunction
  star: BrushFunction
}

const BrushesList:BrushListInterface = {
  circle: drawCircle,
  rect: drawRectangle,
  star: drawStar
}

export type BrushListKey = keyof BrushListInterface

export default BrushesList