import { useRef, useState } from 'react'

export default function useCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [ mouseIsDown, setMouseIsDown ] = useState(false)

  const setMouseDown = () => setMouseIsDown(true)
  const setMouseUp = () => setMouseIsDown(false)

  return [ canvasRef, mouseIsDown, setMouseUp, setMouseDown ] as const
}