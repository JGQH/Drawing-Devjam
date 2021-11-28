import useDebounce from './useDebounce'

export default function useArray<T>(initialValues:T[] = []) {
  const [ list, updating, setList ] = useDebounce<T[]>(initialValues, 750)
  
  function push(element:T) {
    setList([...list, element])
  }

  function pop(element:T) {
    if(list.length > 1) {
      setList(list.filter(elem => elem !== element))
    }
  }

  return [ list, updating, push, pop] as const
}