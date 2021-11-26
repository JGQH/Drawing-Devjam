import React, { useState } from 'react'
import Canvas from '@Components/Canvas'
import { DrawingContextProvider } from '@Hooks/useDrawingContext'
import ColorPalette from '@Components/ColorPalette'
import SizeControl from '@Components/SizeControl'
import './App.scss'

export default function App() {
  const [ color, setColor ] = useState('#000000')
  const [ size, setSize ] = useState(20)

  return (
    <DrawingContextProvider value={{ color, setColor, size, setSize }}>
      <ColorPalette />
      <Canvas width={750} height={750} />
      <SizeControl />
    </DrawingContextProvider>
  )
}