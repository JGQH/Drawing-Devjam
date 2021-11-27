import useDebounce from './useDebounce'

export default function useArray<T>(initialValues:T[] = []) {
  const [ list, setList ] = useDebounce<T[]>(initialValues, 1000)
  
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