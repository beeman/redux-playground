import { useState } from 'react'
import { CoreUiPage } from '../../components/core-ui-page.tsx'
import { CounterUI } from '../../components/counter-ui.tsx'

export function CounterState() {
  const [count, setCount] = useState(42)

  function handleIncrement() {
    setCount(count + 1)
  }

  function handleDecrement() {
    setCount(count - 1)
  }

  return (
    <CoreUiPage title="Counter using State">
      <CounterUI count={count} handleIncrement={handleIncrement} handleDecrement={handleDecrement} />
    </CoreUiPage>
  )
}
