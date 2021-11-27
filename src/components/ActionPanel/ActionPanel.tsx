import React from 'react'
import useDrawingContext from '@Hooks/useDrawingContext'
import styles from './ActionPanel.module.scss'

export default function ActionPanel() {
  const { width, height, canvasRef } = useDrawingContext()
  const className = ['actionpanel-component', styles.container].join(' ')
  
  function clearCanvas() {
    const context = canvasRef.current?.getContext('2d')

    if(context) {
      context.clearRect(0, 0, width, height)
    }
  }

  function downloadCanvas() {
    const canvas = canvasRef.current

    if(canvas) {
      const image = canvas.toDataURL()

      const link = document.createElement('a')
      link.href = image
      link.download = 'drawing-app.png'
      link.click()
    }
  }

  return (
    <div {...{ className }}>
      <button className='drawing-component' onClick={clearCanvas}>Clear</button>
      <button className='drawing-component' onClick={downloadCanvas}>Download</button>
    </div>
  )
}