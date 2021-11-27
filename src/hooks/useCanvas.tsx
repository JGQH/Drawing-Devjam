import { useState } from 'react'

export default function useCanvas() {
  const [ mouseIsDown, setMouseIsDown ] = useState(false)

  const setMouseDown = () => setMouseIsDown(true)
  const setMouseUp = () => setMouseIsDown(false)

  return [ mouseIsDown, setMouseUp, setMouseDown ] as const
}