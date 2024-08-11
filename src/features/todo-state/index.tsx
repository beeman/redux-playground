import { useState } from 'react'
import { CoreUiDebug } from '../../components/core-ui-debug.tsx'
import { CoreUiPage } from '../../components/core-ui-page.tsx'
import { TodoUiInput } from '../../components/todo-ui-input.tsx'
import { TodoUiList } from '../../components/todo-ui-list.tsx'
import { initialTodos } from '../../shared/initial-todos.ts'

export function TodoState() {
  const [todos, setTodos] = useState(initialTodos)

  function handleAddTodo(title: string) {
    setTodos([...todos, { id: new Date().getTime(), title, completed: false }])
  }

  function handleDeleteTodo(id: number) {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  function handleToggleTodo(id: number) {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)))
  }

  return (
    <CoreUiPage title="Todos using State">
      <TodoUiInput add={handleAddTodo} />
      <TodoUiList todos={todos} deleteTodo={handleDeleteTodo} toggleTodo={handleToggleTodo} />
      <CoreUiDebug data={todos} />
    </CoreUiPage>
  )
}
