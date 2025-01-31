import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'

// Reducers from our feature slices
import { counterReducer } from './features/counter-redux/counter-slice.ts'
import { todoReducer } from './features/todo-redux/todo-slide.ts'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store
export type RootState = ReturnType<typeof store.getState>

// Infer the `AppDispatch` type from the store
export type AppDispatch = typeof store.dispatch

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()
