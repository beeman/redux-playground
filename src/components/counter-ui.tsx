import { IconMinus, IconPlus } from '@tabler/icons-react'

export function CounterUI({
  count,
  handleIncrement,
  handleDecrement,
}: {
  count: number
  handleIncrement: () => void
  handleDecrement: () => void
}) {
  return (
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
  )
}
