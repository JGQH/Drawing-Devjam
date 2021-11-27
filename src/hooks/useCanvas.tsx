import { useState, useRef } from 'react'

interface Position {
  x: number
  y: number
}

export default function useCanvas() {
  const lastPosition = useRef<Position>()
  const [ mouseIsDown, setMouseIsDown ] = useState(false)

  const setMouseDown = () => setMouseIsDown(true)
  const setMouseUp = () => {
    lastPosition.current = undefined
    setMouseIsDown(false)
  }

  return [ lastPosition, mouseIsDown, setMouseUp, setMouseDown ] as const
}