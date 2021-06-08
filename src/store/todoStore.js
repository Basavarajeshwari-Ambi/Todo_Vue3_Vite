import { reactive, computed } from 'vue';
import { generateId } from './helpers'

const todoState = reactive({ 
    todos: [
        {
            id: generateId(),
            desc: 'Wash Clothes',
            done: false
        },
        {
            id: generateId(),
            desc: 'Clean Room',
            done: false
        },
        {
            id: generateId(),
            desc: 'Iron Clothes',
            done: false
        },
        {
            id: generateId(),
            desc: 'Water plants',
            done: true
        },
    ]
})

const createTodo = (desc) => {
    if (!desc) throw '`task` was not defined'
    todoState.todos.unshift({
        id: generateId(),
        desc,
        done: false
    })
    
}



const listTodos = computed(() => {
    return todoState.todos
})

const getTodo = todoId => {
    if (!todoId) throw '`todoId` was not defined'
    return todoState.todos.find(todo => todo.id == todoId)
}

const deleteTodo = todoId => {
    if (!todoId) throw '`todoId` was not defined'
    const index = todoState.todos.findIndex(todo => todo.id == todoId)
    todoState.todos.splice(index, 1)
}

const toggleTodo = todoId => {
    if (!todoId) throw '`todoId` was not defined'
    const todo = todoState.todos.find(todo => todo.id == todoId)
    todo.done = !todo.done
}

const clearCompletedTodos = () => {
    const toDelete = todoState.todos.filter(todo => todo.done)
    toDelete.map(todo => deleteTodo(todo.id))
}

const totalcompleted= computed(()=>{
   return todoState.todos.filter(todo=>todo.done).length
})



export default {
    todoState,
    listTodos,
    createTodo,
    getTodo,
    deleteTodo,
    toggleTodo,
    clearCompletedTodos,
    totalcompleted
}
