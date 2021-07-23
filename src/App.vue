<template>
  <div id="list">
    <header id="list-header">
      <div>List</div>
    </header>
    <div id="list-main">
      <div contenteditable="true"
           v-for="(item) in items"
           :key=item.id
           @input="onInput($event,item)"
           >
           {{ item.title }}
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
const api = "https://script.google.com/macros/s/AKfycbytfGWcbaL1UXou6hrl9U9_gRPHt2iAH-nXpetUX0cI-wOGKG7QDJPTyziIgZeItKhJ4g/exec";
export default {
  name: 'App',
  data () {
    return {
      items : null
    }
  },
  methods: {
    onInput(e,item) {
      item.title = e.target.innerText;
      console.log(JSON.stringify(item))
    }
  },
  async mounted () {
    this.items =
      (await axios.get(api)).data
  }
}
</script>
