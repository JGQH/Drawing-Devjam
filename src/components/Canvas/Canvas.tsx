import React, { MouseEvent } from 'react'
import useCanvas from '@Hooks/useCanvas'
import useDrawingContext from '@Hooks/useDrawingContext'
import styles from './Canvas.module.scss'

interface CanvasProps {
  width: number
  height: number
}

export default function Canvas(props:CanvasProps) {
  const className = ['canvas-component', 'drawing-component', styles.container].join(' ')
  const { color, size, canvasRef } = useDrawingContext()
  const [ mouseIsDown, setMouseUp, setMouseDown ] = useCanvas()

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
      context.arc(mouseX, mouseY, size, 0, Math.PI * 2, true)
      context.closePath()
      context.fill()
    }
  }

  return (
    <div {...{ className }}>
      <canvas ref={canvasRef} className={styles.canvas} {...props} onMouseUp={setMouseUp} onMouseDown={setMouseDown} onMouseMove={e => mouseIsDown && onDraw(e)} />
    </div>
  )
}