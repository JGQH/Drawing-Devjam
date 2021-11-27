import React, { MouseEvent } from 'react'
import useCanvas from '@Hooks/useCanvas'
import useDrawingContext from '@Hooks/useDrawingContext'
import styles from './Canvas.module.scss'

export default function Canvas() {
  const className = ['canvas-component', 'drawing-component', styles.container].join(' ')
  const { width:realWidth, height:realHeight , color, size, canvasRef } = useDrawingContext()
  const [ lastPosition, mouseIsDown, setMouseUp, setMouseDown ] = useCanvas()

  function onDraw(e:MouseEvent<HTMLCanvasElement>){
    const canvas = canvasRef.current
    if(!canvas) return

    //Get mouse position, scaled to fit current width and height
    const { left, top, width, height } = canvas.getBoundingClientRect()
    const x = (e.clientX - left) * (realWidth / width)
    const y = (e.clientY - top) * (realHeight / height)

    const context = canvas.getContext('2d')

    if(context) { //If the context is stablished, draw a circle and update last drawn point
      context.fillStyle = color
      context.beginPath()
      context.arc(x, y, size / 2, 0, 2 * Math.PI, true)
      context.closePath()
      context.fill()

      if(lastPosition.current) { //If there was a last drawn point, draw a line from it to the current point
        context.beginPath()
        context.strokeStyle = color
        context.lineWidth = size
        context.moveTo(lastPosition.current.x, lastPosition.current.y)
        context.lineTo(x, y)
        context.closePath()
        context.stroke()
      }

      lastPosition.current = { x, y }
    }
  }

  return (
    <div {...{ className }}>
      <canvas
        width={realWidth}
        height={realHeight}
        ref={canvasRef}
        className={styles.canvas}
        onMouseUp={setMouseUp}
        onMouseDown={e => {
          setMouseDown()
          onDraw(e)
        }}
        onMouseMove={e => mouseIsDown && onDraw(e)}
        onMouseLeave={() => lastPosition.current = undefined} />
    </div>
  )
}