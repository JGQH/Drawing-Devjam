import React from 'react'
import useDrawingContext from '@Hooks/useDrawingContext'
import styles from './ActionPanel.module.scss'

export default function ActionPanel() {
  const { canvasRef } = useDrawingContext()
  const className = ['actionpanel-component', styles.container].join(' ')
  
  function clearCanvas() {
    const context = canvasRef.current?.getContext('2d')

    if(context) {
      context.clearRect(0, 0, 750, 500)
    }
  }

  return (
    <div {...{ className }}>
      <button className='drawing-component' onClick={clearCanvas}>Clear</button>
    </div>
  )
}