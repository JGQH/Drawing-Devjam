import React, { useRef, useState } from 'react'
import Canvas from '@Components/Canvas'
import { DrawingContextProvider } from '@Hooks/useDrawingContext'
import ColorPalette from '@Components/ColorPalette'
import SizeControl from '@Components/SizeControl'
import ActionPanel from '@Components/ActionPanel'
import BrushPalette from '@Components/BrushPalette'
import TitleHolder from '@Components/TitleHolder'
import type { BrushListKey } from '@Components/BrushesList'
import './App.scss'

export default function App() {
  const [ color, setColor ] = useState('#000000')
  const [ size, setSize ] = useState(20)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const drawingTitle = useRef('drawing-app')
  const [ brushType, setBrushType ] = useState<BrushListKey>('circle')

  return (
    <DrawingContextProvider value={{ width: 750, height: 500, color, setColor, size, setSize, canvasRef, brushType, setBrushType, drawingTitle }}>
      <TitleHolder />
      <ColorPalette />
      <Canvas />
      <SizeControl />
      <ActionPanel />
      <BrushPalette />
    </DrawingContextProvider>
  )
}