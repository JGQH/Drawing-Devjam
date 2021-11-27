import React from 'react'
import useArray from '@Hooks/useArray'
import ColorButton from './ColorButton'
import styles from './ColorPalette.module.scss'
import AdderButton from './AdderButton'

export default function ColorPalette() {
  const [ array, updating, push, pop ] = useArray(['#000000', '#FFFFFF'])
  const className = ['colorpalette-component', 'drawing-component', styles.container].join(' ')

  return (
    <div {...{ className }}>
      {array.map((color, i) => 
        <ColorButton key={i} {...{ color, pop }} />
      )}
      <AdderButton {...{ updating, push }} />
    </div>
  )
}