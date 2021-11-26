import { useState } from 'react'

export default function useArray<T>(initialValues:T[] = []) {
  const [ list, setList ] = useState<T[]>(initialValues)
  
  function push(element:T) {
    setList([...list, element])
  }

  return [ list, push ] as const
}