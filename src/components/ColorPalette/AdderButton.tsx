import React, { useRef } from 'react'
import useDrawingContext from '@Hooks/useDrawingContext'
import styles from './ColorPalette.module.scss'

interface AdderButtonProps {
  updating: boolean
  push: (element:string) => void
}

export default function AdderButton({ updating, push }:AdderButtonProps) {
  const hiddenInput = useRef<HTMLInputElement>(null)
  const { setColor } = useDrawingContext()

  function doPush(newColor:string) {
    //Automatically select new color
    setColor(newColor)
    push(newColor)
  }

  return (
    <>
      <button id={styles.adderButton} onClick={() => hiddenInput.current?.click()} disabled={updating} />
      <input ref={hiddenInput} type='color' onChange={e => doPush(e.target.value)} />
    </>
  )
}