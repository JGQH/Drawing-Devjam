import React, { MouseEvent, useEffect } from 'react'
import useCanvas from '@Hooks/useCanvas'
import useDrawingContext from '@Hooks/useDrawingContext'
import BrushesList from '@Components/BrushesList'
import styles from './Canvas.module.scss'
import useHistory from '@Hooks/useHistory'

export default function Canvas() {
  const className = ['canvas-component', 'drawing-component', styles.container].join(' ')
  const { width:realWidth, height:realHeight , color, size, canvasRef, brushType } = useDrawingContext()
  const [ lastPosition, mouseIsDown, setMouseUp, setMouseDown ] = useCanvas()

  const pushToHistory = useHistory(canvasRef.current?.toDataURL(), (element) => {
    if(element) {
      const image = new Image()
      image.onload = () => {
        //We really don't need to add nested ifs for this, right?
        canvasRef.current?.getContext('2d')?.clearRect(0, 0, realWidth, realHeight)
        canvasRef.current?.getContext('2d')?.drawImage(image, 0, 0)
      }
      image.src = element
    }
  })

  useEffect(() => {
    //The toDataURL above is called while the component is not mounted yet, too bad
    pushToHistory(canvasRef.current?.toDataURL())
  }, [])

  function onDraw(e:MouseEvent<HTMLCanvasElement>){
    const canvas = canvasRef.current
    if(!canvas) return

    //Get mouse position, scaled to fit current width and height
    const { left, top, width, height } = canvas.getBoundingClientRect()
    const x = (e.clientX - left) * (realWidth / width)
    const y = (e.clientY - top) * (realHeight / height)

    const context = canvas.getContext('2d')

    if(context) { //If the context is stablished, draw a circle and update last drawn point
      const drawFunction = BrushesList[brushType]

      drawFunction(context, color, size, x, y, lastPosition.current)

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
        onMouseUp={() => {
          setMouseUp()

          canvasRef.current && pushToHistory(canvasRef.current.toDataURL())
        }}
        onMouseDown={e => {
          setMouseDown()
          onDraw(e)
        }}
        onMouseMove={e => mouseIsDown && onDraw(e)}
        onMouseLeave={() => lastPosition.current = undefined} />
    </div>
  )
}