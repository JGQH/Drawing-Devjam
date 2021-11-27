import React, { CSSProperties, MouseEvent } from 'react'
import useDrawingContext from '@Hooks/useDrawingContext'
import styles from './ColorPalette.module.scss'

interface ColorButtonProps {
  color: string,
  pop: (element:string) => void
}

export default function ColorButton({ color, pop }:ColorButtonProps) {
  const { color:brushColor , setColor } = useDrawingContext()
  const isSelected = brushColor === color

  function doPop(e:MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    if(isSelected) {
      setColor('#0000')
    }
    pop(color)
  }
  
  return (
    <button
      style={{ '--button-color': color } as CSSProperties}
      className={`${styles.button} ${isSelected && styles.selected}`}
      onClick={() => setColor(color)}
      onContextMenu={doPop} />
  )
}