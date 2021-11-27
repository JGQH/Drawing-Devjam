import { useState } from 'react'

export default function useArray<T>(initialValues:T[] = []) {
  const [ list, setList ] = useState<T[]>(initialValues)
  
  function push(element:T) {
    setList([...list, element])
  }

  function pop(element:T) {
    if(list.length > 1) {
      setList(list.filter(elem => elem !== element))
    }
  }

  return [ list, push, pop] as const
}