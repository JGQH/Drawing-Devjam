import React, { CSSProperties } from 'react'
import useDrawingContext from '@Hooks/useDrawingContext'
import styles from './ColorPalette.module.scss'

interface ColorButtonProps {
  color: string
}

export default function ColorButton({ color }:ColorButtonProps) {
  const { color:brushColor , setColor } = useDrawingContext()
  const isSelected = brushColor === color

  function doSetColor() {
    setColor(color)
  }
  
  return (
    <button className={`${styles.button} ${isSelected && styles.selected}`} onClick={doSetColor} style={{ '--button-color': color } as CSSProperties} />
  )
}