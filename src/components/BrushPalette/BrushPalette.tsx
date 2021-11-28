import React, { useState } from 'react'
import useDrawingContext from '@Hooks/useDrawingContext'
import BrushesList, { BrushListKey } from './BrushesList'
import style from './BrushPalette.module.scss'

const BrushesListArray = Object.keys(BrushesList) as BrushListKey[]

export default function BrushPalette() {
  const { setBrushType } = useDrawingContext()
  const [ index, setIndex ] = useState(0)
  const value = BrushesListArray[index]

  function nextKey() {
    const newIndex = (index + 1) % BrushesListArray.length

    setBrushType(BrushesListArray[newIndex])
    setIndex(newIndex)
  }

  return (
    <div className={`brushpalette-component ${style.container}`}>
      <button className='drawing-component' onClick={nextKey}>{value}</button>
    </div>
  )
}