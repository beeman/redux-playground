import { Todo } from '../types/todo.ts'
import { TodoUiItem } from './todo-ui-item.tsx'

export function TodoUiList({
  todos,
  deleteTodo,
  toggleTodo,
}: {
  todos: Todo[]
  deleteTodo: (id: number) => void
  toggleTodo: (id: number) => void
}) {
  return (
    <div className="d-flex flex-column gap-2">
      {todos.map((todo) => (
        <TodoUiItem key={todo.id} todo={todo} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
      ))}
    </div>
  )
}
