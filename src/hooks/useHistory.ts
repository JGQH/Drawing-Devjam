import { useEffect, useRef } from 'react'

export default function useHistory<T>(initialValue:T, onUndo:(element:T) => void) {
  //These values do not trigger a re-render, only calling to onUndo should
  const history = useRef<T[]>([])
  const current = useRef(initialValue)

  function push(element:T) {
    const newHistory = [...history.current, current.current]
    if(newHistory.length >= 10) {
      newHistory.shift()
    }

    history.current = newHistory
    current.current = element
  }

  useEffect(() => {
    function doUndo(e:KeyboardEvent) {
      if(e.code === 'KeyZ' && e.ctrlKey) {
        const element = history.current.pop()

        if(element) {
          current.current = element
          onUndo(element)
        }
      }
    }

    window.addEventListener('keydown', doUndo)

    return () => window.removeEventListener('keydown', doUndo)
  }, [])

  return push
}