import { useState } from 'react'

export const useCounter = (initialValue) => {
  const [count, setCount] = useState(initialValue || 0)
  const increment = () => setCount((x) => x + 1)
  const decrement = () => (count > 1 ? setCount((x) => x - 1) : 1)
  return {
    count,
    increment,
    decrement,
    setCount,
  }
}

export default useCounter
