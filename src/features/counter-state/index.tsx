import { IconMinus, IconPlus } from '@tabler/icons-react'
import { useState } from 'react'

export function CounterState() {
  const [count, setCount] = useState(42)

  function handleIncrement() {
    setCount(count + 1)
  }

  function handleDecrement() {
    setCount(count - 1)
  }

  return (
    <div className="d-flex flex-column justify-content-center align-items-center h-100">
      <div className="d-flex gap-2">
        <button className="btn btn-sm btn-outline-primary" onClick={handleDecrement}>
          <IconMinus />
        </button>
        <button className="btn btn-sm btn-default" disabled>
          {count}
        </button>
        <button className="btn btn-sm btn-outline-primary" onClick={handleIncrement}>
          <IconPlus />
        </button>
      </div>
    </div>
  )
}
