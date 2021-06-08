import { StoreSymbol } from './symbol'
import { inject } from 'vue'

export function useTodoStore() {
  const todoStore = inject(StoreSymbol)
  console.log(todoStore)
  if (!todoStore) throw '`todoStore` doesn\'t exist'
  return todoStore
}