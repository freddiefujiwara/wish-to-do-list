import {createApp} from 'vue'
//import App from './App.vue'
createApp({
  computed: {
    tree() {
      return this.items.map(item => item.value).join('\n');
    }
  },
  data() {
    return {
      items: [
        { id: 0, value: "item-0", indent: 0},
        { id: 1, value: "item-1", indent: 1},
        { id: 2, value: "item-2", indent: 1},
      ]
    }
  }
}).mount('#app')
