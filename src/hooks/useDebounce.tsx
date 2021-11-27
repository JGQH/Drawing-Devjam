import { useEffect, useState } from 'react'

// Similar to useState, but with certain delay before the value changes
export default function useDebounce<T>(initialValue:T, delay:number = 500) {
  const [ value, setValue ] = useState(initialValue)
  const [ debouncedValue, setDebouncedValue ] = useState(initialValue)

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => clearTimeout(timer)
  }, [value, delay])

  return [ debouncedValue, setValue ] as const
}