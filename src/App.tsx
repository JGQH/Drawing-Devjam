import React, { useState } from 'react'
import Canvas from '@Components/Canvas'
import { DrawingContextProvider } from '@Hooks/useDrawingContext'
import ColorPalette from '@Components/ColorPalette'

export default function App() {
  const [ color, setColor ] = useState('#000000')

  return (
    <DrawingContextProvider value={{ color, setColor }}>
    <div>
      <ColorPalette />
      <Canvas width={500} height={500} />
    </div>
    </DrawingContextProvider>
  )
}