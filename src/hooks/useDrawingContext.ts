import { createContext, MutableRefObject, useContext } from 'react'
import type { Dispatch, SetStateAction, RefObject } from 'react'
import type { BrushListKey } from '@Components/BrushesList'

interface DrawingContextInterface {
  width: number
  height: number
  color: string
  setColor: Dispatch<SetStateAction<string>>
  size: number
  setSize: Dispatch<SetStateAction<number>>
  canvasRef: RefObject<HTMLCanvasElement>
  brushType: BrushListKey
  setBrushType: Dispatch<SetStateAction<BrushListKey>>
  drawingTitle: MutableRefObject<string>
}

const DrawingContext = createContext<DrawingContextInterface>({} as DrawingContextInterface) //The values are set as soon as the website starts anyway

export const DrawingContextProvider = DrawingContext.Provider

export default function useDrawingContext() {
  return useContext(DrawingContext)
}