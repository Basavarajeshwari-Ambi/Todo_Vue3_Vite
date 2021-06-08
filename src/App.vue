<template>
<div class="todo">
  <todo-page />
  </div>
</template>

<script>
  import TodoPage from './pages/TodoPage.vue'

  export default {
    components: {
      TodoPage,
    },
  }
</script>

<style>
#app{
font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fafafa;
    min-height: 100vh;
    margin: 0 auto;
}
.todo
{
    min-width: 300px;
    max-width: calc(30% + 10vw);
    border-radius: 4px;
    padding:1em;
    background: white;
    box-shadow: 0px 4px 12px rgb(0 0 0 / 8%);
    
}

@media (max-width: 600px) {
  #app{
font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
 
  margin-top: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: white;
    min-height: 100vh;
    margin: 0 auto;
}
.todo
{
    min-width: 300px;
    max-width: calc(30% + 10vw);
    border-radius: 4px;
    padding:1em;
    background: white;
    box-shadow: 0px 4px 12px rgb(0 0 0 / 8%);
    word-wrap: break-word;
    
}


}
</style>