import React, { useRef } from 'react'
import useDrawingContext from '@Hooks/useDrawingContext'
import styles from './ColorPalette.module.scss'

interface AdderButtonProps {
  push: (element:string) => void
}

export default function AdderButton({ push }:AdderButtonProps) {
  const hiddenInput = useRef<HTMLInputElement>(null)
  const { setColor } = useDrawingContext()

  function doPush(newColor:string) {
    //Automatically select new color
    setColor(newColor)
    push(newColor)
  }

  return (
    <>
      <button className={styles.button} onClick={() => hiddenInput.current?.click()}>
        +
      </button>
      <input ref={hiddenInput} type='color' onChange={e => doPush(e.target.value)} />
    </>
  )
}