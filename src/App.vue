<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
const STORAGE_KEY = 'todos-vuejs-demo'
const todoStorage = {
  fetch: () => {
    const todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
    todos.forEach(function (todo, index) {
      todo.id = index
    })
    todoStorage.uid = todos.length
    return todos
  },
  save: (todos) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  }
}

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  el: '#app',
  data: () => {
    return {
      todos: [],
      current: -1,
      options: [
        { value: -1, label: 'すべて' },
        { value: 0, label: '作業中' },
        { value: 1, label: '完了' }
      ]
    };
  },

  computed: {

    computedTodos: () => {
      return this.todos.filter((el) => {
        return this.current < 0 ? true : this.current === el.state
      }, this)
    },

    labels: () => {
      return this.options.reduce((a, b) => {
        return Object.assign(a, { [b.value]: b.label })
      }, {})
    }
  },

  watch: {
    todos: {
      handler: function(todos) {
        todoStorage.save(todos)
      },
      deep: true
    }
  },

  created: () => {
    this.todos = todoStorage.fetch()
  },

  methods: {

    doAdd: () => {
      const comment = this.$refs.comment
      if (!comment.value.length) {
        return
      }
      this.todos.push({
        id: todoStorage.uid++,
        comment: comment.value,
        state: 0
      })
      comment.value = ''
    },

    doChangeState: (item) => {
      item.state = !item.state ? 1 : 0
    },

    doRemove: (item) => {
      const index = this.todos.indexOf(item)
      this.todos.splice(index, 1)
    }

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
