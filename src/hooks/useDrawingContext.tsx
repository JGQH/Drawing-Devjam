import { createContext, useContext } from 'react'
import type { Dispatch, SetStateAction } from 'react'

interface DrawingContextInterface {
  color: string,
  setColor: Dispatch<SetStateAction<string>>
}

const DrawingContext = createContext<DrawingContextInterface>({
  color: '#000000',
  setColor: () => {}
})

export const DrawingContextProvider = DrawingContext.Provider

export default function useDrawingContext() {
  return useContext(DrawingContext)
}