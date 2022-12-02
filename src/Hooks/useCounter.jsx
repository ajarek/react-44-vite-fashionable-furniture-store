import { useState } from 'react'

export const useCounter = (initialValue) => {
  const [count, setCount] = useState(initialValue || 0)
  const increment = () => setCount((x) => x + 1)
  const decrement = () => (count > 0 ? setCount((x) => x - 1) : 0)
  return {
    count,
    increment,
    decrement,
    setCount,
  }
}

export default useCounter
