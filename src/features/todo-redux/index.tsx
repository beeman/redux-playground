import { useAppDispatch, useAppSelector } from '../../app-store.ts'
import { CoreUiDebug } from '../../components/core-ui-debug.tsx'
import { CoreUiPage } from '../../components/core-ui-page.tsx'
import { TodoUiInput } from '../../components/todo-ui-input.tsx'
import { TodoUiList } from '../../components/todo-ui-list.tsx'
import { addTodo, deleteTodo, selectTodos, toggleTodo } from './todo-slide.ts'

export function TodoRedux() {
  const todos = useAppSelector(selectTodos)
  const dispatch = useAppDispatch()

  function handleAddTodo(title: string) {
    dispatch(addTodo({ id: new Date().getTime(), title, completed: false }))
  }

  function handleDeleteTodo(id: number) {
    dispatch(deleteTodo(id))
  }

  function handleToggleTodo(id: number) {
    dispatch(toggleTodo(id))
  }

  return (
    <CoreUiPage title="Todos using Redux">
      <TodoUiInput add={handleAddTodo} />
      <TodoUiList todos={todos} deleteTodo={handleDeleteTodo} toggleTodo={handleToggleTodo} />
      <CoreUiDebug data={todos} />
    </CoreUiPage>
  )
}
