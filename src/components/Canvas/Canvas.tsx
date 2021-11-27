import React, { MouseEvent } from 'react'
import useCanvas from '@Hooks/useCanvas'
import useDrawingContext from '@Hooks/useDrawingContext'
import styles from './Canvas.module.scss'

export default function Canvas() {
  const className = ['canvas-component', 'drawing-component', styles.container].join(' ')
  const { width, height, color, size, canvasRef } = useDrawingContext()
  const [ lastPosition, mouseIsDown, setMouseUp, setMouseDown ] = useCanvas()

  function onDraw(e:MouseEvent<HTMLCanvasElement>){
    const canvas = canvasRef.current
    if(!canvas) return

    //Check mouse position, and update last mouse position
    const { left, top } = canvas.getBoundingClientRect()
    const x = e.clientX - left
    const y = e.clientY - top

    if(lastPosition.current) {
      const context = canvas.getContext('2d')

      if(context) {
        
        context.fillStyle = color
        context.beginPath()
        context.arc(lastPosition.current.x, lastPosition.current.y, size / 2, 0, 2 * Math.PI, true)
        context.arc(x, y, size / 2, 0, 2 * Math.PI, true)
        context.closePath()
        context.fill()

        context.beginPath()
        context.strokeStyle = color
        context.lineWidth = size
        context.moveTo(lastPosition.current.x, lastPosition.current.y)
        context.lineTo(x, y)
        context.closePath()
        context.stroke()
      }
    }
    lastPosition.current = { x, y }
  }

  return (
    <div {...{ className }}>
      <canvas
        width={width}
        height={height}
        ref={canvasRef}
        className={styles.canvas}
        onMouseUp={setMouseUp}
        onMouseDown={setMouseDown}
        onMouseMove={e => mouseIsDown && onDraw(e)}
        onMouseLeave={() => lastPosition.current = undefined} />
    </div>
  )
}