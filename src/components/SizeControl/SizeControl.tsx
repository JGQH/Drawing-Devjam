import React from 'react'
import useDrawingContext from '@Hooks/useDrawingContext'

export default function SizeControl() {
  const { size, setSize } = useDrawingContext()

  return (
    <div className='sizecontrol-component drawing-component'>
      <input type='range' min='5' max='50' defaultValue='20' onChange={e => setSize(+e.target.value)} />
      <div>Size: {size}</div>
    </div>
  )
}