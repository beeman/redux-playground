import { IconTrash } from '@tabler/icons-react'
import { Todo } from '../types/todo.ts'

export function TodoUiItem({
  todo,
  deleteTodo,
  toggleTodo,
}: {
  todo: Todo
  deleteTodo: (id: number) => void
  toggleTodo: (id: number) => void
}) {
  return (
    <div className="input-group">
      <div className="input-group-text">
        <input
          type="checkbox"
          className="form-check-input mt-0"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
        />
      </div>
      <input
        type="text"
        className="form-control"
        defaultValue={todo.title}
        readOnly
        aria-label="Text input with checkbox"
      />
      <button className="btn btn-outline-danger" onClick={() => deleteTodo(todo.id)}>
        <IconTrash />
      </button>
    </div>
  )
}
