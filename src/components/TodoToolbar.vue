<template>
<div class="stick">
  <div class="top">
  <h3>My To-Do List
  <span aria-label="Todo app icon">📝</span></h3></div>
  <div class="Toolbaar">
    <form @submit.prevent="submitForm">
      <input v-model="inputValue" />
      <button class="response">Add</button>
    </form>
  </div>
  <div class="status">
    {{totalcompleted}}/{{listTodos.length}}
  </div>
     
        <button class="resp" @click.prevent="clearCompletedTodos">
        
      clear completed
    </button>
    
</div>

</template>

<script>
    import { ref } from 'vue'
    import { useTodoStore } from './../store/consumer'
    export default {
      
        setup() {

          const { createTodo, clearCompletedTodos, totalcompleted, listTodos  } = useTodoStore()

            const inputValue = ref('')

            const submitForm = () => {
                try {
                     createTodo(inputValue.value);
                    inputValue.value = ''
                } catch (e) {
                    alert(e)
                }
            }

            return {
                clearCompletedTodos,
                submitForm,
                inputValue,
                listTodos,
                totalcompleted
            }
        }
    }
</script>

<style lang="scss" scoped>
    .Toolbar {
 background-color: none;
    }
    button.response{
  margin-left: 10px;
    background-color: #0b102e;
    color: white;
    border: none;
}

  button.resp{
    background-color: #0b102e;
    color: white;
    border: none;
}
 

input, button, select, textarea {
    padding: 1em;
    margin: 0 0 1em 0;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 2px;
}
.demo {
  font-family: sans-serif;
  border: 1px solid #eee;
  border-radius: 2px;
  padding: 20px 30px;
  margin-top: 1em;
  margin-bottom: 40px;
  user-select: none;
  overflow-x: auto;
}
.stick{
  position: sticky;
  background-color: white;
  z-index: 8;
  top:0;
}

.status{
  margin-right: 10px;
  display: inline;
}
</style>