import { useAppDispatch, useAppSelector } from '../../app-store.ts'
import { CoreUiPage } from '../../components/core-ui-page.tsx'
import { CounterUI } from '../../components/counter-ui.tsx'
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
    <CoreUiPage title="Counter using Redux">
      <CounterUI count={count} handleIncrement={handleIncrement} handleDecrement={handleDecrement} />
    </CoreUiPage>
  )
}
