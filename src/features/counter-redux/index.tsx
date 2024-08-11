import { IconMinus, IconPlus } from '@tabler/icons-react'
import { useAppDispatch, useAppSelector } from '../../app-store.ts'
import { decrement, increment, selectCount } from './counter-slice.ts'

export function CounterRedux() {
  const count = useAppSelector(selectCount)
  const dispatch = useAppDispatch()

  function handleIncrement() {
    dispatch(increment())
  }

  function handleDecrement() {
    dispatch(decrement())
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
