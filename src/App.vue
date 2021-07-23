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
const api = "https://script.google.com/macros/s/AKfycbyxOKMilvj7ePCJyEvmk4ZVh_a2stwMpNF607jg7uaICrJ3Nf1DW4eb6w1SHMaYsuEoDQ/exec"
export default {
  name: 'App',
  data () {
    return {
      items : null
    }
  },
  methods: {
    async onInput(e,item) {
      item.title = e.target.innerText;
      const res = await axios.post(api,JSON.stringify(item))
      console.log(res)
    }
  },
  async mounted () {
    this.items =
      (await axios.get(api)).data
  }
}
</script>
