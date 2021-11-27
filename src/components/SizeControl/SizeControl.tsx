import React from 'react'
import useDrawingContext from '@Hooks/useDrawingContext'
import styles from './SizeControl.module.scss'

export default function SizeControl() {
  const className = ['sizecontrol-component', 'drawing-component', styles.container].join(' ')
  const { size, setSize } = useDrawingContext()

  return (
    <div {...{ className }}>
      <input type='range' min='5' max='50' defaultValue='20' onChange={e => setSize(+e.target.value)} />
      <p>Size: {size}</p>
    </div>
  )
}