import React from 'react'
import useDrawingContext from '@Hooks/useDrawingContext'
import useArray from '@Hooks/useArray'

export default function ColorPalette() {
  const { setColor } = useDrawingContext()
  const [ array, push ] = useArray(['#000000', '#FFFFFF'])

  function doPush(newColor:string) {
    //Automatically select new color
    setColor(newColor)
    push(newColor)
  }

  return (
    <div>
      {array.map((color, i) => 
        <div key={i} onClick={() => setColor(color)}>{color}</div>
      )}
      <input type='color' onChange={e => doPush(e.target.value)} />
    </div>
  )
}