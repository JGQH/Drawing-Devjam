import React, { useRef, useState } from 'react'
import Canvas from '@Components/Canvas'
import { DrawingContextProvider } from '@Hooks/useDrawingContext'
import ColorPalette from '@Components/ColorPalette'
import SizeControl from '@Components/SizeControl'
import './App.scss'
import ActionPanel from './components/ActionPanel/ActionPanel'

export default function App() {
  const [ color, setColor ] = useState('#000000')
  const [ size, setSize ] = useState(20)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  return (
    <DrawingContextProvider value={{ color, setColor, size, setSize, canvasRef }}>
      <ColorPalette />
      <Canvas width={750} height={500} />
      <SizeControl />
      <ActionPanel />
    </DrawingContextProvider>
  )
}