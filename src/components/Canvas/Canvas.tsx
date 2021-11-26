import React, { MouseEvent } from 'react'
import useCanvas from '@Hooks/useCanvas'
import useDrawingContext from '@Hooks/useDrawingContext'

interface CanvasProps {
  width: number
  height: number
}

export default function Canvas(props:CanvasProps) {
  const { color } = useDrawingContext()
  const [ canvasRef, mouseIsDown, setMouseUp, setMouseDown ] = useCanvas()

  function onDraw(e:MouseEvent<HTMLCanvasElement>){
    const canvas = canvasRef.current

    if(!canvas) return

    const context = canvas.getContext('2d')
    if(context) {
      const { left, top } = canvas.getBoundingClientRect()
      const mouseX = e.clientX - left
      const mouseY = e.clientY - top


      context.fillStyle = color
      context.beginPath()
      context.arc(mouseX, mouseY, 20, 0, Math.PI * 2, true)
      context.closePath()
      context.fill()
    }
  }

  return <canvas ref={canvasRef} {...props} onMouseUp={setMouseUp} onMouseDown={setMouseDown} onMouseMove={e => mouseIsDown && onDraw(e)} ></canvas>
}