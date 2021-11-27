import React, { useRef, useState } from 'react'
import Canvas from '@Components/Canvas'
import { DrawingContextProvider } from '@Hooks/useDrawingContext'
import ColorPalette from '@Components/ColorPalette'
import SizeControl from '@Components/SizeControl'
import './App.scss'
import ActionPanel from '@Components/ActionPanel'

export default function App() {
  const [ color, setColor ] = useState('#000000')
  const [ size, setSize ] = useState(20)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  //Responsiveness be damned (Just for this project tho)
  const width = Math.round(window.innerWidth * 0.4)
  const height = Math.round(window.innerHeight * 0.5)

  return (
    <DrawingContextProvider value={{ width, height, color, setColor, size, setSize, canvasRef }}>
      <ColorPalette />
      <Canvas />
      <SizeControl />
      <ActionPanel />
    </DrawingContextProvider>
  )
}