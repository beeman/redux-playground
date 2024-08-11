import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../app-store'
import { initialTodos } from '../../shared/initial-todos.ts'
import { Todo } from '../../types/todo.ts'

// Define a type for the slice state
interface TodoState {
  items: Todo[]
}

// Define the initial state using that type
const initialState: TodoState = {
  items: initialTodos,
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.items.push(action.payload)
    },

    deleteTodo: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((todo) => todo.id !== action.payload)
    },

    toggleTodo: (state, action: PayloadAction<number>) => {
      state.items = state.items.map((todo) =>
        todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo,
      )
    },
  },
})

// Action creators are generated for each case reducer function
export const { addTodo, deleteTodo, toggleTodo } = todoSlice.actions

export const todoReducer = todoSlice.reducer

// Other code such as selectors can use the imported `RootState` type
export const selectTodos = (state: RootState) => state.todo.items
