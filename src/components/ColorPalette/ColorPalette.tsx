import React from 'react'
import useArray from '@Hooks/useArray'
import ColorButton from './ColorButton'
import styles from './ColorPalette.module.scss'
import AdderButton from './AdderButton'

export default function ColorPalette() {
  const className = ['colorpalette-component', 'drawing-component', styles.container].join(' ')
  const [ array, push, pop ] = useArray(['#000000', '#FFFFFF'])

  return (
    <div {...{ className }}>
      {array.map((color, i) => 
        <ColorButton key={i} {...{ color, pop }} />
      )}
      <AdderButton {...{ push }} />
    </div>
  )
}