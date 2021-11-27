import React from 'react'
import useArray from '@Hooks/useArray'
import ColorButton from './ColorButton'
import styles from './ColorPalette.module.scss'
import AdderButton from './AdderButton'

export default function ColorPalette() {
  const [ array, push ] = useArray(['#000000', '#FFFFFF'])

  return (
    <div className={`colorpalette-component ${styles.container}`}>
      {array.map((color, i) => 
        <ColorButton key={i} {...{ color }} />
      )}
      <AdderButton {...{ push }} />
    </div>
  )
}