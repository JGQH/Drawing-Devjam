import { createContext, useContext } from 'react'
import type { Dispatch, SetStateAction } from 'react'

interface DrawingContextInterface {
  color: string,
  setColor: Dispatch<SetStateAction<string>>,
  size: number,
  setSize: Dispatch<SetStateAction<number>>
}

const DrawingContext = createContext<DrawingContextInterface>({
  color: '#000000',
  setColor: () => {},
  size: 20,
  setSize: () => {}
})

export const DrawingContextProvider = DrawingContext.Provider

export default function useDrawingContext() {
  return useContext(DrawingContext)
}